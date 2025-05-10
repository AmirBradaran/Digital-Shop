import { Box, Stack, Button, Typography } from "@mui/material";
import React from "react";
import { useLanguage } from "../../../Utils/LanguageContext";

export default function ZirNav() {
  const { language, toggleLanguage } = useLanguage();

  const texts = [
    { fa: "صفحه اصلی", en: "Home" },
    { fa: "محصولات", en: "Products" },
    { fa: "ارتباط با ما", en: "Contact Us" },
    { fa: "مقالات", en: "Articles" },
  ];

  return (
    <Box
      width="90%"
      bgcolor="#04509B"
      height="80px"
      borderRadius="0 0 16px 16px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={4}
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.2)"
    >
      {/* منو */}
      <Stack spacing={3} direction="row">
        {texts.map((item, index) => (
          <Typography
            key={index}
            position="relative"
            px={1}
            sx={{
              cursor: "pointer",
              color: "white",
              fontWeight: "600",
              fontSize: "18px",
              transition: "color 0.3s",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -4,
                left: "50%",
                width: "0%",
                height: "2px",
                backgroundColor: "white",
                transition: "all 0.3s ease",
                transform: "translateX(-50%)",
              },
              "&:hover": {
                color: "#FFD700",
              },
              "&:hover::after": {
                width: "60%",
              },
            }}
          >
            {language === "fa" ? item.fa : item.en}
          </Typography>
        ))}
      </Stack>

      {/* دکمه تغییر زبان */}
      <Button
        onClick={toggleLanguage}
        variant="outlined"
        sx={{
          color: "white",
          borderColor: "white",
          borderRadius: "20px",
          fontWeight: "bold",
          px: 3,
          "&:hover": {
            backgroundColor: "white",
            color: "#04509B",
          },
        }}
      >
        {language === "fa" ? "فارسی" : "English"}
      </Button>
    </Box>
  );
}
