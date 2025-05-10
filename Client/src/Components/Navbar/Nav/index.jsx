import {
  Box,
  Stack,
  Typography,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import React from "react";
import { useLanguage } from "../../../Utils/LanguageContext";
import { Login, ShoppingCart, Search } from "@mui/icons-material";
import Logo from "../../../assets/House-Keeper.png";
import { styled } from "@mui/material/styles";

export default function Nav() {
  const { language } = useLanguage();

  const Btn = [
    { fa: "سبد خرید", en: "Cart", icon: <ShoppingCart /> },
    { fa: "ورود مشتریان", en: "Login", icon: <Login /> },
  ];

  const SearchContainer = styled(Paper)(({ theme }) => ({
    padding: "4px 12px",
    display: "flex",
    alignItems: "center",
    width: 400,
    borderRadius: 30,
    boxShadow: "none",
    border: "1px solid #ccc",
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: "#04509B",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 14,
    direction: language === "fa" ? "rtl" : "ltr",
  }));

  return (
    <Stack
      direction="row"
      bgcolor="white"
      py={2}
      px={4}
      boxShadow="0 2px 8px rgba(0,0,0,0.05)"
      alignItems="center"
      spacing={2}
    >
      {/* لوگو */}
      <Stack Width="120px">
        <img
          src={Logo}
          alt="Logo"
          style={{ height: "30px", objectFit: "contain" }}
        />
      </Stack>

      {/* سرچ */}
      <Stack flexGrow={1} display="flex"  justifyContent="center">
        <SearchContainer variant="outlined">
          <IconButton type="submit" sx={{ p: "6px" }} aria-label="search">
            <Search />
          </IconButton>
          <StyledInputBase
            placeholder={
              language === "fa"
                ? "جستجو محصول، برند و ..."
                : "Search for product, brand..."
            }
            inputProps={{ "aria-label": "search products" }}
          />
        </SearchContainer>
      </Stack>

      {/* دکمه‌ها */}
      <Stack>
        <Stack direction="row" gap={2}>
          {Btn.map((item, index) => (
            <Stack
              key={index}
              px={2.5}
              py={1}
              border="1px solid #04509B"
              borderRadius="25px"
              display="flex"
              alignItems="center"
              gap={1}
              sx={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                color: "#04509B",
                fontSize: "14px",
                "&:hover": {
                  bgcolor: "#04509B",
                  color: "white",
                  "& svg": {
                    color: "white",
                  },
                },
              }}
            >
              {item.icon}
              <Typography fontWeight="bold">
                {language === "fa" ? item.fa : item.en}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
