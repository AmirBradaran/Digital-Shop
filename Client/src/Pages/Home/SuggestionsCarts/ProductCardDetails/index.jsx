// ProductCardDetails.jsx
import React from "react";
import {
  Box,
  Typography,
  Rating,
  Divider,
  Chip,
  Button,
  CardContent,
  LinearProgress,
  useTheme,
  Grid,
} from "@mui/material";
import { GradientButton } from "../styles";

const ProductCardDetails = ({ product, percent }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={6}>
      <CardContent
        sx={{
          textAlign: "right",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: { xs: 2, md: 3 },
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={700} gutterBottom sx={{ lineHeight: 1.3 }}>
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {product.description}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", my: 1.5 }}>
            <Rating
              value={product.rating}
              precision={0.5}
              readOnly
              sx={{ color: theme.palette.warning.main }}
            />
            <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
              ({product.reviews} نظر)
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", alignItems: "center", my: 2, gap: 1 }}>
            <Typography
              variant="body1"
              sx={{
                textDecoration: "line-through",
                color: "text.secondary",
              }}
            >
              {product.oldPrice} تومان
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: theme.palette.error.main, fontWeight: "bold" }}
            >
              {product.newPrice} تومان
            </Typography>
          </Box>

          <Chip
            label={product.timeLeft}
            color="warning"
            variant="outlined"
            size="small"
            sx={{
              mb: 2,
              fontWeight: "bold",
              alignSelf: "flex-start",
              borderWidth: 2,
            }}
          />

          <Box sx={{ my: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="body2" color="text.secondary">
                فروخته شده: {product.sold} از {product.total} عدد
              </Typography>
              <Typography variant="body2" color="text.primary" fontWeight="bold">
                {percent}% فروش
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={percent}
              sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: theme.palette.grey[200],
                "& .MuiLinearProgress-bar": {
                  borderRadius: 5,
                  background: `linear-gradient(90deg, ${theme.palette.error.light}, ${theme.palette.error.main})`,
                },
              }}
            />
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          <GradientButton fullWidth size="large" sx={{ py: 1.5, borderRadius: 2, boxShadow: theme.shadows[2], mb: 1.5 }}>
            افزودن به سبد خرید
          </GradientButton>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            size="large"
            sx={{
              py: 1.25,
              borderRadius: 2,
              fontWeight: "bold",
              borderWidth: 2,
              "&:hover": {
                borderWidth: 2,
              },
            }}
          >
            مشاهده جزئیات محصول
          </Button>
        </Box>
      </CardContent>
    </Grid>
  );
};

export default ProductCardDetails;
