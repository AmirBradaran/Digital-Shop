import React, { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { createTheme, ThemeProvider } from "@mui/material";
import routes from "./routes/index";
export default function App() {
  const theme = createTheme({
    direction: "rtl",
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes}/>
      </ThemeProvider>
    </>
  )
}
