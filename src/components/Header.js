import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  const logout=()=>{
    localStorage.clear()
  }
  return (
    <AppBar 
    position='sticky'
    sx={{background:"black"}}>
         <Toolbar>
            <Typography variant='h5'>BlogsApp</Typography>
            <Box display="flex">
            <Link to={'/getall'}>
            <Button sx={{margin:1, borderRadius:10}} color='warning'>All Blogs</Button>
            </Link>
            </Box>
            <Box display="flex" marginLeft="auto">
                <Link to={'/login'}>
                <Button variant='contained' sx={{margin:1, borderRadius:10}} color='warning'>Login</Button>
                </Link>
                <Link to={'/signup'}>
                <Button variant='contained' sx={{margin:1, borderRadius:10}} color='warning'>Signup</Button>
                </Link>
                <Link to={'/login'}>
                <Button onClick={logout} variant='contained' sx={{margin:1, borderRadius:10}} color='warning'>Logout</Button>
                </Link>
                </Box>
         </Toolbar>
    </AppBar>
  )
}

export default Header