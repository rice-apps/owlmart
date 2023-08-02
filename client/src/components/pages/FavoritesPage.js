import React from 'react';
import {
  Box,
} from '@mui/material';

import Filters from "../FiltersSectionComponent";
import Products from "../ProductsGridComponent";

import Navbar from '../NavbarComponent.js';

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
