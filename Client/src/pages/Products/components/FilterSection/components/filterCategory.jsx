import React, { useState } from "react";

import {
  Box,
  ListItemText,
  Collapse,
  List,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
// import { styled } from "@mui/material/styles";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function FilterCategory({ style }) {
  const { StyledList, StyledListItem, StyledSubItem } = style;
  const [openCategory, setOpenCategory] = useState(false);
  const handleCategoryClick = () => {
    setOpenCategory(!openCategory);
  };
  return (
    <StyledList component="nav">
      <StyledListItem button onClick={handleCategoryClick}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ListItemText primary="دسته بندی" />
        </Box>
        {openCategory ? <ExpandLess /> : <ExpandMore />}
      </StyledListItem>
      <Collapse in={openCategory} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <StyledSubItem>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={
                <Box component="span" sx={{ fontSize: "12px" }}>
                  کالای دیجیتال
                </Box>
              }
            />
          </StyledSubItem>
          <StyledSubItem>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={
                <Box component="span" sx={{ fontSize: "12px" }}>
            لوازم خانگی
                </Box>
              }
            />
          </StyledSubItem>
          <StyledSubItem>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={
                <Box component="span" sx={{ fontSize: "12px" }}>
           موبایل
                </Box>
              }
            />
          </StyledSubItem>
        </List>
      </Collapse>
    </StyledList>
  );
}
