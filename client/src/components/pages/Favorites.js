import React from 'react';
import {
  Box,
} from '@mui/material';

import Filters from "../FiltersSection";
import Products from "../ProductsGrid";

import Navbar from '../Navbar.js';

export const Favorites = () => {
  return (
    <>
		<Navbar />
      <Box display="flex" justifyContent="space-between">
        <Filters />
        <Products />
      </Box>
    </>
  );
};
