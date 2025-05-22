// ProductCard.jsx
import React from "react";
import { Card, Grid } from "@mui/material";
import { StyledCard } from "../styles";
import ProductCardImageSection from "../ProductCardImageSection";
import ProductCardDetails from "../ProductCardDetails";

const ProductCard = ({ product, onToggleFavorite }) => {
  const percent = Math.round((product.sold / product.total) * 100);

  return (
    <StyledCard>
      <Grid container>
        <ProductCardImageSection
          product={product}
          onToggleFavorite={onToggleFavorite}
        />
        <ProductCardDetails product={product} percent={percent} />
      </Grid>
    </StyledCard>
  );
};

export default ProductCard;
