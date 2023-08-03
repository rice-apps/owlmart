import React from 'react';
import {
    Box,
    Grid
  } from '@mui/material';

import CardComponent from "./ProductsCard";
import listingsData from "./AllProducts";

const ProductsGrid = () => {
    return (
      <Box sx={{display:"flex", flexDirection:"column", width:"65vw", marginRight:"2vw", marginTop:"10vh", backgroundColor:"transparent",
      "@media only screen and (max-width:600px)":{
        marginLeft:5,
        marginRight:-10
      }
      }}>
        <Grid container spacing={1}>
          {listingsData.map((listing) => (
            <Grid item key={listing.id} xs={12} sm={6} md={4} lg={4}>
              <CardComponent
                id = {listing.id}
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

  export default ProductsGrid;