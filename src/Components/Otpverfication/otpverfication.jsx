// import React, { useState,useContext } from 'react';
// import { TextField, Button, Typography, Container,Grid,Paper } from '@mui/material';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import ErrorIcon from '@mui/icons-material/Error';
// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// import { RecoveryContext } from "../../App";
//  export  const Otpverfication = ({ onResend }) => {
//    const [otp1, setOtp1] = useState('');
//   const paperStyle={padding :20,height:'90vh',width:450, margin:"20px auto"};
//   const navigate = useNavigate();
//    const {  otp } = useContext(RecoveryContext);
//     const [timerCount, setTimerCount] = useState(0);
//     const [disable, setDisable] = useState(false);

//   const onSubmit =()=>{
//        const data = {
//            otp1:otp,
//        }
//        try{
//        axios({  
//         method: 'POST',
//         url :'http://ec2-13-127-120-169.ap-south-1.compute.amazonaws.com:4000/api/v1/reset/password', 
//         data:data}).then(()=>{
//           if (parseInt(otp) === otp1){
//             navigate("/resetpassword");
//                 } else {
//                alert('invalid otp. Please try again.');
//         }
//       });
//       } catch(e) {
//         console.log("error", e);
//   ; }
//   setDisable(true);
//         setTimerCount(30); // Set timer count to 30 seconds

//         const timer = setInterval(() => {
//             setTimerCount((prevCount) => prevCount - 1);
//         }, 1000);

//         setTimeout(() => {
//             clearInterval(timer);
//             setDisable(false);
//         }, 30000); // Reset timer after 30 seconds

//         // Callback to parent component
//         if (onResend) {
//             onResend();
//         }

// }; 

//   return (
//     <Container maxWidth="m">
//         <div>
//           <Grid>
//           <Paper elevation={15} style={paperStyle}>
//                 <Grid align='center'>
//                      <ErrorIcon style={{color:"red",fontSize:'50px'}} ></ErrorIcon>
//                     <h2 style={{color:"navyblue"}}>Otp Verfication</h2>  
//                 </Grid>
//           <Typography > We have sent a verification code to your email. </Typography>
//           <TextField
//             label="Enter your otp"
//             fullWidth
//             value={otp1}
//             onChange={(e) => setOtp1(e.target.value)}
//             margin="normal"
//           />
//           <Grid style={{textAlign:"center"}}>
//           <Button variant="contained"type='button' onClick={()=>onSubmit()}>Verify OTP</Button>
//           {/* <a onClick={() => onSubmit()} > Didn't receive code? 
//             { disable? `Resend OTP in ${timercount}s` : " Resend OTP"}
//           </a> */}
//            <a href="#" onClick={onSubmit} style={{ pointerEvents: disable ? 'none' : 'auto' }}>
//             {disable ? `Resend OTP in ${timerCount}s` : 'Resend OTP'}
//         </a>
//           </Grid>
//           <label><ArrowCircleLeftIcon style={{color:"blue",fontSize:'25px'}}></ArrowCircleLeftIcon> back to</label>
//           <Link to="/login"> login</Link>
//           </Paper>
//           </Grid>

//         </div>
//     </Container>
//   );
// };
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export function Otpverfication() {
    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');
    const navigate = useNavigate();
    const sendOTP = () => {
        const data = {
            otp: otp,
        }
        try {
            axios({
                method: 'POST',
                url: 'http://ec2-13-127-120-169.ap-south-1.compute.amazonaws.com:4000/api/v1/reset/password',
                data: data
            }).then(() => {
                if (data) {
                    alert("otp send to given email id")
                } else {
                    alert('invalid otp. Please try again.');
                }
            });
        } catch (e) {
            console.log("error", e);
            ;
        }
        navigate("/resetpassword");
    };

    const resendOTP = () => {
        sendOTP(); // Resend OTP using the sendOTP function
    };

    return (
        <div>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={sendOTP}>Send OTP</button>
            <p>resend the otp click </p>
            <a href="#" onClick={resendOTP}>Resend OTP</a>
        </div>
    );
    }
