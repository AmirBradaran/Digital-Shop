import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";
import { Box, Stack, Typography } from "@mui/material";
import image1 from "../../../assets/1B.png";
import image2 from "../../../assets/2.png";
import image3 from "../../../assets/3.png";
import image4 from "../../../assets/4.png";
import image5 from "../../../assets/5.png";

export default function BrandSlider() {
  //   const [product, setProduct] = useState();
  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const res = await fetch(
  //           process.env.REACT_APP_BASE_API + "brands?populate=*"
  //         );
  //         const data = await res.json();
  //         setProduct(data?.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     })();
  //   }, []);
  return (
    <>
      <Stack
        sx={{
          gap: "18px",
          marginTop: "100px",
          direction:"rtl"
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            flexDirection: "row",
            direction:"rtl"
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "600",
              }}
            >
              محبوب ترین برند ها
            </Typography>
          </Box>
        </Stack>

        <Stack
          sx={{
            flexDirection: "row",
          }}
        >
          <Swiper
            style={{
              width: "96vw",
              maxWidth: "1475px",
            }}
            breakpoints={{
              0: {
                slidesPerView: 2.5,
              },
              480: {
                slidesPerView: 3.5,
              },
              600: {
                slidesPerView: 4.5,
              },
              770: {
                slidesPerView: 5.5,
              },
              980: {
                slidesPerView: 7.5,
              },
              1300: {
                slidesPerView: 9.8,
              },
            }}
            freeMode={true}
            navigation={{
              nextEl: ".nextBrand",
              prevEl: ".prevBrand",
            }}
            modules={[FreeMode, Navigation]}
          >
            <Box>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " start",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      borderLeft: "1.5px solid #E5E7EB",
                      padding: "17px 0px 17px 20px",
                    }}
                    src={image1}
                    alt="#"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " start",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      borderLeft: "1.5px solid #E5E7EB",
                      padding: "17px 0px 17px 20px",
                    }}
                    src={image2}
                    alt="#"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " start",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      borderLeft: "1.5px solid #E5E7EB",
                      padding: "17px 0px 17px 20px",
                    }}
                    src={image3}
                    alt="#"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " start",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      borderLeft: "1.5px solid #E5E7EB",
                      padding: "17px 0px 17px 20px",
                    }}
                    src={image4}
                    alt="#"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " start",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      borderLeft: "1.5px solid #E5E7EB",
                      padding: "17px 0px 17px 20px",
                    }}
                    src={image5}
                    alt="#"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " start",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      borderLeft: "1.5px solid #E5E7EB",
                      padding: "17px 0px 17px 20px",
                    }}
                    src={image1}
                    alt="#"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " start",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      borderLeft: "1.5px solid #E5E7EB",
                      padding: "17px 0px 17px 20px",
                    }}
                    src={image2}
                    alt="#"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " start",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      borderLeft: "1.5px solid #E5E7EB",
                      padding: "17px 0px 17px 20px",
                    }}
                    src={image3}
                    alt="#"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " start",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      borderLeft: "1.5px solid #E5E7EB",
                      padding: "17px 0px 17px 20px",
                    }}
                    src={image4}
                    alt="#"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " start",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      borderLeft: "1.5px solid #E5E7EB",
                      padding: "17px 0px 17px 20px",
                    }}
                    src={image5}
                    alt="#"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " start",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      borderLeft: "1.5px solid #E5E7EB",
                      padding: "17px 0px 17px 20px",
                    }}
                    src={image1}
                    alt="#"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " start",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      borderLeft: "1.5px solid #E5E7EB",
                      padding: "17px 0px 17px 20px",
                    }}
                    src={image2}
                    alt="#"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " start",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      borderLeft: "1.5px solid #E5E7EB",
                      padding: "17px 0px 17px 20px",
                    }}
                    src={image3}
                    alt="#"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " start",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      borderLeft: "1.5px solid #E5E7EB",
                      padding: "17px 0px 17px 20px",
                    }}
                    src={image4}
                    alt="#"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " start",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      borderLeft: "1.5px solid #E5E7EB",
                      padding: "17px 0px 17px 20px",
                    }}
                    src={image5}
                    alt="#"
                  />
                </Box>
              </SwiperSlide>
            </Box>
          </Swiper>
        </Stack>
      </Stack>
    </>
  );
}
