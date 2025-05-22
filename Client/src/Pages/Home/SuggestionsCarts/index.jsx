import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Divider,
  LinearProgress,
  Stack,
  Rating,
  IconButton,
  useTheme,
  Tooltip,
  styled,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import img1 from "../../../assets/slider1.jpg";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const StyledCard = styled(Card)(({ theme }) => ({
  direction: "rtl",
  borderRadius: 12,
  boxShadow: theme.shadows[4],
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: theme.shadows[8],
  },
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.error.dark}, ${theme.palette.error.main})`,
  color: theme.palette.common.white,
  fontWeight: "bold",
  fontSize: "0.875rem",
  "&:hover": {
    background: `linear-gradient(90deg, ${theme.palette.error.main}, ${theme.palette.error.dark})`,
  },
}));

const productSuggestions = [
  {
    id: 1,
    title: "لپ تاپ ایسوس VivoBook 15",
    description: "پردازنده اینتل سلرون، 8GB رم، ۵۱۲GB SSD",
    rating: 4.5,
    reviews: 42,
    oldPrice: "۸۸,۰۰۰,۰۰۰",
    newPrice: "۷۷,۰۰۰,۰۰۰",
    discount: "30%",
    timeLeft: "۲ روز تا پایان تخفیف",
    sold: 17,
    total: 81,
    image: img1,
    isFavorite: false,
  },
  {
    id: 2,
    title: "لپ تاپ ایسوس VivoBook 15",
    description: "پردازنده اینتل سلرون، 8GB رم، ۵۱۲GB SSD",
    rating: 4.5,
    reviews: 42,
    oldPrice: "۸۸,۰۰۰,۰۰۰",
    newPrice: "۷۷,۰۰۰,۰۰۰",
    discount: "30%",
    timeLeft: "۲ روز تا پایان تخفیف",
    sold: 17,
    total: 81,
    image: img1,
    isFavorite: false,
  },
  {
    id: 3,
    title: "لپ تاپ ایسوس VivoBook 15",
    description: "پردازنده اینتل سلرون، 8GB رم، ۵۱۲GB SSD",
    rating: 4.5,
    reviews: 42,
    oldPrice: "۸۸,۰۰۰,۰۰۰",
    newPrice: "۷۷,۰۰۰,۰۰۰",
    discount: "30%",
    timeLeft: "۲ روز تا پایان تخفیف",
    sold: 17,
    total: 81,
    image: img1,
    isFavorite: false,
  },
  {
    id: 4,
    title: "لپ تاپ ایسوس VivoBook 15",
    description: "پردازنده اینتل سلرون، 8GB رم، ۵۱۲GB SSD",
    rating: 4.5,
    reviews: 42,
    oldPrice: "۸۸,۰۰۰,۰۰۰",
    newPrice: "۷۷,۰۰۰,۰۰۰",
    discount: "30%",
    timeLeft: "۲ روز تا پایان تخفیف",
    sold: 17,
    total: 81,
    image: img1,
    isFavorite: false,
  },
  {
    id: 5,
    title: "لپ تاپ ایسوس VivoBook 15",
    description: "پردازنده اینتل سلرون، 8GB رم، ۵۱۲GB SSD",
    rating: 4.5,
    reviews: 42,
    oldPrice: "۸۸,۰۰۰,۰۰۰",
    newPrice: "۷۷,۰۰۰,۰۰۰",
    discount: "30%",
    timeLeft: "۲ روز تا پایان تخفیف",
    sold: 17,
    total: 81,
    image: img1,
    isFavorite: false,
  },
];

const ProductImageSection = ({ product, toggleFavorite }) => {
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", height: 250 }}>
      <CardMedia
        component="img"
        height="100%"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "cover" }}
      />
      <Chip
        label={product.discount}
        color="error"
        size="small"
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          fontWeight: "bold",
          px: 1,
          boxShadow: theme.shadows[2],
        }}
      />
      <Stack
        direction="row"
        spacing={0.5}
        sx={{
          position: "absolute",
          bottom: 12,
          left: 12,
        }}
      >
        <Tooltip title="علاقه‌مندی‌ها">
          <IconButton
            size="small"
            onClick={toggleFavorite}
            sx={{
              backgroundColor: "rgba(255,255,255,0.9)",
              "&:hover": {
                backgroundColor: theme.palette.error.light,
                color: theme.palette.error.main,
              },
            }}
          >
            {product.isFavorite ? (
              <FavoriteIcon color="error" fontSize="small" />
            ) : (
              <FavoriteBorderIcon fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title="اشتراک گذاری">
          <IconButton
            size="small"
            sx={{
              backgroundColor: "rgba(255,255,255,0.9)",
              "&:hover": {
                backgroundColor: theme.palette.info.light,
                color: theme.palette.info.main,
              },
            }}
          >
            <ShareIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
};

const ProductInfoSection = ({ product, percent }) => {
  const theme = useTheme();
  return (
    <CardContent
      sx={{
        textAlign: "right",
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Box>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {product.description}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
          <Rating
            value={product.rating}
            precision={0.5}
            readOnly
            size="small"
            sx={{ color: theme.palette.warning.main }}
          />
          <Typography variant="caption" color="text.secondary" sx={{ mr: 0.5 }}>
            ({product.reviews})
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", my: 1, gap: 0.5 }}>
          <Typography
            variant="body2"
            sx={{ textDecoration: "line-through", color: "text.secondary" }}
          >
            {product.oldPrice}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.error.main, fontWeight: "bold" }}
          >
            {product.newPrice}
          </Typography>
        </Box>
        <Chip
          label={product.timeLeft}
          color="warning"
          variant="outlined"
          size="small"
          sx={{
            fontWeight: "medium",
            borderWidth: 1,
            fontSize: "0.75rem",
          }}
        />
        <Box sx={{ my: 1.5 }}>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}
          >
            <Typography variant="caption" color="text.secondary">
              فروخته شده: {product.sold}/{product.total}
            </Typography>
            <Typography variant="caption" fontWeight="bold">
              {percent}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={percent}
            sx={{
              height: 6,
              borderRadius: 3,
              backgroundColor: theme.palette.grey[200],
              "& .MuiLinearProgress-bar": {
                borderRadius: 3,
                background: `linear-gradient(90deg, ${theme.palette.error.light}, ${theme.palette.error.main})`,
              },
            }}
          />
        </Box>
      </Box>
      <Box sx={{ mt: 0 }}>
        <GradientButton
          variant="contained"
          fullWidth
          size="medium"
          sx={{
            py: 1,
            borderRadius: 1,
            mb: 1,
          }}
        >
          افزودن به سبد
        </GradientButton>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          size="medium"
          sx={{
            py: 1,
            borderRadius: 1,
          }}
        >
          اطلاعات بیشتر
        </Button>
      </Box>
    </CardContent>
  );
};

export default function ProductSwiper() {
  const [products, setProducts] = React.useState(productSuggestions);

  // تابع برای تغییر وضعیت علاقه‌مندی (فیووریت)
  const toggleFavorite = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  return (
    <Box
      sx={{
        mt: 4,
        mb: 8,
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2, md: 0 },
      }}
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => {
          const percent = Math.round((product.sold / product.total) * 100);
          return (
            <SwiperSlide key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <StyledCard>
                  <ProductImageSection
                    product={product}
                    toggleFavorite={() => toggleFavorite(product.id)}
                  />
                  <ProductInfoSection product={product} percent={percent} />
                </StyledCard>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
