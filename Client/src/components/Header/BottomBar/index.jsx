import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
// import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { AccountCircle, Search } from "@mui/icons-material";

export default function BottomBar() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 999,
          display: {
            sm: "none",
          },
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1)",
            padding: {
              xs: "10px 30px",
              sm: "10px 70px",
            },
          }}
        >
          <Stack
            sx={{
              alignItems: "center",
              fontSize: "13px",
            }}
          >
            <HomeIcon />
            <Typography
              sx={{
                color: "#9CA3AF",
                fontSize: "13px",
              }}
            >
              صفحه اصلی
            </Typography>
          </Stack>
          <Stack
            sx={{
              alignItems: "center",
              fontSize: "13px",
            }}
           >
            <ShoppingCartIcon />
            <Typography
              sx={{
                color: "#9CA3AF",
                fontSize: "13px",
              }}
            >
              سبد خرید
            </Typography>
          </Stack>
          <Stack
            sx={{
              alignItems: "center",
            }}
          >
            <PersonIcon />
            <Typography
              sx={{
                color: "#9CA3AF",
                fontSize: "13px",
              }}
            >
              پروفایل
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
