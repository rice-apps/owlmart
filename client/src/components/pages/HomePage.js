import React from 'react';
import { Card, CardContent, CardActionArea, Grid , CardMedia, Typography, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';

const listingsData = [
	{ id: 1, title: 'Product 1', description: "very good", price: '$19.99', image: 'product1.jpg', pickup: 'on-campus', category: 'insert tags'},
	{ id: 2, title: 'Product 2', description: "worth an investment", price: '$29.99', image: 'product2.jpg', pickup: 'off-campus', category: 'insert tags' },
	]

const CardComponent = ({ title, price, image }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {price}
          </Typography>
        </CardContent>
      
      <Box display="flex" justifyContent="space-between" alignItems="center" padding="1rem">
        <Button variant="outlined" color="primary">
          Contact Seller
        </Button>
        <IconButton color="secondary" aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </Box>
	  </CardActionArea>
    </Card>
  );
};

export default CardComponent;


const ProductGrid = () => {
	return (
		<Grid container spacing={2}>
		{listingsData.map((listing) => (
			<Grid item key={listing.id} xs={8} sm={6} md={4} lg={3}>
			<CardComponent
				title={listing.title}
				price={listing.price}
				image={listing.image}
			/>
			</Grid>
		))}
		</Grid>
	);
	};


export const HomePage = () => {
	return(
		<>
			<h1>This is the home page</h1>
			<ProductGrid />



		</>
	);
}