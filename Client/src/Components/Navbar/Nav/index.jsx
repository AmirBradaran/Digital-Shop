import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Badge,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  ShoppingCart,
  FavoriteBorder,
  PersonOutline,
  Menu,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import logo from "../../../assets/logo.png";
import { useLanguage } from "../../../Utils/LanguageContext";

export default function Nav() {
  const { language } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const texts = {
    fa: {
      myAccount: "حساب کاربری من",
      login: "ورود",
      cart: "سبد خرید",
      price: "۰ تومان",
    },
    en: {
      myAccount: "My Account",
      login: "Login",
      cart: "Cart",
      price: "$0",
    },
  };

  const typo = language === "fa" ? "IranYekan" : "Arial";
  const t = texts[language];
  const direction = language === "fa" ? "rtl" : "ltr";
  const favoriteCount = 3;

  const MotionBox = motion(Box);

  const hoverStyle = {
    scale: 1.08,
    boxShadow: "0px 6px 15px rgba(0,0,0,0.15)",
  };

  const tapStyle = {
    scale: 0.96,
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          direction,
          px: "10%",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: {
              xs: "center",
              sm: "space-between",
            },
            py: 1,
            position: "relative",
          }}
        >
          {/* Logo */}
          <MotionBox
            whileHover={{ rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              position: {
                xs: "absolute",
                sm: "static",
              },
              left: {
                xs: "50%",
                sm: "auto",
              },
              transform: {
                xs: "translateX(-50%)",
                sm: "none",
              },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{ height: 50, width: "auto", cursor: "pointer" }}
            />
          </MotionBox>

          {/* Icons Section */}
          <Stack
            direction="row"
            alignItems="center"
            gap={3}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {/* Favorites */}
            <MotionBox
              whileHover={hoverStyle}
              whileTap={tapStyle}
              sx={{
                p: 1,
                borderRadius: 2,
                background: "linear-gradient(135deg, #ffe0e3, #ffcdd2)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Badge
                badgeContent={favoriteCount}
                color="error"
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: "0.7rem",
                    fontWeight: "bold",
                    minWidth: 18,
                    height: 18,
                  },
                }}
              >
                <FavoriteBorder sx={{ fontSize: 28, color: "#d32f2f" }} />
              </Badge>
            </MotionBox>

            {/* My Account */}
            <MotionBox
              whileHover={hoverStyle}
              whileTap={tapStyle}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: 3,
                background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
                cursor: "pointer",
              }}
            >
              <PersonOutline sx={{ fontSize: 28, color: "#1976d2" }} />
              <Stack
                direction="column"
                alignItems={language === "fa" ? "flex-start" : "flex-end"}
                spacing={-0.5}
              >
                <Typography fontFamily={typo} fontSize={14}>
                  {t.myAccount}
                </Typography>
                <Typography
                  fontFamily={typo}
                  fontWeight={700}
                  fontSize={13}
                  color="#1565c0"
                >
                  {t.login}
                </Typography>
              </Stack>
            </MotionBox>

            {/* Cart */}
            <MotionBox
              whileHover={hoverStyle}
              whileTap={tapStyle}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: 3,
                background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
                cursor: "pointer",
              }}
            >
              <Badge badgeContent={0} color="primary">
                <ShoppingCart sx={{ fontSize: 28, color: "#1976d2" }} />
              </Badge>
              <Stack
                direction="column"
                alignItems={language === "fa" ? "flex-start" : "flex-end"}
                spacing={-0.5}
              >
                <Typography fontFamily={typo} fontSize={14}>
                  {t.cart}
                </Typography>
                <Typography
                  fontFamily={typo}
                  fontWeight={700}
                  fontSize={13}
                  color="#1565c0"
                >
                  {t.price}
                </Typography>
              </Stack>
            </MotionBox>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
            padding: 2,
          },
        }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="صفحه اصلی" />
          </ListItem>
        </List>
      </Drawer>

      {/* Floating Mobile Menu Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1300,
          display: { xs: "flex", sm: "none" },
        }}
      >
        <IconButton
          onClick={toggleDrawer}
          sx={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              background: "linear-gradient(135deg, #bbdefb, #90caf9)",
            },
          }}
        >
          <Menu sx={{ fontSize: 30, color: "#1976d2" }} />
        </IconButton>
      </Box>
    </>
  );
}
