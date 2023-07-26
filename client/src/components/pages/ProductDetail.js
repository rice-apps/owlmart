import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Navbar } from './Navbar.js';
import OwlImg from './owl.png';

import favoritesIcon from "../../assets/favorites-icon.svg";

//import { useParams } from 'react-router-dom';

const ProductDetail = () => {
 // const { id } = useParams();

  // Assuming you have fetched the product details from your data source based on the id
  const product = {
    id: 1,
    title: 'Cool Product',
    seller: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Tempor nec feugiat nisl pretium fusce id. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Viverra suspendisse potenti nullam ac tortor vitae. .',
    price: '$100.00',
    image: 'owl.png', // Replace 'product_image.jpg' with the URL or path to the product image
    pickup: 'on-campus',
    category: 'insert tags',
  };
  return (
    <>
<Navbar />

<Box
  id="product wrapper (top half page)"
  sx={{
    display: 'flex',
    justifyContent: 'row',
    gap: '10vw',
    marginLeft: '10vw',
    marginTop: '4rem',
  }}
>

    <img
      src={OwlImg}
      alt={product.title}
      style={{
        width: '17rem',
        height: '22rem',
        border: '2px solid black', // Add black border here
      }}
    />


  <Box id="contents right of pic">
    <Box
      id="first half"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: '2rem',
          fontFamily: 'Lato-bold',
          color: '#2E4561',
        }}
      >
        {product.title}
      </Typography>

      <Box
        id="2nd row"
        sx={{
          flexDirection: 'row',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          marginTop: '.5rem',
        }}
      >
        <img
          src={favoritesIcon}
          alt="favorites"
          style={{ width: '24px', height: '24px' }}
        />

        <Typography
          sx={{
            color: '#141517',
            fontFamily: 'Libre-Baskerville-normal',
            fontSize: '1.3rem',
          }}
        >
          25 favorites
        </Typography>
      </Box>

      <Typography
        sx={{
          fontFamily: 'Lato-bold',
          fontSize: '1rem',
          marginTop: '.5rem',
          color: '#141517',
        }}
      >
        {product.price}
      </Typography>

      <Typography
        sx={{
          fontFamily: 'Libre-regular',
          fontSize: '1rem',
          marginTop: '.5rem',
          color: '#141517',
        }}
      >
        {product.seller}
      </Typography>

      <Button
        variant="contained"
        sx={{
          color: '#141517',
          backgroundColor: '#B6CEEA',
          fontFamily: 'Lato-regular',
          fontSize: '1.1rem',
          textTransform: 'none',
          width: '15rem',
          marginTop: '.5rem',
          borderRadius: '.5rem',
          border: '1px solid #2E4561',
          padding: '.2rem',
        }}
      >
        Contact Seller
      </Button>
    </Box>

    <Box id="description (2nd half)" sx={{ marginTop: '2rem', flexDirection: 'Column' }}>
      <Typography sx={{ color: '#2E4561', fontSize: '1.7rem', fontFamily: 'Lato-bold' }}>
        Description
      </Typography>

      <Box id = 'wrapper for bottom half' sx={{ flexDirection: 'row', display: 'flex', marginTop: '.5rem', alignItems: "center"}}>
        <Box id="labels" sx={{ flexDirection: 'column', display: 'flex', color: '#2E4561' }}>
          <Typography sx={{ fontSize: '1.3rem', fontFamily: 'Lato-bold' }}>
            Category:
          </Typography>

          <Typography sx={{ fontSize: '1.3rem', marginTop: '.5rem', fontFamily: 'Lato-bold' }}>
            Pickup:
          </Typography>
        </Box>

        <Box id="label contents" sx={{ marginLeft: '2rem', color: '#141517' }}>
          <Typography sx={{ fontSize: '1.3rem', fontFamily: 'Libre Baskerville-normal' }}>
            Other
          </Typography>

          <Typography sx={{ fontSize: '1.3rem', marginTop: '.5rem', fontFamily: 'Libre Baskerville-normal' }}>
            On-Campus
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          width: '45rem',
          marginTop: '.5rem',
          color: '#141517',
          fontFamily: 'Libre Baskerville-normal',
          fontSize: '1.1rem',
          lineHeight: '1.3',
        }}
      >
        {product.description}
      </Typography>
    </Box>
  </Box>
</Box>



<Box id = "seller's other listings wrapper">
  <Typography
    sx={{
      fontSize: "2rem",
      fontFamily: "Lato-bold",
      color: "#2E4561",
      marginTop: "5rem",
      marginLeft: '10vw',
    }}
  >
    {product.seller}'s Other Listings
  </Typography>
</Box>
</>
  );
};

export default ProductDetail;
