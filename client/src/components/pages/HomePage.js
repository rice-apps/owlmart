import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActionArea,
  Grid,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
  Checkbox,
  FormControlLabel, // Add this import statement
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Owl from './owl.png';
import test from './test.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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

const PriceSlider = () => {
  const [priceRange, setPriceRange] = useState([0, 200]); // Default price range

  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Box>

      <Slider
        value={priceRange}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={500}
      />
      <Typography gutterBottom>Min: ${priceRange[0]}</Typography>
      <Typography gutterBottom>Max: ${priceRange[1]}</Typography>
    </Box>
  );
};

const PriceDropdown = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAccordionChange = (event, isExpanded) => {
    setIsExpanded(isExpanded);
  };

  return (
    <Accordion expanded={isExpanded} onChange={handleAccordionChange} elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ fontFamily: "Libre Baskerville-regular", fontSize: "1.3rem" }}>Price:</Typography>

      </AccordionSummary>
      <AccordionDetails sx={{ border: 'none' }}>
        <PriceSlider />
      </AccordionDetails>
    </Accordion>
  );
};

const CategoryAccordion = () => {
  const [categoryState, setCategoryState] = useState({
    category1: false,
    category2: false,
    category3: false,
    category4: false,
  });

  const handleCategoryChange = (event) => {
    setCategoryState((prevCategoryState) => ({
      ...prevCategoryState,
      [event.target.name]: event.target.checked,
    }));
  };
  

  return (
    <Accordion elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography sx={{ fontFamily: "Libre Baskerville-regular", fontSize: "1.3rem" }}>Category:</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ display: 'block', border: "none"}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={categoryState.category1}
                onChange={handleCategoryChange}
                name="category1"
              />
            }
            label={<Typography sx={{ fontFamily: "Libre Baskerville-regular", fontSize: "1rem" }}>Clothing</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={categoryState.category2}
                onChange={handleCategoryChange}
                name="category1"
              />
            }
            label={<Typography sx={{ fontFamily: "Libre Baskerville-regular", fontSize: "1rem" }}>Furniture</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={categoryState.category3}
                onChange={handleCategoryChange}
                name="category1"
              />
            }
            label={<Typography sx={{ fontFamily: "Libre Baskerville-regular", fontSize: "1rem" }}>Appliances</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={categoryState.category4}
                onChange={handleCategoryChange}
                name="category1"
              />
            }
            label={<Typography sx={{ fontFamily: "Libre Baskerville-regular", fontSize: "1rem" }}>Other</Typography>}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

const PickupAccordion = () => {
  const [pickupState, setPickupState] = useState({
    onCampus: false,
    offCampus: false,
  });

  const handlePickupChange = (event) => {
    setPickupState((prevPickupState) => ({
      ...prevPickupState,
      [event.target.name]: event.target.checked,
    }));
  };

  return (
    <Accordion elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ fontFamily: "Libre Baskerville-regular", fontSize: "1.3rem" }}>
          Pickup:
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ display: 'block', border: 'none' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={pickupState.onCampus}
                onChange={handlePickupChange}
                name="onCampus"
              />
            }
            label={<Typography sx={{ fontFamily: "Libre Baskerville-regular", fontSize: "1rem" }}>On Campus</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={pickupState.offCampus}
                onChange={handlePickupChange}
                name="offCampus"
              />
            }
            label={<Typography sx={{ fontFamily: "Libre Baskerville-regular", fontSize: "1rem" }}>Off Campus</Typography>}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default PickupAccordion;

const Products = () => {
  return (
    <Box display="flex" flexDirection="column" width="80vw" marginRight="2vw" marginTop="10vh" backgroundColor="transparent">
      <Grid container spacing={1}>
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
    <Box sx={{ backgroundColor: "transparent", height: "100vh", width: "20vw", marginLeft: '5vw', marginRight: "2vw" }}>
      <Typography sx={{ fontFamily: "Lato-Bold", fontSize: "3rem" }}>
        Items
      </Typography>
      <Typography sx={{ fontFamily: "Lato-regular", fontSize: "1.4rem", marginBottom: '0.5rem', marginTop: '1rem' }}>
        Filters
      </Typography>

      <PriceDropdown />
      <CategoryAccordion />
      <PickupAccordion />
      
    </Box>
  );
};

export const HomePage = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Filters />
        <Products />
      </Box>
    </>
  );
};
