import React from 'react'
import ZirNav from './ZirNav'
import { Box, Stack } from '@mui/material'
import Nav from './Nav'

export default function Navbar() {
  
  return (
    <Stack maxWidth={"100%"} minHeight={"10vh"} border={"1px solid black"} alignItems={"center"} direction={"column"}>
      <Nav/>
      <ZirNav/>
    </Stack>
  )
}
