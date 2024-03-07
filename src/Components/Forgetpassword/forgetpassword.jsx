import React, { useState } from 'react';
import { TextField, Button, Typography, Container,Grid,Paper,Avatar } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);
  const paperStyle={padding :20,height:'70vh',width:380, margin:"20px auto"}
  const avatarStyle={backgroundColor:'blue'}

  const sendOtp = async () => {
    try {
      const response = await axios.post('http://your-backend-url/send-otp', { email });
      if (response.data.success) {
        setStep(2);
      } else {
        alert('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please try again.');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://your-backend-url/verify-otp', { email, otp });
      if (response.data.success) {
        setStep(3);
      } else {
        alert('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Failed to verify OTP. Please try again.');
    }
  };

  const resetPassword = async () => {
    try {
      const response = await axios.post('http://your-backend-url/reset-password', { email, newPassword });
      if (response.data.success) {
        alert('Password reset successful!');
      } else {
        alert('Failed to reset password. Please try again.');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      alert('Failed to reset password. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      {step === 1 && (
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
          <Button variant="contained" onClick={sendOtp}>Send OTP</Button>
          </Grid>
          <label><ArrowCircleLeftIcon style={{color:"blue",fontSize:'25px'}}></ArrowCircleLeftIcon> back to</label>
          <Link to="/login"> login</Link>
          </Paper>
          </Grid>
          
        </div>
      )}
      {step === 2 && (
        <div>
          <Typography variant="h4" gutterBottom>Verify OTP</Typography>
          <TextField
            label="Enter OTP"
            fullWidth
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            margin="normal"
          />
          <Button variant="contained" onClick={verifyOtp}>Verify OTP</Button>
        </div>
      )}
      {step === 3 && (
        <div>
          <Typography variant="h4" gutterBottom>Reset Password</Typography>
          <TextField
            label="Enter new password"
            type="password"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            margin="normal"
          />
          <Button variant="contained" onClick={resetPassword}>Reset Password</Button>
        </div>
      )}
    </Container>
  );
};

export default ForgetPassword;
