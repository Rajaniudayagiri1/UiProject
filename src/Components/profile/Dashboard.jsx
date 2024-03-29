
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';

export  function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
             <MenuIcon> <Link to="/signin" style={{textDecoration:"none",color:"white"}}></Link>profile</MenuIcon> 
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button color='inherit' >
            <Link to="/signup" style={{textDecoration:"none",color:"white"}}>Signup</Link></Button>
          <Button color="inherit"><Link to="/login"style={{textDecoration:"none",color:"white"}}>Signin</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}