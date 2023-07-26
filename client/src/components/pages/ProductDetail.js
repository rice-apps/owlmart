import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Navbar } from './Navbar.js';
import Owl from './owl.png';
import { useParams } from 'react-router-dom';
import { Carousel, Paper } from 'react-material-ui-carousel';


import favoritesIcon from "../../assets/favorites-icon.svg";

//import { useParams } from 'react-router-dom';

const Products = [
  { id: 1, title: 'Item Name', seller: "aaron", description: "very good", price: '$100.00', image: Owl, pickup: 'on-campus', category: 'insert tags'},
  { id: 2, title: 'Item saf 2', seller: 'dsf', description: "worth an investment", price: '$50.50', image: Owl, pickup: 'off-campus', category: 'insert tags' },
  { id: 3, title: 'dsfa 2', seller: 'sdf', description: "worth an investment", price: '$50.50', image: Owl, pickup: 'off-campus', category: 'insert tags' },
  { id: 4, title: 'bdfb Name 2', seller: 'John sdf', description: "worth an investment", price: '$50.50', image: Owl, pickup: 'off-campus', category: 'insert tags' },
  { id: 5, title: '3242 Name 2', seller: 'dfsdfsd sdf', description: "worth an investment", price: '$50.50', image: Owl, pickup: 'off-campus', category: 'insert tags' },
  { id: 6, title: '543 2', seller: 'dfgfd Doe', description: "worth an investment", price: '$50.50', image: Owl, pickup: 'off-campus', category: 'insert tags' },
];

const Item = ({ item }) => {
  return (
    <Paper>
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Typography>{item.title}</Typography>
      {/* Add more information or caption here */}
    </Paper>
  );
};


const ProductDetail = () => {
  const { id } = useParams();

  // Find the product with the current 'id' from the 'products' array
  const product = Products.find((product) => product.id === parseInt(id));

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
      src={Owl}
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



<Box id="seller's other listings wrapper">
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


        <Carousel>
            {
                Products.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
      </Box>
</>
  );
};

export default ProductDetail;
