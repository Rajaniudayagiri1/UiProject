
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, FormControlLabel, Checkbox, Box } from '@mui/material';
export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const paperStyle = { padding: 20, height: '70vh', width: 380, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const onSubmit = () => {
        const data = {
            email: email,
            password: password
        }
        try {
            axios({
                method: 'POST',
                url: 'http://ec2-13-127-120-169.ap-south-1.compute.amazonaws.com:4000/api/v1/user/login',
                data: data
            }).then((res) => {
                if (res.status == 200) {
                    alert("user logged successfully.....")
                    localStorage.setItem("userinfo", JSON.stringify(res.data));
                } else {
                    alert("login failed");
                }

            })

        } catch (e) {
            console.log("error", e);
        }
        navigate("/addemployeedetails");

    };
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}></Avatar>
                    <h2 style={{ color: "brown" }}>Sign In</h2>
                </Grid>
                <div>
                    <TextField label='Email' style={{ padding: "5px" }} placeholder='Enter email' fullWidth required
                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' } })}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message} onChange={e => setEmail(e.target.value)}></TextField>
                    <TextField label='Password' style={{ padding: "5px" }} placeholder='Enter password' type='password' fullWidth required
                        {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message} onChange={e => setPassword(e.target.value)}></TextField>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                </div>
                <Box textAlign='center'>
                    <Button type='button' color='primary' variant="contained" style={btnstyle} onClick={() => onSubmit()} >Sign in</Button>
                </Box>
                <Typography >
                    <Link href="/forgetpassword" style={{ padding: "2px" }} >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Don't have an account ?
                    <Link href="/signup" >
                        Signup
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}