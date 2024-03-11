import React, { useState } from 'react';
import { TextField, Button,Container,Grid,Paper } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

import ErrorIcon from '@mui/icons-material/Error';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
 export  const Resetpassword = () => {
  const [otp,setOtp]=useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmpassword,setConfirmpassword]=useState('');
  const paperStyle={padding :20,height:'90vh',width:450, margin:"20px auto"};
  // const navigate = useNavigate();
  const onSubmit =()=>{
       const data = {
            otp:otp,
           newPassword:newPassword,
           confirmpassword:confirmpassword
       }
       try{
       axios({  
        method: 'POST',
        url :'http://ec2-13-127-120-169.ap-south-1.compute.amazonaws.com:4000/api/v1/reset/password', 
        data:data}).then(()=>{
          if (data){
            alert('password changed succesfully....!')
                } else {
               alert('Failed to change password. Please try again.');
    
        }
      });

      } catch(e) {
        console.log("error", e);
  ; }
      
 
  };
  return (
    <Container maxWidth="m">
        <div>
          <Grid>
          <Paper elevation={15} style={paperStyle}>
                <Grid align='center'>
                     <ErrorIcon style={{color:"red",fontSize:'50px'}} ></ErrorIcon>
                    <h2 style={{color:"navyblue"}}>Reset Password</h2>  
                </Grid>
           <TextField
            label="Enter otp"
            fullWidth
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Enter newpassword"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Enter confirmpassword"
            fullWidth
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            margin="normal"
          />
          <Grid style={{textAlign:"center"}}>
          <Button variant="contained"type='button' onClick={()=>onSubmit()}>Submit</Button>
          </Grid>
          <label><ArrowCircleLeftIcon style={{color:"blue",fontSize:'25px'}}></ArrowCircleLeftIcon> back to</label>
          <Link to="/login"> login</Link>
          </Paper>
          </Grid>
          
        </div>
    </Container>
  );
};
