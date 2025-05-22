// ProductCardImageSection.jsx
import React from "react";
import {
  CardMedia,
  Chip,
  IconButton,
  Stack,
  Tooltip,
  useTheme,
  Grid,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const ProductCardImageSection = ({ product, onToggleFavorite }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={6} sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        height="380"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "cover" }}
      />
      <Chip
        label={product.discount}
        color="error"
        size="medium"
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          fontWeight: "bold",
          fontSize: "1rem",
          px: 2,
          py: 1.5,
          boxShadow: theme.shadows[4],
        }}
      />
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: "absolute",
          bottom: 16,
          left: 16,
        }}
      >
        <Tooltip title="افزودن به علاقه‌مندی‌ها">
          <IconButton
            onClick={() => onToggleFavorite(product.id)}
            sx={{
              backgroundColor: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(4px)",
              "&:hover": {
                backgroundColor: theme.palette.error.light,
                color: theme.palette.error.main,
              },
            }}
          >
            {product.isFavorite ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title="اشتراک گذاری">
          <IconButton
            sx={{
              backgroundColor: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(4px)",
              "&:hover": {
                backgroundColor: theme.palette.info.light,
                color: theme.palette.info.main,
              },
            }}
          >
            <ShareIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Grid>
  );
};

export default ProductCardImageSection;
