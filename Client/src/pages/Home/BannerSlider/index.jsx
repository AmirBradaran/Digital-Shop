import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Stack } from "@mui/material";
import "./style.css";
import slide1 from "../../../assets/1.webp";
import slide2 from "../../../assets/2.gif";
import slide3 from "../../../assets/3.webp";
import slide4 from "../../../assets/4.webp";
import slide5 from "../../../assets/5.webp";
export default function BannerSlider() {
  // const [slideBanner, setSlideBanner] = useState();
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await fetch(
  //         process.env.REACT_APP_BASE_API + "slider"
  //       );
  //       const data = await res.json();
  //       setSlideBanner(data?.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, []);
  // const item = slideBanner?.map((e, index) => {
  //   return (
  // <SwiperSlide className="cursor-pointer" key={index}>
  //   <img
  //     className="xl:h-95 lg:h-75 h-44 w-full object-cover lg:rounded-none rounded-2xl"
  //     src={
  //       process.env.REACT_APP_BASE_URL +
  //       e?.attributes?.image?.data?.attributes?.url
  //     }
  //     alt="#"
  //   />
  // </SwiperSlide>
  //   );
  // });
  return (
    <>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          display: {
            xs: "none",
            md: "flex",
          },
          direction:"rtl"
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: {
              xs: "96vw",
              xl: "1475px",
            },
            position: "absolute",
            justifyContent: "space-between",
            marginTop: "135px",
          }}
        >
          <Stack
            sx={{
              backgroundColor: "white",
              zIndex: 10,
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #d1d5db",
              width: "28px",
              height: "28px",
              marginRight: "10px",
              borderRadius: "50%",
              "&:hover svg": {
                color: "#374151",
              },
            }}
            className="nextBanner"
          >
            <KeyboardArrowRightIcon
              sx={{
                color: "#9ca3af",
              }}
            />
          </Stack>
          <Stack
            sx={{
              backgroundColor: "white",
              zIndex: 10,
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #d1d5db",
              width: "28px",
              height: "28px",
              marginLeft: "10px",
              borderRadius: "50%",
              "&:hover svg": {
                color: "#374151",
              },
            }}
            className="prevBanner"
          >
            <KeyboardArrowLeftIcon
              sx={{
                color: "#9ca3af",
              }}
            />
          </Stack>
        </Box>
      </Stack>

      <Swiper
        className="swiper-container"
        style={{
          // width: {
          //   xs: "96vw",
          //   xl: "1475px",
          // },
          // width: window.innerWidth <= 1280  "96vw"  ,
          // overflow: "hidden",
          // borderRadius: "10px",
          // marginTop: "10px",
          // position: "relative",
          // height: "305px",
        }}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".nextBanner",
          prevEl: ".prevBanner",
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
            src={slide1}
            alt="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
            src={slide2}
            alt="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
            src={slide3}
            alt="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
            src={slide4}
            alt="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
            src={slide5}
            alt="#"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
