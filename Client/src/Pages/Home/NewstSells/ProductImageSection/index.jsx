import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  Info,
  Share,
} from "@mui/icons-material";
import { translations } from "../translations";

const ProductImageSection = ({ product, toggleFavorite, language }) => {
  const t = translations[language];

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
        "&:hover img": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Box
        component="img"
        src={product.image}
        alt="Product"
        sx={{
          width: "100%",
          height: "auto",
          transition: "0.4s ease",
        }}
      />

      {/* تخفیف */}
      <Box
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          bgcolor: "secondary.main",
          color: "#fff",
          px: 1.5,
          py: 0.5,
          borderRadius: 2,
          fontWeight: "bold",
          fontSize: "0.875rem",
          boxShadow: 1,
        }}
      >
        {product.discount} OFF
      </Box>

      {/* دکمه‌های بالا چپ */}
      <Box
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          display: "flex",
          gap: 1,
        }}
      >
        {[
          {
            icon: product.isFavorite ? <Favorite /> : <FavoriteBorder />,
            onClick: toggleFavorite,
            color: "error.main",
          },
          { icon: <Share />, color: "primary.main" },
        ].map(({ icon, onClick, color }, index) => (
          <IconButton
            key={index}
            onClick={onClick}
            sx={{
              bgcolor: "#fff",
              color,
              p: 1,
              borderRadius: 2,
              transition: "0.3s",
              boxShadow: 1,
              "&:hover": {
                bgcolor: color,
                color: "#fff",
                transform: "scale(1.1)",
              },
            }}
          >
            {icon}
          </IconButton>
        ))}
      </Box>

      {/* پایین کارت */}
      <Box
        sx={{
          position: "absolute",
          bottom: 8,
          left: 8,
          right: 8,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {[
          { icon: <Info />, color: "info.main" },
        ].map(({ icon, color }, index) => (
          <IconButton
            key={index}
            sx={{
              bgcolor: "#fff",
              color,
              p: 1,
              borderRadius: 2,
              transition: "0.3s",
              boxShadow: 1,
              "&:hover": {
                bgcolor: color,
                color: "#fff",
                transform: "scale(1.1)",
              },
            }}
          >
            {icon}
          </IconButton>
        ))}

        <Typography
          variant="caption"
          sx={{
            bgcolor: "primary.main",
            color: "#fff",
            px: 1.5,
            py: 0.5,
            borderRadius: 2,
            fontWeight: 600,
            boxShadow: 1,
          }}
        >
          {product.timeLeft}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductImageSection;
