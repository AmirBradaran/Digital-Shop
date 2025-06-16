import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Stack,
  Rating,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function BestSellerCard({ product, rank }) {
  const [liked, setLiked] = useState(false);

  return (
    <Card
      sx={{
        width: 280,
        borderRadius: 6,
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        bgcolor: "#fff",
        mx: 2,
        direction: "rtl",
        overflow: "hidden",
        position: "relative",
        transition: "all 0.35s ease",
        "&:hover": {
          boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
          transform: "translateY(-6px)",
        },
      }}
    >
      {/* برچسب پرفروش‌ترین */}
      <Box
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          bgcolor: "#ff5722",
          color: "#fff",
          px: 1.5,
          py: 0.3,
          fontSize: 12,
          borderRadius: "20px",
          zIndex: 10,
          fontWeight: "bold",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        #{rank} پرفروش هفته
      </Box>

      {/* تصویر و آیکون‌ها */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            bgcolor: "#f5f7fa",
            borderBottom: "1px solid #eee",
            transition: "transform 0.35s",
            "&:hover": {
              transform: "scale(1.04)",
            },
          }}
        />

        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: "absolute",
            top:10,
            right:10,
            zIndex: 5,
          }}
        >
          <Tooltip title="اشتراک‌گذاری" arrow>
            <IconButton
              size="small"
              sx={{
                bgcolor: "white",
                "&:hover": { bgcolor: "blue" , color:"white" },
                boxShadow: 1,
              }}
            >
              <ShareIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="علاقه‌مندی" arrow>
            <IconButton
              size="small"
              onClick={() => setLiked(!liked)}
              sx={{
                bgcolor: "white",
                "&:hover": { bgcolor: "#ffe0e0" },
                boxShadow: 1,
              }}
            >
              {liked ? (
                <FavoriteIcon fontSize="small" color="error" />
              ) : (
                <FavoriteBorderIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>

          <Tooltip title="افزودن به سبد خرید" arrow>
            <IconButton
              size="small"
              sx={{
                bgcolor: "white",
                "&:hover": { bgcolor: "#d0ffe2" },
                boxShadow: 1,
              }}
            >
              <AddShoppingCartIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>

      {/* محتوا */}
      <CardContent sx={{ px: 2, py: 1.5 }}>
        <Typography
          fontWeight="bold"
          fontSize={16}
          gutterBottom
          sx={{ color: "#1a1a1a", minHeight: 28 }}
        >
          {product.title}
        </Typography>

        <Typography
          fontSize={14}
          color="text.secondary"
          sx={{ minHeight: 38 }}
        >
          {product.description}
        </Typography>

        <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
          <Rating
            value={product.rating || 4.5}
            precision={0.5}
            size="small"
            readOnly
          />
        </Box>

        {/* قیمت */}
        <Box sx={{ mt: 1.2 }}>
          {product.oldPrice && (
            <Typography
              sx={{
                textDecoration: "line-through",
                color: "#888",
                fontSize: 13,
              }}
            >
              {product.oldPrice} تومان
            </Typography>
          )}
          <Typography
            fontWeight="bold"
            fontSize={15}
            sx={{ color: "#1976d2" }}
          >
            {product.price} تومان
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
