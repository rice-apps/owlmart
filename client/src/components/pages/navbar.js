import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, TextField, InputAdornment, IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

export const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Box sx = {{gap: "3rem", display: "flex", alignItems: "center",}}>
          <Box sx={{ display: "flex", justifyContent: "space-between", flexGrow: 1 }}>
            <Link to='/home' style={{ textDecoration: 'none' }}>
              <Typography variant="h1" sx={{ fontSize: '2.4rem', fontFamily: 'Arial', fontWeight: 'bold', color: "#2E4561" }}>
                OWLMART
              </Typography>
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center",}}>
            <TextField
              id="search-bar"
              variant="outlined"
              size="small"
            
              placeholder="Search for items or sellers"
              value={searchValue}
              onChange={handleSearchChange}
              sx={{
                width: '30rem',
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
                color:"white",

              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton disabled>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "20em", }}>
              <IconButton >
                <FavoriteIcon />
              </IconButton>
              <IconButton >
                <MessageIcon />
              </IconButton>
              <IconButton >
                <AddIcon />
              </IconButton>
              <Button variant="contained" color="success" sx={{borderRadius: "20px"}}>
                Log in
              </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
