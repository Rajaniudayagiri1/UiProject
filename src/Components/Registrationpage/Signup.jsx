
import React from 'react';
import { useForm } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import { Grid, Paper, Avatar, Typography, TextField, Button, FormControlLabel,Box,Link } from '@mui/material';
// import {Link} from 'react-router-dom';
import axios from 'axios';

export const Signup = () => {
    const paperStyle = { padding: '70px 60px', width: 500, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:4000/user', data);
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        // try {
        //   const response = await fetch('http://ec2-13-127-120-169.ap-south-1.compute.amazonaws.com:4000/api/v1/user', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        //   });
        //   const responseData = await response.json();
        //   console.log(responseData);
        // } catch (error) {
        //   console.error('Error:', error);
        // }
      };
    
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}></Avatar>
                    <h2 style={{headerStyle, color:"blue"}}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField fullWidth style={{ padding: "5px" }} id='firstname ' label='FirstName' placeholder="Enter your firstname"
                        {...register('firstname', { required: 'Firstname is required' })}
                        error={Boolean(errors.firstname)}
                        helperText={errors.firstname?.message} > </TextField >
                    <TextField fullWidth style={{ padding: "5px" }} id='lastname ' label='LastName' placeholder="Enter your Lastname"
                        {...register('lastname', { required: 'Lastname is required' })}
                        error={Boolean(errors.lastname)}
                        helperText={errors.lastname?.message} > </TextField >
                    <TextField fullWidth style={{ padding: "5px" }} label='Email' placeholder="Enter your email"   {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' } })}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}></TextField>
                    <TextField fullWidth style={{ padding: "5px" }} label='Phone Number' placeholder="Enter your phone number"
                        {...register('phonenumber', { required: 'phonenumber is required' })}
                        error={Boolean(errors.phonenumber)}
                        helperText={errors.phonenumber?.message}></TextField>
                    <TextField fullWidth style={{ padding: "5px" }} label='Password' placeholder="Enter your password"
                        {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}></TextField>
                    {/* <TextField fullWidth style={{ padding: "5px" }}label='Confirm Password' placeholder="Confirm your password"/> */}
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Box textAlign='center'>
                    <Button type='submit' variant='contained'color='primary'>Sign up</Button>
                    </Box>
                    <Typography > Already have an account ?
                     <Link href="/login" style={{ padding:"3px" }} >
                        Sign In 
                </Link>
                </Typography>

                </form>
            </Paper>
        </Grid>
    )
}

