import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
  Fade,
  Zoom,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  LaptopMac,
  CameraAlt,
  Headphones,
  Devices,
  ArrowForward,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useLanguage } from "../../../Utils/LanguageContext";
import { useNavigate } from "react-router-dom";

const BrandCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  textAlign: "center",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
  borderRadius: theme.spacing(3),
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-10px) scale(1.03)",
    boxShadow: "0 16px 32px rgba(0, 0, 0, 0.15)",
    background: "linear-gradient(145deg, #e3f2fd, #ffffff)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "4px",
    background: theme.palette.secondary.dark,
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.4s ease",
  },
  "&:hover::before": {
    transform: "scaleX(1)",
  },
}));

const getIcon = (category) => {
  const iconStyle = {
    fontSize: 56,
    mb: 2,
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
  };

  switch (category) {
    case "الکترونیک":
    case "Electronics":
      return <Devices sx={{ ...iconStyle, color: "#2196f3" }} />;
    case "دوربین":
    case "Camera":
      return <CameraAlt sx={{ ...iconStyle, color: "#ff9800" }} />;
    case "صوتی":
    case "Audio":
      return <Headphones sx={{ ...iconStyle, color: "#4caf50" }} />;
    case "کامپیوتر":
    case "Computer":
      return <LaptopMac sx={{ ...iconStyle, color: "#9c27b0" }} />;
    default:
      return null;
  }
};

const FamousBrands = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isFa = language === "fa";

  const texts = {
    title: isFa ? "برندهای برتر" : "Top Brands",
    categories: {
      electronics: isFa ? "الکترونیک" : "Electronics",
      camera: isFa ? "دوربین" : "Camera",
      audio: isFa ? "صوتی" : "Audio",
      computer: isFa ? "کامپیوتر" : "Computer",
    },
  };

  const brands = [
    { name: "SANYO", category: texts.categories.electronics, slug: "sanyo" },
    {
      name: "SAMSUNG",
      category: texts.categories.electronics,
      slug: "samsung",
    },
    { name: "SONY", category: texts.categories.electronics, slug: "sony" },
    {
      name: "Panasonic",
      category: texts.categories.electronics,
      slug: "panasonic",
    },
    { name: "Canon", category: texts.categories.camera, slug: "canon" },
    { name: "JBL", category: texts.categories.audio, slug: "jbl" },
    { name: "Apple", category: texts.categories.electronics, slug: "apple" },
    { name: "Lenovo", category: texts.categories.computer, slug: "lenovo" },
  ];


  return (
    <Box
      sx={{
        py: { xs: 4, sm: 8 },
        borderRadius: theme.spacing(3),
        direction: isFa ? "rtl" : "ltr",
        maxWidth: 1700,
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 6,
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: { xs: "center", sm: isFa ? "right" : "left" },
              color: theme.palette.primary.dark,
              fontWeight: 900,
              textShadow: "0 2px 8px rgba(0,0,0,0.08)",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                [isFa ? "right" : "left"]: 0,
                bottom: -12,
                width: "80px",
                height: "5px",
                background: theme.palette.primary.main,
                borderRadius: 3,
              },
            }}
          >
            {texts.title}
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        {brands.map((brand, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Zoom in timeout={500 + index * 150}>
                <Box
                  sx={{
                    perspective: "1000px",
                    height: "100%",
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <BrandCard
                      elevation={4}
                    >
                      {getIcon(brand.category)}
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 800,
                            mt: 1,
                            color: "#333",
                            transition: "all 0.3s",
                            fontSize: { xs: "1.1rem", sm: "1.2rem" },
                            "&:hover": {
                              color: theme.palette.primary.drk,
                            },
                          }}
                        >
                          {brand.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            mt: 1,
                            fontWeight: 600,
                            letterSpacing: "0.5px",
                            fontSize: { xs: "0.8rem", sm: "0.9rem" },
                          }}
                        >
                          {brand.category}
                        </Typography>
                      </Box>
                    </BrandCard>
                  </motion.div>
                </Box>
              </Zoom>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FamousBrands;
