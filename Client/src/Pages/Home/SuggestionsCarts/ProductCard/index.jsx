import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  IconButton,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StyledCard from "../StyledCard";
import ProductImageSection from "../ProductImageSection";
import ProductInfoSection from "../ProductInfoSection";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<StarIcon key={i} sx={{ color: "#ffb400" }} />);
    } else if (rating >= i - 0.5) {
      stars.push(<StarHalfIcon key={i} sx={{ color: "#ffb400" }} />);
    } else {
      stars.push(<StarOutlineIcon key={i} sx={{ color: "#ffb400" }} />);
    }
  }
  return stars;
};

const ProductCard = ({ product, percent, toggleFavorite, language }) => {
  return (
    <StyledCard
      component={motion.div}
      whileHover={{ scale: 1.03, boxShadow: "0px 12px 24px rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* تصویر محصول و دکمه علاقه‌مندی */}
      <ProductImageSection
        product={product}
        toggleFavorite={toggleFavorite}
        language={language}
      />

      {/* اطلاعات محصول */}
      <ProductInfoSection product={product} language={language} />

      {/* دکمه خرید */}
      <Box
        px={2}
        py={1.5}
        mt="auto"
        textAlign="center"
        sx={{ borderTop: "1px solid #eee" }}
      >
        <Tooltip
          title={language === "fa" ? "افزودن به سبد خرید" : "Add to Cart"}
        >
          <IconButton
            color="primary"
            aria-label="add to cart"
            size="large"
            sx={{
              bgcolor: "#3f51b5",
              color: "#fff",
              "&:hover": {
                bgcolor: "#303f9f",
              },
              borderRadius: 2,
              width: "100%",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            {language === "fa" ? "افزودن به سبد خرید" : "Add to Cart"}
          </IconButton>
        </Tooltip>
      </Box>
    </StyledCard>
  );
};

export default ProductCard;
