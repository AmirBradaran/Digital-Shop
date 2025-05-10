import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { RouterProvider } from 'react-router-dom'
import clientRoutes from "./Routes/index"
export default function App() {
  const theme = createTheme({
    direction: "rtl",
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={clientRoutes} />
      </ThemeProvider>
    </>
  );
}
