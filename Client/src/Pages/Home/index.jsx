import React, { useEffect, useState } from "react";
import HotToast from "../../utils/HotToast";
import ProductCategories from "./ProductCategories";
import ProductSlider from "./ProductSlider";
import BannerSlider from "./BannerSlider";
import { Box, Button, Stack, Typography } from "@mui/material";
import image1 from "../../assets/8.png";
import image2 from "../../assets/9.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PopularProductSlider from "./PopularProductSlider";
import image3 from "../../assets/apple.png";
import SpeedIcon from "@mui/icons-material/Speed";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BrandSlider from "./BrandSlider";
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    (async () => {
      try {
        const productRes = await fetch(`${process.env.REACT_APP_CLIENT_LINK}/products`);
        const prData = await productRes.json();
        if (prData?.status === "success") {
          setProducts(prData?.data);
        } else {
          HotToast({
            status: "error",
            message:
              "ارتباط با سرور به مشکل خورد ُ لطفا اتصال اینترنت خود را چک کنید !",
          });
        }

        const categoryRes = await fetch(`${process.env.REACT_APP_CLIENT_LINK}/categories`);
        const catData = await categoryRes.json();
        if (catData?.status === "success") {
          setCategories(catData?.data);
        } else {
          HotToast({
            status: "error",
            message:
              "ارتباط با سرور به مشکل خورد ُ لطفا اتصال اینترنت خود را چک کنید !",
          });
        }
      } catch (error) {
        HotToast({
          status: "error",
          message: "خطایی رخ داد. لطفا دوباره تلاش کنید.",
        });
      } finally {
        setLoading(false); // Set loading to false after data fetch
      }
    })();
  }, []);

  if (loading) {
    return <Typography>در حال بارگذاری...</Typography>; // Show loading message
  }

  return (
    <>
      <BannerSlider />
      <ProductCategories categories={categories} />
      <ProductSlider products={products} />
      <Stack
        sx={{
          marginTop: {
            xs: "300px",
            md: "370px",
          },
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
          gap: {
            xs: "120px",
            md: "20px",
          },
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Stack
            sx={{
              background: "linear-gradient(to right, #5DA2FA, #2867EC)",
              flexDirection: {
                xs: "column",
                xl: "row",
              },
              height: {
                xs: "440px",
                xl: "270px",
              },
              width: {
                xs: "96vw",
                md: "47.4vw",
                xl: "730px",
              },
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                display: {
                  xs: "flex",
                  xl: "block",
                },
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "370px",
                  marginTop: "-75px",
                  marginRight: "5px",
                }}
                src={image1}
                alt="#"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: {
                    xs: "40px",
                    md: "48px",
                  },
                  fontWeight: "800",
                  paddingTop: "20px",
                  textAlign: {
                    xl: "start",
                    xs: "center  ",
                  },
                  paddingLeft: {
                    xs: "0px",
                    xl: "30px",
                  },
                }}
              >
                MacBook Pro 2024
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "white",
                  textAlign: {
                    xl: "start",
                    xs: "center  ",
                  },
                }}
              >
                چرا از نسخه های جدید استفاده نمیکنی؟
              </Typography>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: {
                    xs: "center",
                    xl: "start",
                  },
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "white",
                    color: " #2867EC",
                    display: "flex",
                    gap: "10px",
                    paddingX: "75px",
                    paddingY: "10px",
                    borderRadius: "11px",
                    marginTop: "12px",
                  }}
                >
                  مشاهده محصول
                  <LocalMallIcon />
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Stack
            sx={{
              background: " linear-gradient(90deg, #ffa447, #ff7f32)",
              borderRadius: "20px",
              flexDirection: {
                xs: "column",
                xl: "row",
              },
              height: {
                xs: "440px",
                xl: "270px",
              },
              width: {
                xs: "96vw",
                md: "47.4vw",
                xl: "730px",
              },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack
              sx={{
                flexDirection: {
                  xs: "column",
                  xl: "row",
                },
                direction: {
                  xs: "rtl",
                  xl: "ltr",
                },
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: {
                    xs: "flex",
                    xl: "block",
                  },
                  justifyContent: "center",
                  marginTop: {
                    xs: "-150px",
                    xl: "-90px",
                  },
                  height: {
                    xs: "360px",
                    xl: "auto",
                  },
                }}
              >
                <img
                  style={{
                    width: "300px",
                    marginLeft: "20px",
                  }}
                  src={image2}
                  alt="#"
                />
              </Box>

              <Box
                sx={{
                  paddingLeft: {
                    xs: "0px",
                    xl: "30px",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: {
                      xs: "40px",
                      md: "48px",
                    },
                    fontWeight: "800",
                    paddingTop: {
                      xs: "0px",
                      xl: "20px",
                    },
                    textAlign: {
                      xl: "start",
                      xs: "center",
                    },
                  }}
                >
                  Gaming Case 2024
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "white",
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      xl: "end",
                    },
                    textAlign: {
                      xl: "start",
                      xs: "center",
                    },
                    direction: "rtl",
                  }}
                >
                  کیس های اسمبل شده گیمینگ با طراحی زیبا
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      xl: "start",
                    },
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "white",
                      color: "#ff7f32",
                      display: "flex",
                      gap: "10px",
                      paddingX: "75px",
                      paddingY: "10px",
                      borderRadius: "11px",
                      marginTop: "12px",
                      justifyContent: "center",
                    }}
                  >
                    مشاهده محصول
                    <LocalMallIcon />
                  </Button>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <PopularProductSlider title={"محبوب ترین محصولات"} />
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "50px",
          cursor: "pointer",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "96vw",
            maxWidth: "1475px",
            borderRadius: "25px",
            height: "220px",
            objectFit: "cover",
          }}
          src={image3}
          alt="#"
        />
      </Stack>
      <PopularProductSlider title={"جدید ترین محصولات"} />
      <Stack
        sx={{
          gap: "40px",
          marginTop: "100px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "27px",
            fontWeight: "800",
          }}
        >
          چرا هایپر استار؟
        </Typography>
        <Stack
          sx={{
            justifyContent: "center",
            flexDirection: "row",
            gap: "30px",
            paddingX: "22px",
            flexWrap: {
              xs: "wrap",
              md: "nowrap",
            },
          }}
        >
          <Box>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <SpeedIcon
                sx={{
                  fontSize: "60px",
                  color: "blue",
                }}
              />
            </Box>
            <Stack
              sx={{
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                خیلی سریعه !
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#52525B",
                }}
              >
                چون کمتر از 5 روز کاری محموله به دستت می رسه.
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <CreditCardIcon
                sx={{
                  fontSize: "60px",
                  color: "blue",
                }}
              />
            </Box>
            <Stack
              sx={{
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                قابلیت پرداخت درب منزل
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#52525B",
                }}
              >
                انتخاب روش پرداختت با خودته. آنلاین یا با کارتخوان در محل.
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <BuildIcon
                sx={{
                  fontSize: "60px",
                  color: "blue",
                }}
              />
            </Box>
            <Stack
              sx={{
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                خیلی کاربردیه
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#52525B",
                }}
              >
                میتونی هم زمان از هر چند تا فروشگاهی که میخوای خرید کنی.
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <LocalShippingIcon
                sx={{
                  fontSize: "60px",
                  color: "blue",
                }}
              />
            </Box>
            <Stack
              sx={{
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                ارسال به کل ایران
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#52525B",
                }}
              >
                هر کجای کشور پهناور ایران باشی به دستت میرسونیم.
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
      <Box>
        <BrandSlider />
      </Box>
    </>
  );
}