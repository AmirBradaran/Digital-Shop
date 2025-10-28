import React, { useState } from "react";
import { Box, Menu, MenuItem, Typography, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function SortSection() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("مرتب سازی پیش فرض");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    if (option) {
      setSelectedOption(option);
    }
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
        padding: "8px 16px",
        borderBottom: "2px solid #f0f0f0",direction:"rtl"
      }}
    >
      {/* Sort Section */}
      <Box>
        <Button
          id="sort-button"
          aria-controls={open ? "sort-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="outlined"
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            borderRadius: "8px",
            padding: "8px 16px",
            textTransform: "none",direction:"rtl"
          }}
        >
          {selectedOption}
        </Button>
        <Menu
          id="sort-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => handleClose(null)}
          sx={{direction:"rtl"}}
          MenuListProps={{
            "aria-labelledby": "sort-button",
          }}
        >
          <MenuItem onClick={() => handleClose("مرتب سازی پیش فرض")}>
            مرتب سازی پیش فرض
          </MenuItem>
          <MenuItem onClick={() => handleClose("ارزان ترین")}>
            ارزان ترین
          </MenuItem>
          <MenuItem onClick={() => handleClose("گران ترین")}>
            گران ترین
          </MenuItem>
          <MenuItem onClick={() => handleClose("محبوب ترین")}>
            محبوب ترین
          </MenuItem>
          <MenuItem onClick={() => handleClose("پرفروش ترین")}>
            پرفروش ترین
          </MenuItem>
        </Menu>
      </Box>

      {/* Search Result Count */}
      <Typography
        sx={{
          fontSize: "14px",
          color: "#555",
        }}
      >
        ۲۴ نتیجه جستجو
      </Typography>
    </Box>
  );
}
