import React from 'react';
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
    image: 'product_image.jpg', // Replace 'product_image.jpg' with the URL or path to the product image
    pickup: 'on-campus',
    category: 'insert tags',
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Seller: {product.seller}</p>
      <p>Description: {product.description}</p>
      {/* Display the product image */}
      <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
      {/* Add any other information you want to display */}
    </div>
  );
};

export default ProductDetail;
