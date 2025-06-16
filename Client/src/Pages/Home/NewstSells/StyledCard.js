import { styled, Card } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  boxShadow: theme.shadows[3],
  overflow: "hidden",
  transition: "transform 0.35s ease, box-shadow 0.35s ease",
  borderRadius: 20,
  background: "rgba(255, 255, 255, 0.75)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: "20px 0",
  "& .swiper": {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: theme.spacing(2),
  },
  "& img": {
    width: "100%",
    height: "22vh",
    borderRadius: 12,
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  "&:hover img": {
    transform: "scale(1.03)",
  },
}));

export default StyledCard;
