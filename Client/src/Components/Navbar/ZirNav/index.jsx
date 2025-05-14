import React, { useState } from "react";
import {
  Box,
  Button,
  InputBase,
  Menu as MuiMenu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import {
  Menu,
  Translate,
  Search,
  LaptopMac,
  Smartphone,
  Headphones,
  PhotoCamera,
} from "@mui/icons-material";
import { useLanguage } from "../../../Utils/LanguageContext";

const categories = {
  fa: [
    {
      name: "کامپیوتر و تبلت",
      icon: <LaptopMac fontSize="large" sx={{ color: "#1976d2" }} />,
    },
    {
      name: "موبایل",
      icon: <Smartphone fontSize="large" sx={{ color: "#1976d2" }} />,
    },
    {
      name: "صوت",
      icon: <Headphones fontSize="large" sx={{ color: "#1976d2" }} />,
    },
    {
      name: "دوربین",
      icon: <PhotoCamera fontSize="large" sx={{ color: "#1976d2" }} />,
    },
  ],
  en: [
    {
      name: "Computers & Tablets",
      icon: <LaptopMac fontSize="large" sx={{ color: "#1976d2" }} />,
    },
    {
      name: "Mobiles",
      icon: <Smartphone fontSize="large" sx={{ color: "#1976d2" }} />,
    },
    {
      name: "Audio",
      icon: <Headphones fontSize="large" sx={{ color: "#1976d2" }} />,
    },
    {
      name: "Cameras",
      icon: <PhotoCamera fontSize="large" sx={{ color: "#1976d2" }} />,
    },
  ],
};

const ZirNav = () => {
  const { language, toggleLanguage } = useLanguage();

  const texts = {
    fa: {
      categoriesButton: "دسته‌بندی محصولات",
      searchPlaceholder: "جستجوی محصولات...",
      languageButton: "فارسی",
    },
    en: {
      categoriesButton: "Product Categories",
      searchPlaceholder: "Search products...",
      languageButton: "English",
    },
  };

  const t = texts[language];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleCategoryClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCategorySelect = (category) => {
    console.log("Selected category:", category);
    handleClose();
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      width="85%"
      mx="auto"
      py={2.5}
      px={3}
      sx={{
        direction: language === "fa" ? "rtl" : "ltr",
        borderRadius: "0 0 20px 20px",
        background: "white",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Category Button */}
      <Box>
        <Button
          variant="contained"
          startIcon={<Menu sx={{ ml: 1.5 }} />}
          onClick={handleCategoryClick}
          sx={{
            borderRadius: "12px",
            background: "linear-gradient(to left, #005bea, #00c6fb)",
            color: "white",
            px: 3.5,
            py: 1.5,
            fontWeight: "bold",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            "&:hover": {
              background: "linear-gradient(to left, #004aad, #00b2d4)",
            },
          }}
        >
          {t.categoriesButton}
        </Button>
        {/* Menu */}
        <MuiMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: 3,
              minWidth: 180,
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              px: 1,
              py: 1,
              bgcolor: "#f9f9ff",
            },
          }}
        >
          {categories[language].map((category, index) => (
            <MenuItem
              key={index}
              onClick={() => handleCategorySelect(category.name)}
              sx={{
                borderRadius: 2,
                px: 1,
                py: 1,
                "&:hover": {
                  backgroundColor: "#e3f2fd",
                },
                fontWeight: "600",
                display: "flex",
                gap: 1,
              }}
            >
              {category.icon}
              {category.name}
            </MenuItem>
          ))}
        </MuiMenu>
      </Box>

      {/* Search Section */}
      <Stack
        direction="row"
        width={{ xs: "100%", sm: "55%" }} // Full width on mobile
        alignItems="center"
        borderRadius="16px"
        overflow="hidden"
        height={48}
        bgcolor="#ffffff"
        boxShadow="0 4px 10px rgba(0,0,0,0.1)"
        sx={{
          border: "1px solid #cbd5e1",
          transition: "box-shadow 0.3s",
          "&:hover": {
            boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
          },
          mb: { xs: 2, sm: 0 }, // Add bottom margin on small screens
        }}
      >
        <InputBase
          placeholder={t.searchPlaceholder}
          sx={{
            px: 2,
            flexGrow: 1,
            fontSize: "1rem",
            color: "#333",
            "&:focus": {
              borderColor: "#005bea",
              boxShadow: "0 0 5px rgba(0, 91, 234, 0.5)",
            },
          }}
        />
        <Button
          sx={{
            height: "100%",
            px: 3,
            background: "#005bea",
            color: "#fff",
            borderRadius: 0,
            fontWeight: "bold",
            "&:hover": {
              background: "#004aad",
            },
          }}
        >
          <Search />
        </Button>
      </Stack>

      {/* Language Switch Button */}
      <Button
        onClick={toggleLanguage}
        variant="contained"
        startIcon={<Translate sx={{ ml: 1.5 }} />}
        sx={{
          background: "linear-gradient(45deg, #00c6fb, #005bea)",
          color: "white",
          borderRadius: "50px",
          fontWeight: "bold",
          px: 4,
          py: 1.5,
          boxShadow: "0 6px 20px rgba(0, 91, 234, 0.2)",
          textTransform: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "linear-gradient(45deg, #004aad, #00b2d4)",
            boxShadow: "0 8px 24px rgba(0, 91, 234, 0.3)",
          },
          "&:active": {
            transform: "scale(0.98)",
          },
        }}
      >
        {t.languageButton}
      </Button>
    </Stack>
  );
};

export default ZirNav;
