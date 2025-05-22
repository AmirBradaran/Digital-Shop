import React from "react";
import {
  Box,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

import img1 from "../../../assets/slider1.jpg";
import img2 from "../../../assets/slider2.jpg";
import img3 from "../../../assets/slider3.jpg";
import img4 from "../../../assets/slider4.jpg";

import { useLanguage } from "../../../Utils/LanguageContext";

const CategoriesCarts = () => {
  const { language } = useLanguage();

  const isRtl = language === "fa";

  const theme = createTheme({
    direction: isRtl ? "rtl" : "ltr",
    typography: {
      fontFamily: isRtl ? "Iran" : "Arial",
    },
  });

  const cache = createCache({
    key: isRtl ? "muirtl" : "mui",
    stylisPlugins: isRtl ? [prefixer, rtlPlugin] : [],
  });

  const translations = {
    fa: {
      title: "دسته‌بندی محصولات",
      categories: [
        { title: "کامپیوتر و تبلت ها", image: img1 },
        { title: "موبایل ها", image: img2 },
        { title: "دوربین ها", image: img3 },
        { title: "لوازم جانبی", image: img4 },
      ],
    },
    en: {
      title: "Product Categories",
      categories: [
        { title: "Computer & Tablet", image: img1 },
        { title: "Phone", image: img2 },
        { title: "Camera", image: img3 },
        { title: "Accessories", image: img4 },
      ],
    },
  };

  const content = translations[language];

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Box
          dir={isRtl ? "rtl" : "ltr"}
          sx={{
            px: 2,
            py: 6,
            width: "90%",
            mx: "auto",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={6}
            color={"primary.dark"}
            textAlign={isRtl ? "left" : "right"}
          >
            {content.title}
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {content.categories.map((cat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    position: "relative",
                    height: 230,
                    borderRadius: 4,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={cat.image}
                    alt={cat.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                      transition: "transform 0.4s ease",
                      filter: "brightness(0.65)",
                      "&:hover": {
                        transform: "scale(1.05)",
                        filter: "brightness(0.85)",
                      },
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      py: 2,
                      px: 2,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color="white"
                      sx={{ fontSize: 16 }}
                    >
                      {cat.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default CategoriesCarts;
