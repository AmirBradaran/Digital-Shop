import {
  Box,
  Button,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import image1 from "../../assets/symbol-01.png";
import image2 from "../../assets/symbol-02.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useAuth } from "../../utils/AuthContext";

export default function Footer() {
  const { logout } = useAuth();

  return (
    <>
      <Box
        sx={{
          marginTop: "40px",
          direction: "rtl",
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              backgroundColor: "#316BEA",
              width: "91vw ",
              height: {
                xs: "300px",
                lg: "230px",
              },
              zIndex: "2",
              borderRadius: "15px",
              justifyContent: {
                xs: "center",
                lg: "start",
              },
              alignItems: {
                xs: "center",
                lg: "normal",
              },
            }}
          >
            <Box>
              <Stack>
                <Stack
                  sx={{
                    color: "white",
                    position: {
                      xs: "static",
                      lg: "absolute",
                    },
                    marginTop: {
                      xs: "0px",
                      lg: "70px",
                    },
                    paddingRight: {
                      xs: "0px",
                      lg: "40px",
                    },
                    gap: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "25px",
                        lg: "33px",
                      },
                      fontWeight: "700",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    بهترین خرید رو تجربه کن!
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "15px",
                        lg: "19px",
                      },
                    }}
                  >
                    به مشتریان خود خدمات شگفت انگیزی ارائه می دهیم.
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            <Stack
              sx={{
                justifyContent: {
                  xs: "center",
                  lg: "end",
                },
                flexDirection: "row",
                paddingLeft: {
                  xs: "0px",
                  lg: "26px",
                },
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: "70vw",
                    lg: "44vw",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#F9FAFB",
                    fontSize: {
                      xs: "15px",
                      lg: "17px",
                    },
                  }}
                >
                  برای داشتن مشتریان همیشه راضی، کنترل کیفی دقیق لازم داریم.
                  ارتباط عالی با مشتریان یکی از ویژگی های ماست. ما دائما درحال
                  بررسی کیفیت محصولات هستیم تا مشتریانمان بهترین خدمات را دریافت
                  کنند.
                </Typography>
                <Button
                  sx={{
                    marginTop: "15px",
                    color: "#1F2937",
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                >
                  مشاهده محصولات
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Stack>

        <Box
          sx={{
            backgroundColor: "black",
            height: {
              xs: "750px",
              md: "700px",
              lg: "405px",
            },
            marginTop: "-110px",
            zIndex: "1",
          }}
        >
          <Stack
            sx={{
              flexDirection: {
                xs: "column",
                lg: "row",
              },
              alignItems: {
                xs: "start",
                lg: "center",
              },
              height: {
                xs: "auto",
                lg: "100%",
              },
              justifyContent: "space-between ",
              paddingX: {
                xs: "0px",
                lg: "100px",
              },
            }}
          >
            <Stack
              sx={{
                flexDirection: {
                  xs: "column",
                  lg: "row",
                },
                alignItems: {
                  xs: "start",
                  lg: "center",
                },
                height: "100%",
                justifyContent: "space-between ",
              }}
            >
              <List
                sx={{
                  color: "#6B7280",
                  marginTop: {
                    xs: "130px",
                    lg: "65px ",
                  },
                }}
              >
                <ListItem
                  sx={{
                    fontSize: "20px",
                    color: "#0EA5E9",
                    fontWeight: "600",
                  }}
                >
                  دسترسی سریع
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      color: "#0EA5E9",
                      cursor: "pointer",
                    },
                  }}
                >
                  تعرفه ها
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      color: "#0EA5E9",
                      cursor: "pointer",
                    },
                  }}
                >
                  سوالات متداول
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      color: "#0EA5E9",
                      cursor: "pointer",
                    },
                  }}
                >
                  تماس با ما
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      color: "#0EA5E9",
                      cursor: "pointer",
                    },
                  }}
                >
                  درباره ما
                </ListItem>
              </List>

              <List
                sx={{
                  color: "#6B7280",
                  marginTop: {
                    xs: "0px",
                    lg: "40px",
                  },
                }}
              >
                <ListItem
                  sx={{
                    fontSize: "20px",
                    color: "#0EA5E9",
                    fontWeight: "600",
                  }}
                >
                  راه های ارتباطی
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      color: "#0EA5E9",
                      cursor: "pointer",
                    },
                    fontSize: "14px",
                  }}
                >
                  <LocationOnIcon />
                  تهران - خیابان دماوند - خروجی اول - مجموعه هایپر استار
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      color: "#0EA5E9",
                      cursor: "pointer",
                    },
                  }}
                >
                  <AlternateEmailIcon />
                  example@gmail.com
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      color: "#0EA5E9",
                      cursor: "pointer",
                    },
                  }}
                >
                  <PhoneAndroidIcon />
                  0912345678
                </ListItem>
              </List>
            </Stack>

            <Stack
              sx={{
                flexDirection: "row ",
                gap: "20px",
                marginTop: {
                  xs: "20px",
                  lg: "40px",
                },
                justifyContent: {
                  xs: "center",
                  lg: "start",
                },
                alignItems: {
                  xs: "center",
                  lg: "start",
                },
                width: {
                  xs: "100%",
                  lg: "auto",
                },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  height: "120px",
                }}
              >
                <img
                  style={{
                    width: "120px",
                  }}
                  src={image1}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  height: "120px",
                }}
              >
                <img
                  style={{
                    width: "120px",
                  }}
                  src={image2}
                  alt=""
                />
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
