import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", justifyContent: "space-between", flexGrow: 1 }}>

          <Link to='/favorites'>
              <Typography variant="body1">Favorites</Typography>
            </Link>


            <Link to='/cart'>
              <Typography variant="body1">Cart</Typography>
            </Link>

            <Link to='/home'>
              <Typography variant="body1">Home</Typography>
            </Link>

        </Box>
      </Toolbar>
    </AppBar>
  );
};