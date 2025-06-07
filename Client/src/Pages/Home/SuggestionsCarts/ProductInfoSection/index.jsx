import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import { Star } from "@mui/icons-material";
import { translations } from "../translations";

const ProductInfoSection = ({ product, percent, language }) => {
  const t = translations[language];
  const productData = t.products[0];

  return (
    <Box px={2} py={2} display="flex" flexDirection="column" gap={1.2}>
      {/* عنوان محصول */}
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ color: "text.primary", fontSize: "1.1rem" }}
      >
        {productData.title}
      </Typography>

      {/* توضیحات کوتاه */}
      <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
        {productData.description}
      </Typography>

      {/* قیمت قدیم و جدید */}
      <Box display="flex" alignItems="center" gap={1}>
        <Typography
          variant="body2"
          sx={{
            textDecoration: "line-through",
            color: "text.disabled",
          }}
        >
          {product.oldPrice}
        </Typography>
        <Typography variant="h6" color="primary" fontWeight="bold">
          {product.newPrice}
        </Typography>
      </Box>

      {/* امتیاز و تعداد فروش */}
      <Box display="flex" alignItems="center" gap={1}>
        <Star sx={{ color: "#FFD700", fontSize: 20 }} />
        <Typography variant="body2" fontWeight="500">
          {product.rating} ({product.reviews})
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ ml: "auto", fontSize: "0.85rem" }}
        >
          {product.sold} {t.sold} / {product.total}
        </Typography>
      </Box>

      {/* نوار پیشرفت فروش */}
      <Box>
        <LinearProgress
          variant="determinate"
          value={percent}
          sx={{
            height: 8,
            borderRadius: 5,
            backgroundColor: "#f1f1f1",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#3f51b5",
            },
          }}
        />
        <Typography
          variant="caption"
          color="text.secondary"
          mt={0.5}
          display="block"
        >
          {percent}% {t.sold}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductInfoSection;
