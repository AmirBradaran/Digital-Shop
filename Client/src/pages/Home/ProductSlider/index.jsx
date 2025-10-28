import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import imageDiscount from "../../../assets/off.png";
import imageProduct from "../../../assets/wa.png";
import "swiper/css";
import "swiper/css/pagination";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";

import { Box, Button, Stack, Typography } from "@mui/material";
import Timer from "./Timer";

export default function ProductSlider() {
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
            height: "360px",
            marginTop: "50px",
            width: {
              xs: "96vw",
              xl: "1475px",
            },
            borderRadius: "15px",
          }}
        >
          <Swiper
            style={{
              marginTop: "45px",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
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
            <SwiperSlide
              style={{
                transform: "translateY(-50px)",
                position: "relative",
                overflow: "visible",
                paddingTop: "95px",
                borderRadius: "15px",
              }}
            >
              <Stack
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: {
                    xs: "0px",
                    sm: "20px",
                  },
                  direction:"rtl"
                }}
              >
                <Stack
                  sx={{
                    color: "white",
                    gap: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    تخفیف های ویژه زمان دار
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    همین حالا سفارشتان را ثبت کنید!
                  </Typography>
                </Stack>
                <Box>
                  <img
                    style={{
                      width: "235px",
                    }}
                    src={imageDiscount}
                    alt="Discount"
                  />
                </Box>
                <Box>
                  <Button
                    sx={{
                      border: "0.1px solid #4B5563",
                      padding: "8px 18px",
                      display: "flex",
                      gap: "5px",
                      "&:hover": {
                        backgroundColor: "blue",
                        transition: "all .5s",
                        color: "white",
                      },
                    }}
                  >
                    مشاهده همه
                    <ArrowBackIcon
                      sx={{
                        fontSize: "15px",
                      }}
                    />
                  </Button>
                </Box>
              </Stack>
            </SwiperSlide>
            <Box
              sx={{
                marginTop: "200px",
                boxShadow: "0 2px 8px rgba(203, 213, 225, 0.5);",
              }}
            >
              <SwiperSlide
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "200px !important",
                  height: "480px",
                  gap: "40px",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  marginTop: "280px !important",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // اضافه کردن سایه
                }}
              >
                <Box>
                  <Stack
                    sx={{
                      flexDirection: "row",
                      gap: "5px",
                      backgroundColor: "#06b6d4",
                      width: "100px",
                      paddingY: "5px",
                      paddingX: "4px",
                      borderRadius: "20px",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                  >
                    <Timer />
                    <AccessAlarmsIcon
                      sx={{
                        fontSize: "20px",
                      }}
                    />
                  </Stack>

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
                      paddingX: "10px",
                      marginTop: "40px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#8e8e8e",
                      }}
                    >
                      apple watch s pro ff
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#374151",
                      }}
                    >
                      ساعت هوشمند اپل واچ سری 7 نسخه 35 میلی متری
                    </Typography>
                    <Stack
                      sx={{
                        gap: "5px",
                      }}
                    >
                      <Stack
                        sx={{
                          flexDirection: "row",
                          textDecoration: "line-through",
                          width: "100%",
                          justifyContent: "end",
                          marginTop: "30px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#8e8e8e",
                          }}
                        >
                          1.350.000
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "#8e8e8e",
                          }}
                        >
                          تومان
                        </Typography>
                      </Stack>
                      <Stack
                        sx={{
                          flexDirection: "row",
                          gap: "10px",
                          width: "100%",
                          justifyContent: "end",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "#0088ff",
                            padding: "0px 8px",
                            borderRadius: "20px",
                            marginLeft: "3px",
                            color: "white",
                          }}
                        >
                          <Typography>30%</Typography>
                        </Box>
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
                            1.100.000
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "600",
                            }}
                          >
                            تومان
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </SwiperSlide>
            </Box>
            <Box
              sx={{
                marginTop: "200px",
                boxShadow: "0 2px 8px rgba(203, 213, 225, 0.5);",
              }}
            >
              <SwiperSlide
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "200px !important",
                  height: "480px",
                  gap: "40px",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  marginTop: "280px !important",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // اضافه کردن سایه
                }}
              >
                <Box>
                  <Stack
                    sx={{
                      flexDirection: "row",
                      gap: "5px",
                      backgroundColor: "#06b6d4",
                      width: "100px",
                      paddingY: "5px",
                      paddingX: "4px",
                      borderRadius: "20px",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                  >
                    <Timer />
                    <AccessAlarmsIcon
                      sx={{
                        fontSize: "20px",
                      }}
                    />
                  </Stack>

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
                      paddingX: "10px",
                      marginTop: "40px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#8e8e8e",
                      }}
                    >
                      apple watch s pro ff
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#374151",
                      }}
                    >
                      ساعت هوشمند اپل واچ سری 7 نسخه 35 میلی متری
                    </Typography>
                    <Stack
                      sx={{
                        gap: "5px",
                      }}
                    >
                      <Stack
                        sx={{
                          flexDirection: "row",
                          textDecoration: "line-through",
                          width: "100%",
                          justifyContent: "end",
                          marginTop: "30px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#8e8e8e",
                          }}
                        >
                          1.350.000
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "#8e8e8e",
                          }}
                        >
                          تومان
                        </Typography>
                      </Stack>
                      <Stack
                        sx={{
                          flexDirection: "row",
                          gap: "10px",
                          width: "100%",
                          justifyContent: "end",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "#0088ff",
                            padding: "0px 8px",
                            borderRadius: "20px",
                            marginLeft: "3px",
                            color: "white",
                          }}
                        >
                          <Typography>30%</Typography>
                        </Box>
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
                            1.100.000
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "600",
                            }}
                          >
                            تومان
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </SwiperSlide>
            </Box>
            <Box
              sx={{
                marginTop: "200px",
                boxShadow: "0 2px 8px rgba(203, 213, 225, 0.5);",
              }}
            >
              <SwiperSlide
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "200px !important",
                  height: "480px",
                  gap: "40px",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  marginTop: "280px !important",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // اضافه کردن سایه
                }}
              >
                <Box>
                  <Stack
                    sx={{
                      flexDirection: "row",
                      gap: "5px",
                      backgroundColor: "#06b6d4",
                      width: "100px",
                      paddingY: "5px",
                      paddingX: "4px",
                      borderRadius: "20px",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                  >
                    <Timer />
                    <AccessAlarmsIcon
                      sx={{
                        fontSize: "20px",
                      }}
                    />
                  </Stack>

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
                      paddingX: "10px",
                      marginTop: "40px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#8e8e8e",
                      }}
                    >
                      apple watch s pro ff
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#374151",
                      }}
                    >
                      ساعت هوشمند اپل واچ سری 7 نسخه 35 میلی متری
                    </Typography>
                    <Stack
                      sx={{
                        gap: "5px",
                      }}
                    >
                      <Stack
                        sx={{
                          flexDirection: "row",
                          textDecoration: "line-through",
                          width: "100%",
                          justifyContent: "end",
                          marginTop: "30px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#8e8e8e",
                          }}
                        >
                          1.350.000
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "#8e8e8e",
                          }}
                        >
                          تومان
                        </Typography>
                      </Stack>
                      <Stack
                        sx={{
                          flexDirection: "row",
                          gap: "10px",
                          width: "100%",
                          justifyContent: "end",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "#0088ff",
                            padding: "0px 8px",
                            borderRadius: "20px",
                            marginLeft: "3px",
                            color: "white",
                          }}
                        >
                          <Typography>30%</Typography>
                        </Box>
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
                            1.100.000
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "600",
                            }}
                          >
                            تومان
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </SwiperSlide>
            </Box>
            <Box
              sx={{
                marginTop: "200px",
                boxShadow: "0 2px 8px rgba(203, 213, 225, 0.5);",
              }}
            >
              <SwiperSlide
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "200px !important",
                  height: "480px",
                  gap: "40px",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  marginTop: "280px !important",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // اضافه کردن سایه
                }}
              >
                <Box>
                  <Stack
                    sx={{
                      flexDirection: "row",
                      gap: "5px",
                      backgroundColor: "#06b6d4",
                      width: "100px",
                      paddingY: "5px",
                      paddingX: "4px",
                      borderRadius: "20px",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                  >
                    <Timer />
                    <AccessAlarmsIcon
                      sx={{
                        fontSize: "20px",
                      }}
                    />
                  </Stack>

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
                      paddingX: "10px",
                      marginTop: "40px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#8e8e8e",
                      }}
                    >
                      apple watch s pro ff
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#374151",
                      }}
                    >
                      ساعت هوشمند اپل واچ سری 7 نسخه 35 میلی متری
                    </Typography>
                    <Stack
                      sx={{
                        gap: "5px",
                      }}
                    >
                      <Stack
                        sx={{
                          flexDirection: "row",
                          textDecoration: "line-through",
                          width: "100%",
                          justifyContent: "end",
                          marginTop: "30px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#8e8e8e",
                          }}
                        >
                          1.350.000
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "#8e8e8e",
                          }}
                        >
                          تومان
                        </Typography>
                      </Stack>
                      <Stack
                        sx={{
                          flexDirection: "row",
                          gap: "10px",
                          width: "100%",
                          justifyContent: "end",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "#0088ff",
                            padding: "0px 8px",
                            borderRadius: "20px",
                            marginLeft: "3px",
                            color: "white",
                          }}
                        >
                          <Typography>30%</Typography>
                        </Box>
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
                            1.100.000
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "600",
                            }}
                          >
                            تومان
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </SwiperSlide>
            </Box>
            <Box
              sx={{
                marginTop: "200px",
                boxShadow: "0 2px 8px rgba(203, 213, 225, 0.5);",
              }}
            >
              <SwiperSlide
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "200px !important",
                  height: "480px",
                  gap: "40px",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  marginTop: "280px !important",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // اضافه کردن سایه
                }}
              >
                <Box>
                  <Stack
                    sx={{
                      flexDirection: "row",
                      gap: "5px",
                      backgroundColor: "#06b6d4",
                      width: "100px",
                      paddingY: "5px",
                      paddingX: "4px",
                      borderRadius: "20px",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                  >
                    <Timer />
                    <AccessAlarmsIcon
                      sx={{
                        fontSize: "20px",
                      }}
                    />
                  </Stack>

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
                      paddingX: "10px",
                      marginTop: "40px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#8e8e8e",
                      }}
                    >
                      apple watch s pro ff
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#374151",
                      }}
                    >
                      ساعت هوشمند اپل واچ سری 7 نسخه 35 میلی متری
                    </Typography>
                    <Stack
                      sx={{
                        gap: "5px",
                      }}
                    >
                      <Stack
                        sx={{
                          flexDirection: "row",
                          textDecoration: "line-through",
                          width: "100%",
                          justifyContent: "end",
                          marginTop: "30px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#8e8e8e",
                          }}
                        >
                          1.350.000
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "#8e8e8e",
                          }}
                        >
                          تومان
                        </Typography>
                      </Stack>
                      <Stack
                        sx={{
                          flexDirection: "row",
                          gap: "10px",
                          width: "100%",
                          justifyContent: "end",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "#0088ff",
                            padding: "0px 8px",
                            borderRadius: "20px",
                            marginLeft: "3px",
                            color: "white",
                          }}
                        >
                          <Typography>30%</Typography>
                        </Box>
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
                            1.100.000
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "600",
                            }}
                          >
                            تومان
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </SwiperSlide>
            </Box>
            <Box
              sx={{
                marginTop: "200px",
                boxShadow: "0 2px 8px rgba(203, 213, 225, 0.5);",
              }}
            >
              <SwiperSlide
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "200px !important",
                  height: "480px",
                  gap: "40px",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  marginTop: "280px !important",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // اضافه کردن سایه
                }}
              >
                <Box>
                  <Stack
                    sx={{
                      flexDirection: "row",
                      gap: "5px",
                      backgroundColor: "#06b6d4",
                      width: "100px",
                      paddingY: "5px",
                      paddingX: "4px",
                      borderRadius: "20px",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                  >
                    <Timer />
                    <AccessAlarmsIcon
                      sx={{
                        fontSize: "20px",
                      }}
                    />
                  </Stack>

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
                      paddingX: "10px",
                      marginTop: "40px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#8e8e8e",
                      }}
                    >
                      apple watch s pro ff
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#374151",
                      }}
                    >
                      ساعت هوشمند اپل واچ سری 7 نسخه 35 میلی متری
                    </Typography>
                    <Stack
                      sx={{
                        gap: "5px",
                      }}
                    >
                      <Stack
                        sx={{
                          flexDirection: "row",
                          textDecoration: "line-through",
                          width: "100%",
                          justifyContent: "end",
                          marginTop: "30px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#8e8e8e",
                          }}
                        >
                          1.350.000
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "#8e8e8e",
                          }}
                        >
                          تومان
                        </Typography>
                      </Stack>
                      <Stack
                        sx={{
                          flexDirection: "row",
                          gap: "10px",
                          width: "100%",
                          justifyContent: "end",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "#0088ff",
                            padding: "0px 8px",
                            borderRadius: "20px",
                            marginLeft: "3px",
                            color: "white",
                          }}
                        >
                          <Typography>30%</Typography>
                        </Box>
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
                            1.100.000
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "600",
                            }}
                          >
                            تومان
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </SwiperSlide>
            </Box>
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
                  height: "480px",
                  gap: "40px",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  marginTop: "280px !important",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Box>
                  <Stack
                    sx={{
                      flexDirection: "row",
                      gap: "5px",
                      backgroundColor: "#06b6d4",
                      width: "100px",
                      paddingY: "5px",
                      paddingX: "4px",
                      borderRadius: "20px",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                  >
                    <Timer />
                    <AccessAlarmsIcon
                      sx={{
                        fontSize: "20px",
                      }}
                    />
                  </Stack>

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
                      paddingX: "10px",
                      marginTop: "40px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#8e8e8e",
                      }}
                    >
                      apple watch s pro ff
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#374151",
                      }}
                    >
                      ساعت هوشمند اپل واچ سری 7 نسخه 35 میلی متری
                    </Typography>
                    <Stack
                      sx={{
                        gap: "5px",
                      }}
                    >
                      <Stack
                        sx={{
                          flexDirection: "row",
                          textDecoration: "line-through",
                          width: "100%",
                          justifyContent: "end",
                          marginTop: "30px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#8e8e8e",
                          }}
                        >
                          1.350.000
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "#8e8e8e",
                          }}
                        >
                          تومان
                        </Typography>
                      </Stack>
                      <Stack
                        sx={{
                          flexDirection: "row",
                          gap: "10px",
                          width: "100%",
                          justifyContent: "end",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "#0088ff",
                            padding: "0px 8px",
                            borderRadius: "20px",
                            marginLeft: "3px",
                            color: "white",
                          }}
                        >
                          <Typography>30%</Typography>
                        </Box>
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
                            1.100.000
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "600",
                            }}
                          >
                            تومان
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </SwiperSlide>
            </Box>
          </Swiper>
        </Box>
      </Stack>
    </>
  );
}

