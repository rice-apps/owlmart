import React from 'react';
import { Card, CardContent, CardActionArea, Grid, CardMedia, Typography, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Owl from './owl.png';
import test from './test.png';

import favoritesIcon from "../../assets/favorites-icon.svg";

const listingsData = [
  { id: 1, title: 'Item Name', seller: "aaron", description: "very good", price: '$100.00', image: Owl, pickup: 'on-campus', category: 'insert tags'},
  { id: 2, title: 'Item saf 2', seller: 'dsf', description: "worth an investment", price: '$50.50', image: test, pickup: 'off-campus', category: 'insert tags' },
  { id: 3, title: 'dsfa 2', seller: 'sdf', description: "worth an investment", price: '$50.50', image: test, pickup: 'off-campus', category: 'insert tags' },
  { id: 4, title: 'bdfb Name 2', seller: 'John sdf', description: "worth an investment", price: '$50.50', image: test, pickup: 'off-campus', category: 'insert tags' },
  { id: 5, title: '3242 Name 2', seller: 'dfsdfsd sdf', description: "worth an investment", price: '$50.50', image: test, pickup: 'off-campus', category: 'insert tags' },
  { id: 6, title: '543 2', seller: 'dfgfd Doe', description: "worth an investment", price: '$50.50', image: test, pickup: 'off-campus', category: 'insert tags' },

];

const CardComponent = ({ image, title, price, seller }) => {
  return (
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
          <CardMedia component="img" height="370" image={image} alt={title} />
        </Box>
        
        <CardContent sx={{ marginBottom: '1rem' }}>
          <Typography sx={{ fontFamily: "Lato-regular", fontSize: "1.7rem", marginBottom: '0.5rem' }}>
            {title}
          </Typography>
  
          <Typography sx={{ fontFamily: "Lato-bold", fontSize: "1.3rem", marginBottom: '0.5rem' }}>
            Price: {price}
          </Typography>
  
          <Typography sx={{ fontFamily: "Libre-regular", fontSize: "1rem" }}>
            {seller}
          </Typography>
        </CardContent>
  
        <Box display="flex" justifyContent="space-between" alignItems="center" marginLeft="1rem" marginBottom="1rem">
          <Button variant="contained" sx={{ color: '#141517', backgroundColor: '#B6CEEA', fontFamily: "Lato-regular", fontSize: "1.1rem", textTransform: 'none' }}>
            Contact Seller
          </Button>
  
          <IconButton  aria-label="add to favorites">
            <img
              src={favoritesIcon}
              alt="favorite"
              style={{ width: "2.2rem", height: "2rem" }}
            />
          </IconButton>
        </Box>
      </CardActionArea>
    </Card>
  );
};

const Products = () => {
  return (
    <Box display="flex" width="80vw" marginRight="2vw" marginTop = "10vh" backgroundColor = "blue">
      <Grid container spacing = {1} >
        {listingsData.map((listing) => (
          <Grid item key={listing.id} xs={12} sm={6} md={4} lg={4}>
            <CardComponent
              title={listing.title}
              price={listing.price}
              image={listing.image}
              seller={listing.seller}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


const Filters = () => {
  return (
  <Box sx={{ backgroundColor: "green", height: "100vh", width: "20vw", marginLeft: '5vw' }}>
    <Typography sx={{ fontFamily: "Lato-Bold", fontSize: "3rem" }}>
      Items
    </Typography>

    <Typography sx={{ fontFamily: "Lato-regular", fontSize: "1rem", marginBottom: '0.5rem', marginTop: '1rem' }}>
      Filters
    </Typography>
  </Box>
  )
}

export const HomePage = () => {
  return (
    <>
      <Box display = "flex" justifyContent="space-between">
        <Filters />
        <Products />
      </Box>
    </>
  );
};
