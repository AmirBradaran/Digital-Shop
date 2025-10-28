import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { convertNumberEngToPersian } from "../../../utils/functions";

export default function ProductCard({ item }) {
  return (
    <Card
      sx={{
        maxWidth: 250,
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        padding: "15px",
        position: "relative",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        "&:hover .hover-icon": {
          visibility: "visible",
          opacity: 1,
        },
        cursor: "pointer",
        direction:"rtl"
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          margin: "0 auto",
          width: "90%",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
          direction:"rtl"
        }}
      >
        {item.off ? (
          <Typography
            sx={{
              backgroundColor: "#3fbcf1",
              color: "#fff",
              fontSize: "10px",
              padding: "8px",
              borderRadius: "50%",
              direction:"rtl"
            }}
          >
            {item.off}
          </Typography>
        ) : (
          <div></div>
        )}
        <IconButton
          className="hover-icon"
          sx={{
            padding: 0,
            color: "#f5a623",
            visibility: "hidden",
          }}
        >
          <StarBorderIcon fontSize="small" />
          <Typography sx={{ fontSize: "12px", color: "#555" }}>
            {item.rate}
          </Typography>
        </IconButton>
      </Box>

      {/* Product Image */}
      <CardMedia
        component="img"
        width="100%"
        image={item.image}
        alt={item.title}
        sx={{
          objectFit: "contain",
          maxHeight: "200px",
          direction:"rtl"
        }}
      />

      {/* Product Title */}
      <CardContent sx={{ textAlign: "right", padding: "8px 0" , direction:"rtl"}}>
        <Typography
          component="h3"
          sx={{
            fontWeight: "500",
            color: "#333",
            textAlign: "right",
          }}
        >
          {item.title}
        </Typography>
      </CardContent>

      {/* Price Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          direction:"rtl"
        }}
      >
        {/* Discounted Price */}
        {item.off && (
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#0d6efd",
              display: "flex",
              gap: "5px",
            }}
          >
            <span> {convertNumberEngToPersian(item.priceWithOff)}</span>
            <span> تومان</span>
          </Typography>
        )}

        {/* Original Price */}
        <Typography
          sx={{
            fontSize: "14px",
            color: "#3D96EF",
            textDecoration: "line-through",
          }}
        >
          <span> {convertNumberEngToPersian(item.price)}</span>
          <span>تومان</span>
        </Typography>
      </Box>
    </Card>
  );
}
