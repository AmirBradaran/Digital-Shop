import React from "react";
import { Box, Button } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useLanguage } from "../../../Utils/LanguageContext";
import ProductCard from "./ProductCard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import img1 from "../../../assets/slider1.jpg";

export default function ProductSwiper() {
  const { language } = useLanguage();
  const isRtl = language === "fa";

  const theme = createTheme({
    direction: isRtl ? "rtl" : "ltr",
    typography: {
      fontFamily: isRtl ? "Iran" : "Arial",
    },
    palette: {
      primary: {
        main: "#3f51b5",
      },
      background: {
        default: "#fafafa",
      },
    },
  });

  const cache = createCache({
    key: isRtl ? "muirtl" : "mui",
    stylisPlugins: isRtl ? [prefixer, rtlPlugin] : [],
  });

  // محصولات اولیه
  const initialProducts = [
    {
      id: 1,
      rating: 4.5,
      reviews: 42,
      oldPrice: isRtl ? "۸۸,۰۰۰,۰۰۰" : "88,000,000",
      newPrice: isRtl ? "۷۷,۰۰۰,۰۰۰" : "77,000,000",
      discount: "30%",
      timeLeft: isRtl ? "۲ روز تا پایان تخفیف" : "2 days left",
      sold: 17,
      total: 81,
      image: img1,
      isFavorite: false,
      title: isRtl ? "لپ تاپ ایسوس VivoBook 15" : "Asus VivoBook 15 Laptop",
    },
    {
      id: 2,
      rating: 4.8,
      reviews: 30,
      oldPrice: isRtl ? "۵۰,۰۰۰,۰۰۰" : "50,000,000",
      newPrice: isRtl ? "۴۵,۰۰۰,۰۰۰" : "45,000,000",
      discount: "10%",
      timeLeft: isRtl ? "۵ روز تا پایان تخفیف" : "5 days left",
      sold: 12,
      total: 40,
      image: img1,
      isFavorite: false,
      title: isRtl
        ? "گوشی موبایل سامسونگ Galaxy A14"
        : "Samsung Galaxy A14 Smartphone",
    },
    {
      id: 3,
      rating: 4.2,
      reviews: 15,
      oldPrice: isRtl ? "۲۰,۰۰۰,۰۰۰" : "20,000,000",
      newPrice: isRtl ? "۱۸,۰۰۰,۰۰۰" : "18,000,000",
      discount: "15%",
      timeLeft: isRtl ? "۳ روز تا پایان تخفیف" : "3 days left",
      sold: 8,
      total: 30,
      image: img1,
      isFavorite: false,
      title: isRtl
        ? "هدفون بی‌سیم سونی WH-1000XM4"
        : "Sony WH-1000XM4 Wireless Headphones",
    },
  ];

  const [products, setProducts] = React.useState(initialProducts);

  // تابع اضافه کردن محصول جدید
  const addProduct = () => {
    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    const newProduct = {
      id: newId,
      rating: 4.0,
      reviews: 10,
      oldPrice: isRtl ? "۳۰,۰۰۰,۰۰۰" : "30,000,000",
      newPrice: isRtl ? "۲۷,۰۰۰,۰۰۰" : "27,000,000",
      discount: "10%",
      timeLeft: isRtl ? "۷ روز تا پایان تخفیف" : "7 days left",
      sold: 3,
      total: 20,
      image: img1,
      isFavorite: false,
      title: isRtl
        ? "پاوربانک انکر 10000 میلی‌آمپر"
        : "Anker 10000mAh Power Bank",
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  // تغییر وضعیت علاقه‌مندی
  const toggleFavorite = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Box
          dir={isRtl ? "rtl" : "ltr"}
          mx={{ xs: 5, sm: 7.5, md: 9, lg: 12 }}
          mt={6}
          maxWidth={"100%"}
          px={{ xs: 2, sm: 4, md: 6 }}
        >
          {/* دکمه افزودن محصول */}
          <Box
            display="flex"
            justifyContent={isRtl ? "flex-start" : "flex-end"}
            mb={3}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={addProduct}
              sx={{
                fontWeight: "bold",
                boxShadow: "0 4px 10px rgba(63,81,181,0.3)",
                "&:hover": { boxShadow: "0 6px 14px rgba(63,81,181,0.5)" },
              }}
            >
              {isRtl ? "اضافه کردن محصول جدید" : "Add New Product"}
            </Button>
          </Box>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            style={{ paddingBottom: "40px" }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4.5 },
            }}
          >
            {products.map((product) => {
              const percent = Math.round((product.sold / product.total) * 100);
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard
                    product={product}
                    percent={percent}
                    toggleFavorite={() => toggleFavorite(product.id)}
                    language={language}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
