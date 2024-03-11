import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

export function ViewEmployeeDetails() {

  const [employeedetails, setEmployeedetails] = useState([]);
  const Employeedata = () => {
    let token = JSON.parse(localStorage.getItem("userinfo")).token;
    axios.get('http://ec2-13-127-120-169.ap-south-1.compute.amazonaws.com:4000/api/v1/emp/getEmployeeDetails', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error)
      })

    // try{
    //   let token = JSON.parse(localStorage.getItem("userinfo")).token;
    //     axios({
    //      method : 'GET',
    //      url :'http://ec2-13-127-120-169.ap-south-1.compute.amazonaws.com:4000/api/v1/emp/getEmployeeDetails', 
    //      headers: {
    //       'Authorization': 'Bearer ' + token
    //     }
    //      }).then((res)=>{        

    //             setEmployeedetails(res.data)
    //             // console.log(res.data);
    //      }
    //      )
    //    }
    //    catch(e) {
    //      console.log("error", e);
    // }
    // Employeedata();
  }
  useEffect(() => {

    Employeedata();

  }, [])

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Emp ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Primary Skill</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeedetails && employeedetails.map((row) => (
            <TableRow key={row.empId}
              sx={{ '&:last-child td , &:last-child th': { border: 0 } }}>
              <TableCell>{row.empId}</TableCell>
              <TableCell>{row.firstname}</TableCell>
              <TableCell>{row.lastname}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.designation}</TableCell>
              <TableCell>{row.primaryskill}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

