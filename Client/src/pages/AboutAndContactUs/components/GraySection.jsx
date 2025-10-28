import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import ContactUs from "../../../assets/contactUs.png";
export default function GraySection({ value }) {
  const GraySection = styled(Box)(({ theme }) => ({
    position: "absolute",
    backgroundColor: "#E5E7EB",
    top: "25px",
    height: 280,
    display: "flex",
    borderRadius: "25px",
    padding: "50px 30px",
    zIndex: -1,
    // [theme.breakpoints.up("xs")]: {
    //   width: "100%",
    //   right: "0",
    // },
    // [theme.breakpoints.up("md")]: {
    //   width: "300px",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   width: "100%",
    // },
  }));
  const ContactUsWrapper = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 3,
  }));

  const ImageContactUs = styled("img")(({ theme }) => ({
    width: "70%",
    height: "50%",
    float: "left",
  }));
  const ImageContainer = styled("Box")(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
      width: 0,
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  }));

  return (
    <>
      <GraySection>
        {value === 0 ? (
          <ContactUsWrapper>
            <Typography
              variant="body1"
              component="p"
              sx={{
                flex: 1,
                lineHeight: 1.8,
                textAlign: "justify",
              }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
              فراوان
            </Typography>
            <ImageContainer sx={{ width: "50%" }}>
              <ImageContactUs src={ContactUs} alt="contact us" />
            </ImageContainer>
          </ContactUsWrapper>
        ) : (
          <ContactUsWrapper>
            <ImageContainer sx={{ width: "50%" }}>
              <ImageContactUs src={ContactUs} alt="contact us" />
            </ImageContainer>
            <Typography
              variant="body1"
              component="p"
              sx={{
                flex: 1,
                lineHeight: 1.8,
                maxHeight: "100%",
                textAlign: "justify",
              }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            </Typography>
          </ContactUsWrapper>
        )}
      </GraySection>
    </>
  );
}
