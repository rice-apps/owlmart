import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Box sx={{ display: "flex", justifyContent: "space-between", flexGrow: 1 }}>

        <Link to='/home' style={{ textDecoration: 'none' }}>
              <Typography variant="body1" sx={{ fontSize: '1rem', fontFamily: 'Lato', fontWeight: 'bold', color: "#2E4561"}}> 
              OWLMART</Typography>
            </Link>

          <Link to='/favorites'>
              <Typography variant="body1">Favorites</Typography>
            </Link>

            <Link to='/cart'>
              <Typography variant="body1">Cart</Typography>
            </Link>

        </Box>
      </Toolbar>
    </AppBar>
  );
};