import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link, Switch, Route, Redirect,} from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", justifyContent: "space-between", flexGrow: 1 }}>


                <Typography variant="body1">Favorites</Typography>



                <Typography variant="body1">Home</Typography>



                <Typography variant="body1">Cart</Typography>


        </Box>
      </Toolbar>
    </AppBar>
  );
};