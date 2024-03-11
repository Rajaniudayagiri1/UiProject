import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container,Grid,Paper } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

 export  const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const paperStyle={padding :20,height:'70vh',width:380, margin:"20px auto"}
  const sendOtp = () => {
    
       const data = {
           email:email,
       }
       try{
       axios({
        method: 'POST',
        url :'http://ec2-13-127-120-169.ap-south-1.compute.amazonaws.com:4000/api/v1/forgot/password', 
        data:data}).then(()=>{        
          if (data) {
            alert("Otp sent to email.....");
          } else {
         alert('Failed to send OTP. Please try again.');
  }            
        }
        )
      }
      catch(e) {
        console.log("error", e);
   }
   navigate("/resetpassword");
  };
  const resendOTP = () => {
    sendOtp(); // Resend OTP using the sendOTP function
};
  return (
    <Container maxWidth="sm">
       
        <div>
          <Grid>
          <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <ErrorIcon style={{color:"red",fontSize:'50px'}} ></ErrorIcon>
                    <h2 style={{color:"navyblue"}}>Forget Password</h2>  
                </Grid>
          <Typography >Enter your email and we'll send you a link to reset your password </Typography>
          <TextField
            label="Enter your email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <Grid style={{textAlign:"center"}}>
          <Button variant="contained"type='button' onClick={()=>sendOtp()}>Send OTP</Button>
          <p>resend the otp click </p>
            <Link to="/" onClick={resendOTP}>Resend OTP</Link>
          </Grid>
          <label><ArrowCircleLeftIcon style={{color:"blue",fontSize:'25px'}}></ArrowCircleLeftIcon> back to</label>
          <Link to="/login"> login</Link>
          </Paper>
          </Grid>
          
        </div>
        </Container>
      )
      }