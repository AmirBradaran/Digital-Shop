import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import imageDiscount from "../../../assets/off.png";
import imageProduct from "../../../assets/wa.png";
import "swiper/css";
import "swiper/css/pagination";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";

import { Box, Button, Stack, Typography } from "@mui/material";

export default function PopularProductSlider({ title }) {
  return (
    <>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          direction:"rtl" 
        }}
      >
        <Box
          sx={{
            backgroundColor: "#60A5FA",
            height: "165px",
            marginTop: "460px",
            width: {
              xs: "96vw",
              xl: "1475px",
            },
            borderRadius: "15px",
            
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              flexDirection: "row",
              
            }}
          >
            <Box
              sx={{
                position: "absolute",
                marginTop: "-390px",
                
              }}
            >
              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: "700",
                }}
              >
                {title}
              </Typography>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "center",
                  
                }}
              >
                <Typography
                  sx={{
                    padding: "8px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  مشاهده همه
                  <ArrowBackIcon
                    sx={{
                      fontSize: "15px",
                    }}
                  />
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Box
            sx={{
              width: {
                xs: "96vw",
                xl: "1475px",
              },
            }}
          >
            <Swiper
              style={{
                marginTop: "-280px",
                padding: "0 20px",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.3,
                },
                450: {
                  slidesPerView: 1.8,
                },
                680: {
                  slidesPerView: 2.8,
                },
                930: {
                  slidesPerView: 3.8,
                },
                1200: {
                  slidesPerView: 4.8,
                },
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              <Box
                sx={{
                  marginTop: "200px",
                }}
              >
                <SwiperSlide
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "200px !important",
                    height: "420px",
                    gap: "40px",
                    borderRadius: "15px",
                    backgroundColor: "white",
                    marginTop: "280px !important",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box>
                    <Box>
                      <img
                        style={{
                          width: "100%",
                          height: "260px",
                        }}
                        src={imageProduct}
                        alt="#"
                      />
                    </Box>
                    <Stack
                      sx={{
                        marginTop: "30px",
                        paddingX: "10px",
                        gap: "5px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "600",
                          color: "#374151",
                        }}
                      >
                        ساعت مچی اپل
                      </Typography>
                      <Stack
                        sx={{
                          gap: "5px",
                        }}
                      >
                        <Stack
                          sx={{
                            gap: "10px",
                            width: "100%",
                            color: "#1E40AF",
                          }}
                        >
                          <Stack
                            sx={{
                              flexDirection: "row",
                            }}
                          >
                            <Typography
                              sx={{
                                fontWeight: "600",
                              }}
                            >
                              1,750,000
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: "600",
                              }}
                            >
                              تومان
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{
                              gap: "5px",
                              flexWrap: "wrap",
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              sx={{
                                backgroundColor: "#3B82F6",
                                color: "white",
                                padding: "7px 20px",
                                borderRadius: "8px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              مشاهده و خرید
                            </Button>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "200px !important",
                    height: "420px",
                    gap: "40px",
                    borderRadius: "15px",
                    backgroundColor: "white",
                    marginTop: "280px !important",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box>
                    <Box>
                      <img
                        style={{
                          width: "100%",
                          height: "260px",
                        }}
                        src={imageProduct}
                        alt="#"
                      />
                    </Box>
                    <Stack
                      sx={{
                        marginTop: "30px",
                        paddingX: "10px",
                        gap: "5px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "600",
                          color: "#374151",
                        }}
                      >
                        ساعت مچی اپل
                      </Typography>
                      <Stack
                        sx={{
                          gap: "5px",
                        }}
                      >
                        <Stack
                          sx={{
                            gap: "10px",
                            width: "100%",
                            color: "#1E40AF",
                          }}
                        >
                          <Stack
                            sx={{
                              flexDirection: "row",
                            }}
                          >
                            <Typography
                              sx={{
                                fontWeight: "600",
                              }}
                            >
                              1,750,000
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: "600",
                              }}
                            >
                              تومان
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{
                              gap: "5px",
                              flexWrap: "wrap",
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              sx={{
                                backgroundColor: "#3B82F6",
                                color: "white",
                                padding: "7px 20px",
                                borderRadius: "8px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              مشاهده و خرید
                            </Button>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "200px !important",
                    height: "420px",
                    gap: "40px",
                    borderRadius: "15px",
                    backgroundColor: "white",
                    marginTop: "280px !important",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box>
                    <Box>
                      <img
                        style={{
                          width: "100%",
                          height: "260px",
                        }}
                        src={imageProduct}
                        alt="#"
                      />
                    </Box>
                    <Stack
                      sx={{
                        marginTop: "30px",
                        paddingX: "10px",
                        gap: "5px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "600",
                          color: "#374151",
                        }}
                      >
                        ساعت مچی اپل
                      </Typography>
                      <Stack
                        sx={{
                          gap: "5px",
                        }}
                      >
                        <Stack
                          sx={{
                            gap: "10px",
                            width: "100%",
                            color: "#1E40AF",
                          }}
                        >
                          <Stack
                            sx={{
                              flexDirection: "row",
                            }}
                          >
                            <Typography
                              sx={{
                                fontWeight: "600",
                              }}
                            >
                              1,750,000
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: "600",
                              }}
                            >
                              تومان
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{
                              gap: "5px",
                              flexWrap: "wrap",
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              sx={{
                                backgroundColor: "#3B82F6",
                                color: "white",
                                padding: "7px 20px",
                                borderRadius: "8px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              مشاهده و خرید
                            </Button>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "200px !important",
                    height: "420px",
                    gap: "40px",
                    borderRadius: "15px",
                    backgroundColor: "white",
                    marginTop: "280px !important",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box>
                    <Box>
                      <img
                        style={{
                          width: "100%",
                          height: "260px",
                        }}
                        src={imageProduct}
                        alt="#"
                      />
                    </Box>
                    <Stack
                      sx={{
                        marginTop: "30px",
                        paddingX: "10px",
                        gap: "5px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "600",
                          color: "#374151",
                        }}
                      >
                        ساعت مچی اپل
                      </Typography>
                      <Stack
                        sx={{
                          gap: "5px",
                        }}
                      >
                        <Stack
                          sx={{
                            gap: "10px",
                            width: "100%",
                            color: "#1E40AF",
                          }}
                        >
                          <Stack
                            sx={{
                              flexDirection: "row",
                            }}
                          >
                            <Typography
                              sx={{
                                fontWeight: "600",
                              }}
                            >
                              1,750,000
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: "600",
                              }}
                            >
                              تومان
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{
                              gap: "5px",
                              flexWrap: "wrap",
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              sx={{
                                backgroundColor: "#3B82F6",
                                color: "white",
                                padding: "7px 20px",
                                borderRadius: "8px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              مشاهده و خرید
                            </Button>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "200px !important",
                    height: "420px",
                    gap: "40px",
                    borderRadius: "15px",
                    backgroundColor: "white",
                    marginTop: "280px !important",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box>
                    <Box>
                      <img
                        style={{
                          width: "100%",
                          height: "260px",
                        }}
                        src={imageProduct}
                        alt="#"
                      />
                    </Box>
                    <Stack
                      sx={{
                        marginTop: "30px",
                        paddingX: "10px",
                        gap: "5px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "600",
                          color: "#374151",
                        }}
                      >
                        ساعت مچی اپل
                      </Typography>
                      <Stack
                        sx={{
                          gap: "5px",
                        }}
                      >
                        <Stack
                          sx={{
                            gap: "10px",
                            width: "100%",
                            color: "#1E40AF",
                          }}
                        >
                          <Stack
                            sx={{
                              flexDirection: "row",
                            }}
                          >
                            <Typography
                              sx={{
                                fontWeight: "600",
                              }}
                            >
                              1,750,000
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: "600",
                              }}
                            >
                              تومان
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{
                              gap: "5px",
                              flexWrap: "wrap",
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              sx={{
                                backgroundColor: "#3B82F6",
                                color: "white",
                                padding: "7px 20px",
                                borderRadius: "8px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              مشاهده و خرید
                            </Button>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "200px !important",
                    height: "420px",
                    gap: "40px",
                    borderRadius: "15px",
                    backgroundColor: "white",
                    marginTop: "280px !important",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box>
                    <Box>
                      <img
                        style={{
                          width: "100%",
                          height: "260px",
                        }}
                        src={imageProduct}
                        alt="#"
                      />
                    </Box>
                    <Stack
                      sx={{
                        marginTop: "30px",
                        paddingX: "10px",
                        gap: "5px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "600",
                          color: "#374151",
                        }}
                      >
                        ساعت مچی اپل
                      </Typography>
                      <Stack
                        sx={{
                          gap: "5px",
                        }}
                      >
                        <Stack
                          sx={{
                            gap: "10px",
                            width: "100%",
                            color: "#1E40AF",
                          }}
                        >
                          <Stack
                            sx={{
                              flexDirection: "row",
                            }}
                          >
                            <Typography
                              sx={{
                                fontWeight: "600",
                              }}
                            >
                              1,750,000
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: "600",
                              }}
                            >
                              تومان
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{
                              gap: "5px",
                              flexWrap: "wrap",
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              sx={{
                                backgroundColor: "#3B82F6",
                                color: "white",
                                padding: "7px 20px",
                                borderRadius: "8px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              مشاهده و خرید
                            </Button>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </SwiperSlide>
              </Box>
            </Swiper>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
