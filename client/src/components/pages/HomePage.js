import React from 'react';
import { Card, CardContent, CardActionArea, Grid, CardMedia, Typography, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Owl from './owl.png';
import test from './test.png';

import favoritesIcon from "../../assets/favorites-icon.svg";

const listingsData = [
  { id: 1, title: 'Item Name', seller: "aaron", description: "very good", price: '$100.00', image: Owl, pickup: 'on-campus', category: 'insert tags'},
  { id: 2, title: 'Item Name 2', seller: 'John Doe', description: "worth an investment", price: '$50.50', image: test, pickup: 'off-campus', category: 'insert tags' },
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
      padding: 0
    }}>
      <CardActionArea>
        <Box borderRadius="10px" overflow="hidden">
          <CardMedia component="img" height="325" image={image} alt={title} />
        </Box>
        
        <CardContent sx={{ marginBottom: '1rem' }}>
          <Typography sx={{ fontFamily: "Lato-regular", fontSize: "1.7rem", marginBottom: '0.5rem' }}>
            {title}
          </Typography>
  
          <Typography sx={{ fontFamily: "Lato-bold", fontSize: "1.1rem", marginBottom: '0.5rem' }}>
            Price: {price}
          </Typography>
  
          <Typography sx={{ fontFamily: "Libre-regular", fontSize: "1.5rem" }}>
            Seller: {seller}
          </Typography>
        </CardContent>
  
        <Box display="flex" justifyContent="space-between" alignItems="center" marginLeft="1rem" marginBottom="1rem">
          <Button variant="contained" sx={{ color: '#141517', backgroundColor: '#B6CEEA', fontFamily: "Lato-bold", fontSize: "1.1rem", textTransform: 'none' }}>
            Contact Seller
          </Button>
  
          <IconButton color="secondary" aria-label="add to favorites">
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

const ProductGrid = () => {
  return (
    <Grid container spacing={2}>
      {listingsData.map((listing) => (
        <Grid item key={listing.id} xs={8} sm={6} md={4} lg={3}>
          <CardComponent
            title={listing.title}
            price={listing.price}
            image={listing.image}
            seller={listing.seller}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export const HomePage = () => {
  return (
    <>
      <h1>This is the home page</h1>
      <ProductGrid />
    </>
  );
};
