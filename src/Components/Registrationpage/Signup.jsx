
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Avatar, Typography, TextField, Button, FormControlLabel, Box, Link } from '@mui/material';
// import {Link} from 'react-router-dom';
import axios from 'axios';

export const Signup = () => {
    const paperStyle = { padding: '70px 60px', width: 500, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { register, formState: { errors } } = useForm();
    const onSubmit = () => {
        const data = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phonenumber,
            password: password
        }
        try {
            axios({
                method: 'POST',
                url: 'http://ec2-13-127-120-169.ap-south-1.compute.amazonaws.com:4000/api/v1/create',
                data: data
            }).then(() => {
                alert("data saved successfully.....")
            });
        } catch (e) {
            console.log("error", e);
            
        }
        navigate("/signin");
    };


    return (
        <Grid>
            <Paper elevation={15} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}></Avatar>
                    <h2 style={{ headerStyle, color: "blue" }}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <div >
                    <TextField fullWidth style={{ padding: "5px" }} id='firstname ' label='FirstName' placeholder="Enter your firstname"
                        {...register('firstname', { required: 'Firstname is required' })}
                        error={Boolean(errors.firstname)}
                        helperText={errors.firstname?.message} onChange={e => setFirstName(e.target.value)} />
                    <TextField fullWidth style={{ padding: "5px" }} id='lastname ' label='LastName' placeholder="Enter your Lastname"
                        {...register('lastname', { required: 'Lastname is required' })}
                        error={Boolean(errors.lastname)}
                        helperText={errors.lastname?.message} onChange={e => setLastName(e.target.value)}  > </TextField >
                    <TextField fullWidth style={{ padding: "5px" }} id='email ' label='Email' placeholder="Enter your email"   {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' } })}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message} onChange={e => setEmail(e.target.value)} ></TextField>
                    <TextField fullWidth style={{ padding: "5px" }} id='phonenumber ' label='Phone Number' placeholder="Enter your phone number"
                        {...register('phonenumber', { required: 'phonenumber is required' })}
                        error={Boolean(errors.phonenumber)}
                        helperText={errors.phonenumber?.message} onChange={e => setPhonenumber(e.target.value)} ></TextField>
                    <TextField fullWidth style={{ padding: "5px" }} id='password ' label='Password' type='password' placeholder="Enter your password"
                        {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message} onChange={e => setPassword(e.target.value)} ></TextField>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Box textAlign='center'>
                        <Button type='`button`' onClick={() => onSubmit()} variant='contained' color='primary'>Sign up</Button>
                    </Box>
                    <Typography > Already have an account ?
                        <Link href="/login" style={{ padding: "3px" }} >
                            Sign In
                        </Link>
                    </Typography>

                </div>
            </Paper>
        </Grid>
    )
}

