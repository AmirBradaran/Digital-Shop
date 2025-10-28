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

export default function FilterMarketer({ style }) {
  const { StyledList, StyledListItem, StyledSubItem } = style;
  const [openMarketer, setopenMarketer] = useState(false);
  const handleCategoryClick = () => {
    setopenMarketer(!openMarketer);
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
          <ListItemText primary=" نوع فروشنده" />
        </Box>
        {openMarketer ? <ExpandLess /> : <ExpandMore />}
      </StyledListItem>
      <Collapse in={openMarketer} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <StyledSubItem>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={
                <Box component="span" sx={{ fontSize: "12px" }}>
                  فروشنده مرکزی
                </Box>
              }
            />
          </StyledSubItem>
          <StyledSubItem>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={
                <Box component="span" sx={{ fontSize: "12px" }}>
                  هایپر استار
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
