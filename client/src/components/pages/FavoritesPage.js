import React from "react";
import { Box } from "@mui/material";

import Filters from "../Filters";
import Products from "../ProductsGrid";

import Navbar from "../Navbar.js";

export const Favorites = () => {
  return (
    <>
      <Navbar />
      <Box display="flex" justifyContent="space-between">
        <Filters page={"Favorites"}></Filters>
        <Products />
      </Box>
    </>
  );
};
