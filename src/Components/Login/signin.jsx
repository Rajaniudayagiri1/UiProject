import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link,FormControlLabel,Checkbox ,Box} from '@mui/material';
export const Login=()=>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const paperStyle={padding :20,height:'70vh',width:380, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const onSubmit=(data)=>{
        console.log(data);
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2 style={{color:"brown"}}>Sign In</h2>
                    
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                <TextField label='Email'style={{ padding: "5px" }} placeholder='Enter email' fullWidth required
                 {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' } })}
                 error={Boolean(errors.email)}
                 helperText={errors.email?.message}></TextField>
                <TextField label='Password'style={{ padding: "5px" }} placeholder='Enter password' type='password' fullWidth required
                  {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}></TextField>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                 </form>
                  <Box textAlign='center'>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} >Sign in</Button>
                </Box>
                <Typography >
                     <Link href="/forgetpassword" style={{ padding:"2px" }} >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="/signup" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )   }