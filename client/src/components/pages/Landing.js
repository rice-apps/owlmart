import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box} from '@mui/material';
import "./Landing.css";
import {Navbar} from "./navbar";

export const LandingPage = () => {
  return (
    <div className="App">
      <Navbar></Navbar> 
      <Box sx ={{ p: 2, m: 2,bgcolor: "#9EB8D7" }}> 
        <Typography variant="h4" align="center" sx={{ mb:2}}>OWLMART</Typography>
  
        <section className="App-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporum ipsum...
          </p>
          <Link to="/home">
            <Button variant="contained" color="white">Shop Now</Button>
          </Link>
        </section>
      </Box>

      <section className="Question-header">
        <p>
          Want to start selling? 
        </p>
        <Link to="/signup">
          <Button variant="contained" color="secondary">Sign Up</Button>
        </Link>
      </section>
    </div>
  );
}
