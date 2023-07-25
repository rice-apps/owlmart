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
    title: 'Product Name',
    seller: 'John Doe',
    description: 'This is a great product.',
    price: '$100.00',
    image: 'owl.png', // Replace 'product_image.jpg' with the URL or path to the product image
    pickup: 'on-campus',
    category: 'insert tags',
  };


//   const productsData = [
//     { id: 1, title: 'Product 1', seller: 'Seller 1', price: '$100', image: 'product1.jpg' },
//     { id: 2, title: 'Product 2', seller: 'Seller 2', price: '$50', image: 'product2.jpg' },
//     { id: 3, title: 'Product 3', seller: 'Seller 3', price: '$75', image: 'product3.jpg' },
//     // Add more products here
//   ];
  
//   export default productsData;

//   import React from 'react';
// import { useParams } from 'react-router-dom';
// import productsData from './productsData'; // Import the productsData array

// // Function to fetch product details based on the product ID
// const fetchProductDetails = (productId) => {
//   // Simulate fetching the data from the data array
//   // In a real application, you would fetch data from an API or backend server
//   const product = productsData.find((item) => item.id === parseInt(productId, 10));
//   return product;
// };

// const ProductDetail = () => {
//   const { id } = useParams();

//   // Fetch the product details using the fetchProductDetails function
//   const product = fetchProductDetails(id);

//   if (!product) {
//     // Handle the case when the product with the given ID is not found
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <h2>{product.title}</h2>
//       <p>Price: {product.price}</p>
//       <p>Seller: {product.seller}</p>
//       <p>Description: {product.description}</p>
//       {/* Display the product image */}
//       <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
//       {/* Add any other information you want to display */}
//     </div>
//   );
// };

// export default ProductDetail;


  return (
    // <div>
    //   <h2>{product.title}</h2>
    //   <p>Price: {product.price}</p>
    //   <p>Seller: {product.seller}</p>
    //   <p>Description: {product.description}</p>
    //   {/* Display the product image */}
    //   <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
    //   {/* Add any other information you want to display */}
    // </div>
        // {product.title}
    <>
    <Navbar />


    <Box id = 'wrapper' sx= {{display: 'flex', justifyContent: 'row', gap: '10vw', marginLeft: '10vw', marginTop: "4rem"}}>

     <img
          src={OwlImg}
          alt={product.title}
          style={{
            width: '17rem',
            height: '22rem',
            border: '2px solid black', // Add black border here
          }}
        />

    <Box id = 'contents right of pic'>

     <Box id = 'first half' sx = {{display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography>
          Item Name
        </Typography>


    <Box id = '2nd row'sx = {{flexDirection: "row", display: 'flex', gap: "1rem"}}>
        <img src={favoritesIcon} alt="favorites" style={{ width: '24px', height: '24px' }} />
        
        <Typography>
          25 favorites
        </Typography>
     </Box>

      <Typography>
        Seller
      </Typography>

      <Button variant="contained" sx={{
            color: '#141517',
            backgroundColor: '#B6CEEA',
            fontFamily: "Lato-regular",
            fontSize: "1.1rem",
            textTransform: 'none',
            width: "10rem"
          }}>
            Contact Seller
          </Button>
        </Box>

        <Box id = 'description (2nd half)' sx = {{marginTop: "2rem", flexDirection: "Column"}}>
          <Typography>
            Description
          </Typography>
          <Box sx = {{flexDirection: "row", display: "flex", marginTop: "1rem"}}>
          <Box id = "labels" sx = {{flexDirection: "column", display: "flex"}}>
            <Typography>
              Category
            </Typography>

            <Typography>
              Category
            </Typography>
            </Box>

            <Box id = "label contents" sx = {{marginLeft: "2rem"}}>
              <Typography>
                Other
              </Typography>

              <Typography>
                On-Campus
              </Typography>
              </Box>
              

            </Box>
            
            <Typography sx = {{marginTop: "1rem", width: "45rem"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. A pellentesque sit amet porttitor eget dolor morbi. Ac placerat vestibulum lectus mauris ultrices
             eros in cursus. Tempor nec feugiat nisl pretium fusce id. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. 
            Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Viverra suspendisse potenti nullam ac tortor vitae. 
            </Typography>

        </Box>
  
        </Box>



    </Box>
    </>
  );
};

export default ProductDetail;
