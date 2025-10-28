import { Container, Typography, Tabs, Tab } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import blueWave from "../../assets/blue-wave.png";
import GraySection from "./components/GraySection";
const BlueWave = styled(Container)(({ theme }) => ({
  backgroundImage: `url(${blueWave})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: 120,
  backgroundRepeat: "no-repeat",
}));
const WhoWeAre = styled(Grid)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // margin: "0 auto",
  textAlign: "center",
  gap: 10,
}));

const TabStyle = styled(Tab)(({ theme }) => ({
  color: "white",
  margin: "0 auto",
  width: "50%",
  "&.Mui-selected": {
    fontWeight: "bold",
    backgroundColor: "#2563EB",
    color: "white",
    BorderBottom: "0",
    borderRadius: "25px",
    [theme.breakpoints.up("xs")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
    },
  },
}));
const TabsStyle = styled(Tabs)(({ theme }) => ({
  backgroundColor: "#000000",
  width: "50%",
  margin: "0 auto",
  borderRadius: "25px",
  display: "flex",
  justifyContent: "space-between",
  padding: "3px 15px",
  [theme.breakpoints.up("xs")]: {
    width: "70%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

export default function AboutAndContactUs() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { pathname } = window.location;
  useEffect(() => {
    if (pathname === "/about-us") {
      setValue(0);
    } else if (pathname === "/contact-us") {
      setValue(1);
    }
  }, [pathname]);
  return (
    <>
      <BlueWave maxWidth={false} />
      <Grid
        container
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WhoWeAre item size={{ sm: 12, md: 6 }}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight={800}
            sx={{ width: "100%" }}
          >
            ما کی هستیم؟
          </Typography>
          <Typography
            variant="body1"
            component="p"
            textAlign="center"
            fontWeight="bold"
            lineHeight={2}
          >
            تیم الکترونیک آرت مشهد،با سابقه ده سال فروش محصولات و تامین نیاز
            کشور در صنایع الکترونیکی و غیر الکترونیکی با قدرت
          </Typography>
        </WhoWeAre>

        <Grid
          item
          size={{ xs: 12, sm: 8, md: 6, xl: 4 }}
          sx={{
            position: "relative",
            // maxWidth: { xs: "70%", sm: "70%", md: "70%", lg: "60%" },
            height: 430,
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <TabsStyle value={value} onChange={handleChange} centered>
            <TabStyle label="درباره ما" />
            <TabStyle label="ارتباط با ما" />
          </TabsStyle>
          <GraySection value={value} />
        </Grid>
      </Grid>
    </>
  );
}
