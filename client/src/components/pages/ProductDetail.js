import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // Access the ID from the URL
  // Fetch the details of the product with the given ID from the server or any other data source

  return (
    <div>
      {/* Display the details of the product here */}
      <h1>Product Detail Page</h1>
      <p>Product ID: {id}</p>
      {/* ... */}
    </div>
  );
};

export default ProductDetail;