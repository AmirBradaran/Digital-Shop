import React from "react";
import { Card, CardContent, Box, Skeleton } from "@mui/material";

export default function LoaderCard() {
  return (
    <Card
      sx={{
        maxWidth: 300,
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "none",
        overflow: "hidden",
        padding: "15px",
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Skeleton variant="circular" width={30} height={30} />
        <Skeleton variant="rounded" width={40} height={20} />
      </Box>

      {/* Product Image */}
      <Skeleton
        variant="rectangular"
        width="100%"
        height={140}
        sx={{
          borderRadius: "4px",
          mb: 1,
        }}
      />

      {/* Product Title */}
      <CardContent>
        <Skeleton variant="text" width="80%" height={20} />
        <Skeleton variant="text" width="60%" height={20} />
      </CardContent>

      {/* Price Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Skeleton variant="text" width="40%" height={20} />
        <Skeleton variant="text" width="30%" height={20} />
      </Box>
    </Card>
  );
}
