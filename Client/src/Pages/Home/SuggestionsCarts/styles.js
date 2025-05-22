// styles.js
import { styled, Card, Button } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  direction: "rtl",
  borderRadius: 16,
  boxShadow: theme.shadows[10],
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[16],
  },
}));

export const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.error.dark}, ${theme.palette.error.main})`,
  color: theme.palette.common.white,
  fontWeight: "bold",
  "&:hover": {
    background: `linear-gradient(90deg, ${theme.palette.error.main}, ${theme.palette.error.dark})`,
  },
}));
