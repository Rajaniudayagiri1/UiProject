import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import { Grid,Avatar, Typography, TextField, Button, FormControlLabel,Box,Link } from '@mui/material';

export function AddEmployeeDetails(){
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const [empid,setEmpid]=useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber,setPhonenumber]=useState('');
  const [designation,setDesignation]=useState('');
  const [primaryskill,setPrimaryskill]=useState('');
  const navigate = useNavigate();
  const { register,handleSubmit, formState: { errors } } = useForm();
  const onSubmit = () => {
    
    const data = {
        empId:empid,
        firstname: firstname,
        lastname:lastname,
        email:email,
        phone: phonenumber,
        designation:designation,
        primaryskill:primaryskill
    }
  
      try {
        let token =JSON.parse(localStorage.getItem("userinfo")).token;
        axios({
        method: 'POST',
         url : 'http://ec2-13-127-120-169.ap-south-1.compute.amazonaws.com:4000/api/v1/emp/addEmpDetails', 
        data:data,
        headers: {
          'Authorization': 'Bearer ' + token
          
        }
      }).then(()=>{
            alert("data saved successfully.....")
          
        });

      } catch(e) {
        console.log("error", e);
;         }

navigate("/viewEmployeeDetails"); 
  };

  return(
    <Grid>
        <Grid align='center'>
            <Avatar style={avatarStyle}></Avatar>
            <h2 style={{headerStyle, color:"blue"}}>Employee Registration</h2>
            <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
        </Grid>
        <div align='center' >
        <TextField  style={{ padding: "5px",width:'350px' }} id='empid' label='employeeId' placeholder="Enter your employeeid"
                {...register('empid', { required: 'employeeid is required' })}
                error={Boolean(errors.empid)}
                helperText={errors.firstname?.message}  onChange={e => setEmpid(e.target.value)} /> 
                <br></br>
            <TextField  style={{ padding: "5px",width:'350px' }} id='firstname ' label='FirstName' placeholder="Enter your firstname"
                {...register('firstname', { required: 'Firstname is required' })}
                error={Boolean(errors.firstname)}
                helperText={errors.firstname?.message}  onChange={e => setFirstName(e.target.value)} /> 
                <br></br>
              <TextField  style={{ padding: "5px",width:'350px' }} id='lastname ' label='LastName' placeholder="Enter your Lastname"
                {...register('lastname', { required: 'Lastname is required' })}
                error={Boolean(errors.lastname)}
                helperText={errors.lastname?.message}onChange={e => setLastName(e.target.value)}  > </TextField >
                <br></br>
            <TextField style={{ padding: "5px",width:'350px' }}  id='email 'label='Email' placeholder="Enter your email"   {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' } })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message} onChange={e => setEmail(e.target.value)} ></TextField>
                <br></br>
            <TextField  style={{ padding: "5px",width:'350px' }}  id='phonenumber 'label='Phone Number' placeholder="Enter your phone number"
                {...register('phonenumber', { required: 'phonenumber is required' })}
                error={Boolean(errors.phonenumber)}
                helperText={errors.phonenumber?.message} onChange={e => setPhonenumber(e.target.value)} ></TextField>
                <br></br>
            <TextField  style={{ padding: "5px",width:'350px' }} id='designation ' label='designation'  placeholder="Enter your current status"
                {...register('designation', { required: 'designation is required', minLength: { value: 6, message: 'enter your valid designation' } })}
                error={Boolean(errors.designation)}
                helperText={errors.designation?.message} onChange={e => setDesignation(e.target.value)} ></TextField>
                <br></br>
                <TextField  style={{ padding: "5px",width:'350px' }} id='primaryskill' label='primaryskill'  placeholder="Enter your skills"
                {...register('primaryskill', { required: 'skillset is required', minLength: { value: 4, message: 'enter your primary skills' } })}
                error={Boolean(errors.primaryskill)}
                helperText={errors.primaryskill?.message} onChange={e => setPrimaryskill(e.target.value)} ></TextField>
                <br></br>
            <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="I accept the terms and conditions."
            />
            <Box textAlign='center'>
            <Button type='`button`'  onClick={() => onSubmit()} variant='contained'color='primary'>Submit</Button>
            </Box>
            <Typography > Already registered ?
             <Link href="/login" style={{ padding:"3px" }} >
                Sign In 
        </Link>
        </Typography>

        </div>
</Grid>
)
}
  
