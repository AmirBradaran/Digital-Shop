import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import NotFoundImage from "../../assets/notFound.png";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
const ImageContactUs = styled("img")({
  width: "80%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const CustomContainer = styled(Container)(({ theme }) => ({
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 8,
}));
const CustomTypography = styled(Typography)(({ theme }) => ({
  fontSize: 28,
}));
export default function NotFound() {
  return (
    <CustomContainer>
      <Link
        to={"/"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageContactUs src={NotFoundImage} alt="not found" />
      </Link>
      <Stack sx={{gap:"5px",alignItems:"center",mt:"20px"}}>
        <CustomTypography>صفحه مورد نظر پیدا نشد.</CustomTypography>
        <CustomTypography>ایـن مـشـکـل مـیــتونه موقت باشه</CustomTypography>
      </Stack>
    </CustomContainer>
  );
}
