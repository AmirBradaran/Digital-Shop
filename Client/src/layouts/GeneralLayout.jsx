import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function GeneralLayout() {
  return (
    <>
      <Header />
      <Box minHeight={"100vh"}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
