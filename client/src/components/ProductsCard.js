import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from '@mui/material';

import Button from '@mui/material/Button';

import favoritesIcon from "../assets/favorites-icon.svg";


const CardComponent = ({ id, image, title, price, seller }) => {
  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
    <Card sx={{
      backgroundColor: "transparent",
      maxWidth: 300,
      width: "100%",
      height: "auto",
      boxShadow: 'none',
      display: 'flex',
      flexDirection: 'column',
	  
    }}>
      <CardActionArea>
        <Box borderRadius="10px" overflow="hidden">
          <CardMedia component="img" height="310" image={image} alt={title} />
        </Box>
        
        <CardContent sx={{ marginBottom: '1rem', color: '#141517', }}>
          <Typography sx={{
            fontFamily: "Lato-regular",
            fontSize: "1.7rem",
            marginBottom: '0.5rem',
          }}>
            {title}
          </Typography>
  
          <Typography sx={{
            fontFamily: "Lato-bold",
            fontSize: "1.3rem",
            marginBottom: '0.5rem',
          }}>
            Price: {price}
          </Typography>
  
          <Typography sx={{
            fontFamily: "Libre-regular",
            fontSize: "1rem",
          }}>
            {seller}
          </Typography>
        </CardContent>
  
        <Box display="flex" justifyContent="space-between" alignItems="center" marginLeft="1rem" marginBottom="1rem">
          <Button variant="contained" sx={{
            color: '#141517',
            backgroundColor: '#B6CEEA',
            fontFamily: "Lato-regular",
            fontSize: "1.1rem",
            textTransform: 'none',
          }}>
            Contact Seller
          </Button>
  
          <IconButton aria-label="add to favorites">
            <img
              src={favoritesIcon}
              alt="favorite"
              style={{ width: "2.2rem", height: "2rem" }}
            />
          </IconButton>
        </Box>
      </CardActionArea>
    </Card>
    </Link>
  );
};

export default CardComponent;