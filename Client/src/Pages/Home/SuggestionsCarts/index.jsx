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
  width: "100%",
  direction: "rtl",
  boxShadow: theme.shadows[3],
  overflow: "hidden",
  transition: "transform 0.35s ease, box-shadow 0.35s ease",
  borderRadius: 20,
  background: "rgba(255, 255, 255, 0.75)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: "20px 0",
  "& .swiper": {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: theme.spacing(2),
  },

  "& img": {
    width: "100%",
    height: "22vh",
    borderRadius: 12,
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },

  "&:hover img": {
    transform: "scale(1.03)",
  },
}));

{
  /* دیتا کارت */
}
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
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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

{
  /* بخش عکس و آیکونش */
}
const ProductImageSection = ({ product, toggleFavorite }) => {
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", height: 200 }}>
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
        gap={1}
        sx={{
          position: "absolute",
          bottom: 10,
          left: 15,
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

{
  /* بخش اطلاعات کارت */
}
const ProductInfoSection = ({ product, percent }) => {
  const theme = useTheme();
  return (
    <CardContent
      sx={{
        textAlign: "right",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      {/* بخش اطلاعات کارت */}
      <Box>
        {/* بخش اسم و کپشن کارت */}
        <Stack>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {product.description}
          </Typography>
        </Stack>

        {/* بخش امتیازها */}
        <Stack my={1}>
          <Rating
            value={product.rating}
            readOnly
            size="small"
            sx={{ color: theme.palette.warning.main }}
          />
        </Stack>
        <Divider sx={{ my: 1 }} />

        {/* بخش قیمت */}
        <Stack
          alignItems={"center"}
          gap={1}
          my={1}
          direction={"row"}
          flexWrap={"wrap"}
        >
          <Typography
            variant="body2"
            sx={{ textDecoration: "line-through", color: "text.secondary" }}
          >
            {product.oldPrice}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.error.main, fontWeight: "bold" }}
          >
            {product.newPrice}
          </Typography>
        </Stack>

        {/* پیشنهاد ویژه */}
        {/* <Chip
          label={product.timeLeft}
          color="warning"
          variant="outlined"
          size="small"
          sx={{
            fontWeight: "medium",
            borderWidth: 1,
            fontSize: "0.75rem",
          }}
        /> */}

        {/* بخش تعداد فروش */}
        <Stack mb={0.5} my={1.5}>
          <Typography variant="caption" color="text.secondary">
            فروخته شده: {product.sold} / {product.total}
          </Typography>
        </Stack>
      </Box>

      {/* بخش دکمه های کارت ها */}
      <Stack gap={2} py={0}>
        <Button
          color="error"
          variant="contained"
          fullWidth
          size="medium"
          sx={{
            borderRadius: 1,
            fontWeight: "700",
          }}
        >
          افزودن به سبد
        </Button>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          size="medium"
          sx={{
            borderRadius: 1,
            fontWeight: "600",
          }}
        >
          اطلاعات بیشتر
        </Button>
      </Stack>
    </CardContent>
  );
};

export default function ProductSwiper() {
  const [products, setProducts] = React.useState(productSuggestions);

  const toggleFavorite = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  return (
    <Box mx={12} mt={4}>
      <Swiper
      style={{height:{xs:"none" , md:"55vh"}}}
        modules={[Navigation]}
        navigation
        spaceBetween={100}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => {
          const percent = Math.round((product.sold / product.total) * 100);
          return (
            <SwiperSlide key={product.id}>
              <StyledCard
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ProductImageSection
                  product={product}
                  toggleFavorite={() => toggleFavorite(product.id)}
                />
                <LinearProgress
                  variant="determinate"
                  value={percent}
                  sx={{ mx: 2, height: 6, borderRadius: 2 }}
                />
                <ProductInfoSection product={product} percent={percent} />
              </StyledCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
