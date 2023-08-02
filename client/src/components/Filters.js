import React, { useState } from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PriceSlider = () => {
    const [priceRange, setPriceRange] = useState([0, 999]); // Default price range
  
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
        <Typography gutterBottom sx={{color: "#2E4561"}}>Min: ${priceRange[0]}</Typography>
        <Typography gutterBottom sx={{color: "#2E4561"}}>Max: ${priceRange[1]}</Typography>
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
          <Typography sx={{
            fontFamily: "Libre Baskerville-regular",
            fontSize: "1.3rem",
            color: "#2E4561"
          }}>
            Price:
          </Typography>
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
          <Typography sx={{
            fontFamily: "Libre Baskerville-regular",
            fontSize: "1.3rem",
            color: "#2E4561"
          }}>
            Category:
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'block', border: "none" }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={categoryState.category1}
                  onChange={handleCategoryChange}
                  name="category1"
                />
              }
              label={<Typography sx={{
                fontFamily: "Libre Baskerville-regular",
                fontSize: "1rem",
                color: "#2E4561"
              }}>Clothing</Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categoryState.category2}
                  onChange={handleCategoryChange}
                  name="category2"
                />
              }
              label={<Typography sx={{
                fontFamily: "Libre Baskerville-regular",
                fontSize: "1rem",
                color: "#2E4561"
              }}>Furniture</Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categoryState.category3}
                  onChange={handleCategoryChange}
                  name="category3"
                />
              }
              label={<Typography sx={{
                fontFamily: "Libre Baskerville-regular",
                fontSize: "1rem",
                color: "#2E4561"
              }}>Appliances</Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categoryState.category4}
                  onChange={handleCategoryChange}
                  name="category4"
                />
              }
              label={<Typography sx={{
                fontFamily: "Libre Baskerville-regular",
                fontSize: "1rem",
                color: "#2E4561"
              }}>Other</Typography>}
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
          <Typography sx={{
            fontFamily: "Libre Baskerville-regular",
            fontSize: "1.3rem",
            color: "#2E4561"
          }}>
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
              label={<Typography sx={{
                fontFamily: "Libre Baskerville-regular",
                fontSize: "1rem",
                color: "#2E4561"
              }}>On Campus</Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={pickupState.offCampus}
                  onChange={handlePickupChange}
                  name="offCampus"
                />
              }
              label={<Typography sx={{
                fontFamily: "Libre Baskerville-regular",
                fontSize: "1rem",
                color: "#2E4561"
              }}>Off Campus</Typography>}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    );
  };
  
  const Filters = () => {
    return (
      <Box sx={{ backgroundColor: "transparent", height: "100vh", width: "20vw", marginLeft: '5vw', marginRight: "2vw", color: "#2E4561",
      "@media only screen and (max-width:600px)":{
        marginLeft:5
      } 
      }}>
        <Typography sx={{ fontFamily: "Lato-Bold", fontSize: "3rem", marginBottom: "7vh", }}>
          Favorites
        </Typography>
        <Typography sx={{ fontFamily: "Lato-regular", fontSize: "1.4rem", marginBottom: '0.5rem', marginTop: '1rem', }}>
          Filters
        </Typography>
  
        <PriceDropdown />
        <CategoryAccordion />
        <PickupAccordion />
        
      </Box>
    );
  };
  
  export default Filters;