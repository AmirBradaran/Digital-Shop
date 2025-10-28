import React, { useState } from "react";
import {
  FormControlLabel,
  List,
  ListItem,
  Typography,
  Switch,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FilterCategory from "./components/filterCategory";
import FilterBrand from "./components/filterBrand";
import FilterMarketer from "./components/filterMarketer";

// Styled Components
const StyledBox = styled(Box)(({ theme }) => ({
  gridColumn: "span 3",
  padding: "16px",
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: "8px",
  backgroundColor: "#fff",
  margin: "0 10px",direction:"rtl"
}));
const StyledHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledList = styled(List)(({ theme }) => ({
  width: "100%",
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: "4px",
  margin: "0px auto",
  gap: "10px",
}));
const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  borderRadius: "4px",
}));

const StyledSubItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  borderRadius: "5px",
  width: "95%",
  margin: "10px auto",
  padding: "0",
}));

const styleProps = { StyledList, StyledListItem, StyledSubItem };

const FilterComponent = () => {
  return (
    <StyledBox>
      <StyledHeader>
        <Typography variant="h6" gutterBottom>
          فیلتر ها
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          sx={{ cursor: "pointer", color: "red" }}
        >
          حذف همه
        </Typography>
      </StyledHeader>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Category Filter */}
        <FilterCategory style={styleProps} />

        {/* brand Filters */}
        <FilterBrand style={styleProps} />
        <FilterMarketer style={styleProps} />
      </Box>

      {/* Toggles */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginTop: "10px",
        }}
      >
        <FormControlLabel
          control={<Switch />}
          label={
            <Box sx={{ textAlign: "right", flex: 1 }}>فقط کالا های موجود</Box>
          }
          sx={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row-reverse",
            width: "100%",
          }}
        />
        <FormControlLabel
          control={<Switch />}
          label={
            <Box sx={{ textAlign: "right", flex: 1 }}>
              فقط محصولات موجود در انبار
            </Box>
          }
          sx={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row-reverse",
            width: "100%",
          }}
        />
      </Box>
    </StyledBox>
  );
};

export default FilterComponent;
