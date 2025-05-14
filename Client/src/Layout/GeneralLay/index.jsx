import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function index() {
  return (
    <>
      <Navbar/>
      <Box minHeight={"80vh"} my={5}>
        <Outlet/>
      </Box>
      <Footer/>
    </>
  )
}
