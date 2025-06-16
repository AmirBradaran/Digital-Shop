import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import BestSellerCard from "./BestSellerCard";
import bestSellers from "./bestSellersData";

export default function SuggestionsCarts() {
  return (
    <Box
      border={"1px solid white"}
      maxWidth={1700}
      mx="auto"
      my={6}
      p={4}
      borderRadius={5}
      bgcolor={"#0062FC"}
      color="white"
      textAlign="right"
      dir="rtl"
    >
      <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
        پرفروش‌ترین محصولات هفته
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {bestSellers.map((product) => (
          <Grid item key={product.id}>
            <BestSellerCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
