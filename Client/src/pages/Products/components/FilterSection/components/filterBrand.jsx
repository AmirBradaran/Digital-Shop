import React, { useState } from "react";
import {
  Box,
  ListItemText,
  Collapse,
  List,
  Checkbox,
  FormControlLabel,
  Paper,
  InputBase,
  IconButton,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function FilterBrand({ style }) {
  const { StyledList, StyledListItem, StyledSubItem } = style;
  const [openBrand, setopenBrand] = useState(false);

  const handleCategoryClick = () => {
    setopenBrand(!openBrand);
  };

  return (
    <StyledList component="nav">
      {/* Brand Header */}
      <StyledListItem button onClick={handleCategoryClick}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ListItemText primary="برند" />
        </Box>
        {openBrand ? <ExpandLess /> : <ExpandMore />}
      </StyledListItem>

      {/* Collapsible Content */}
      <Collapse in={openBrand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* Search Box */}
          <StyledSubItem>
            <Paper
              component="form"
              sx={{
                p: "2px 8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                borderRadius: "8px",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  fontSize: "0.9rem",
                  color: "#888",
                }}
                placeholder="... جستجوی برند"
                inputProps={{ "aria-label": "search brand" }}
              />
              <IconButton
                type="button"
                sx={{
                  p: "8px",
                  color: "#888",
                }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </StyledSubItem>

          {/* Brand List Items */}
          <StyledSubItem>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0px 16px",
                backgroundColor: "#f6f6f6",
                borderRadius: "4px",
                marginBottom: "4px",
              }}
            >
              {/* Persian Name and Checkbox */}
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Checkbox size="small" />
                <Typography sx={{ fontSize: "14px", color: "#555" }}>
                  نایک
                </Typography>
              </Box>
              {/* English Name */}
              <Typography sx={{ fontSize: "12px", color: "#555" }}>
                nike
              </Typography>
            </Box>
          </StyledSubItem>
          <StyledSubItem>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0px 16px",

                backgroundColor: "#f6f6f6",
                borderRadius: "4px",
                marginBottom: "4px",
              }}
            >
              {/* Persian Name and Checkbox */}
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Checkbox size="small" />
                <Typography sx={{ fontSize: "14px", color: "#555" }}>
                  آدیداس
                </Typography>
              </Box>
              {/* English Name */}
              <Typography sx={{ fontSize: "12px", color: "#555" }}>
                adidas
              </Typography>
            </Box>
          </StyledSubItem>
        </List>
      </Collapse>
    </StyledList>
  );
}
