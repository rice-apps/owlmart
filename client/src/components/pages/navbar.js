import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, TextField, InputAdornment, IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';


import favoritesIcon from '../../assets/favorites-icon.png';
import messageIcon from '../../assets/message-icon.png';
import addIcon from '../../assets/add-icon.png';

export const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <AppBar position="static" sx={{
      backgroundColor: 'transparent',
      boxShadow: 'none',
      marginTop: ".6vh",
      height: '', // Set the height to a percentage of the viewport height (vh)
     
    }}>
      <Toolbar>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100vw' }}>
      <Box  sx={{

            backgroundColor: 'transparent',}}>
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <Typography variant="h1" sx={{ fontSize: '2rem', fontFamily: 'Arial', fontWeight: 'bold', color: '#2E4561' }}>
            OWLMART
          </Typography>
        </Link>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor:"transparent", width: "40vw",}}>
        <TextField
          id="search-bar"
          variant="outlined"
          size="small"
          placeholder="Search for items or sellers"
          value={searchValue}
          onChange={handleSearchChange}
          sx={{
            width: '40vw',
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              backgroundColor: 'transparent',
              '& fieldset': {
                borderColor: '#2E4561',
              },
            },
            '& input::-webkit-input-placeholder': {
              color: '#9EB8D7',
            },
            color: 'white',
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">

                  <SearchIcon sx={{color: "#9EB8D7"}}/>

              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', backgroundColor:"transparent", width: "22vw", justifyContent: "space-between" }}>
        <IconButton>
          <img src={favoritesIcon} alt="favorites" style={{ width: '2.2rem', height: '2rem' }} />
        </IconButton>
        <IconButton>
        <img src={messageIcon} alt="messages" style={{ width: '2.2rem', height: '2rem' }} />
        </IconButton>
        <IconButton>
        <img src={addIcon} alt="messages" style={{ width: '2.2rem', height: '2rem' }} />
        </IconButton>
        <Button variant="contained" color="success" sx={{ whiteSpace: 'nowrap', borderRadius: '20px', textTransform: 'none', backgroundColor: "#2E4561", fontFamily: "Arial", fontSize: "1.1rem", fontWeight: "bold" }}>
          Log In
        </Button>
      </Box>
    </Box>
  </Toolbar>
</AppBar>

  );
};
