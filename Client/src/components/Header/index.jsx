import {
  Box,
  Button,
  Drawer,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import styled from "@emotion/styled";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HotToast from "../../utils/HotToast";
import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.css";
import BottomBar from "./BottomBar";

export default function Header() {
  const [categories, setCategories] = useState();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await fetch(process.env.CLIENT_LINK + "/categories");
      const data = await res.json();
      if (data?.status === "success") {
        setCategories(categories?.data);
      } else {
        HotToast({
          status: "error",
          message:
            "ارتباط با سرور به مشکل خورد ُ لطفا اتصال اینترنت خود را چک کنید !",
        });
      }
    })();
  }, [categories?.data]);
  const RowStack = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    alignItems: "center",
  }));
  const handleSearch = (e) => {
    e.preventDefault();
  };

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <Stack
        component={"header"}
        sx={{
          boxShadow: "0 2px 8px rgba(203, 213, 225, 0.5);",
          width: "100%",
          height: {
            xs: "80px",
            md: "120px",
          },
          position: "fixed",
          zIndex: "999",
          top: 0,
          margin: 0,
          backgroundColor: "white",
          direction:"rtl"
          // paddingTop:"20px"
        }}
      >
        <Stack
          sx={{
            alignItems: "center",
          }}
        >
          {/* First Part Of Header */}
          <RowStack
            sx={{
              justifyContent: "space-between",
              width: "95%",
              padding: "10px 0px",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon
                sx={{
                  fontSize: "30px",
                  paddingTop: "10px",
                }}
              />
            </IconButton>
            <Link to={"/"}>
              <Stack
                sx={{
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                  flex: {
                    xs: "1",
                    md: "0 1 auto",
                  },
                  marginRight: {
                    xs: "50px",
                    md: "0px",
                  },
                }}
              >
                <img className="logo" src={Logo} alt="لوگو" />
              </Stack>
            </Link>
            <RowStack>
              <TextField
                size="small"
                autoComplete=""
                placeholder="نام محصول را وارد کنید"
                sx={{
                  width: "500px",
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  borderRadius: "4px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                  background: "#F3F4F6",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      sx={{
                        md: "1px solid #60A5FA",
                        cursor: "pointer",
                        borderRadius: "4px",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transition: "all .4s",
                        "&:hover": {
                          background: "#60A5FA",
                        },
                        "&:hover svg": {
                          color: "#fff",
                        },
                      }}
                      position="end"
                    >
                      <Search sx={{ color: "#60A5FA" }} />
                    </InputAdornment>
                  ),
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    console.log("Enter key pressed");
                  }
                }}
                onChange={handleSearch}
              />
            </RowStack>
            <RowStack
              sx={{
                gap: "10px",
              }}
            >
              <Stack
                sx={{
                  width: "50px",
                  height: "50px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  transition: "all .3s",
                  cursor: "pointer",
                  position: "relative",
                  "&:hover": {
                    backgroundColor: "#E0F2FE",
                  },
                  "&::after": {
                    content: `""`,
                    position: "absolute",
                    right: "5px",
                    top: "5px",
                  },
                }}
              >
                <ShoppingCartIcon sx={{ color: "#60A5FA" }} />
              </Stack>
              <Link style={{ color: "#60A5FA" }} to={"/login-register"}>
                <Button
                  sx={{
                    gap: "10px",
                    border: "1px solid #60A5FA",
                    padding: {
                      xs: "4px 0px",
                      sm: "8px 12px",
                    },
                    transition: "all .3s",
                    "&:hover": {
                      boxShadow: "0 0 5px #60A5FA",
                    },
                    "& span": {
                      display: { xs: "none", md: "inline" },
                    },
                  }}
                >
                  <PersonIcon />
                  <span>ورود | ثبت نام</span>
                </Button>
              </Link>
            </RowStack>
          </RowStack>
          <RowStack sx={{ borderBottom: "1px solid #e5e7eb" }}>
            {/* Menu */}
          </RowStack>
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            color: "#3F3F46",
            gap: "8px",
            paddingTop: "10px",
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Link style={{color:"#3f3f46"}} to={"/product-details"}>
            <Stack
              sx={{
                flexDirection: "row",
                padding: "3px 10px ",
                cursor: "pointer",
                borderRadius: "5px ",
                gap: "5px",
                "&:hover": {
                  backgroundColor: "#e4e4e4",
                },
                "&:hover .keyboard": {
                  transform: "rotate(180deg)",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              <WidgetsIcon
                sx={{
                  color: "#3F3F46",
                }}
              />
              <Typography>فروشگاه</Typography>
              <KeyboardArrowDownIcon
                className="keyboard"
                sx={{
                  color: "#3F3F46",
                }}
              />
            </Stack>
          </Link>
          <Box
            sx={{
              padding: "3px 10px ",
              cursor: "pointer",
              borderRadius: "5px ",
              "&:hover": {
                backgroundColor: "#e4e4e4",
              },
            }}
          >
            <Typography>شگفت انگیز ها</Typography>
          </Box>
          <Box
            sx={{
              padding: "3px 10px ",
              cursor: "pointer",
              borderRadius: "5px ",
              "&:hover": {
                backgroundColor: "#e4e4e4",
              },
            }}
          >
            <Typography>پرفروش ترین ها</Typography>
          </Box>
          <Box
            sx={{
              padding: "3px 10px ",
              cursor: "pointer",
              borderRadius: "5px ",
              "&:hover": {
                backgroundColor: "#e4e4e4",
              },
            }}
          >
            <Link style={{color:"#3f3f46"}} to="/contact-us">ارتباط با ما</Link>
          </Box>
          <Box
            sx={{
              padding: "3px 10px ",
              cursor: "pointer",
              borderRadius: "5px ",
              "&:hover": {
                backgroundColor: "#e4e4e4",
              },
            }}
          >
            <Link style={{color:"#3f3f46"}} to="/about-us">درباره ما</Link>
          </Box>
        </Stack>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <Stack
            sx={{
              width: "250px",
              padding: "10px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Link style={{ color: "#60A5FA" }} to={"/login-register"}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: "20px",
                }}
              >
                <img style={{ width: "200px" }} src={Logo} alt="Logo" />
              </Box>
            </Link>
            <Box sx={{ padding: "10px 0", cursor: "pointer", marginBottom: 0 }}>
              <Typography>صفحه اصلی</Typography>
            </Box>

            <Accordion
              sx={{
                boxShadow: "none",
                marginBottom: 0,
                padding: 0,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  borderBottom: "none",
                  marginBottom: 0,
                  padding: "0",
                }}
              >
                <Typography>فروشگاه</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "10px 0", marginBottom: 0 }}>
                <Box
                  sx={{ padding: "10px 0", cursor: "pointer", marginBottom: 0 }}
                >
                  <Typography>سوپر مارکت</Typography>
                </Box>
                <Box
                  sx={{ padding: "10px 0", cursor: "pointer", marginBottom: 0 }}
                >
                  <Typography>موبایل</Typography>
                </Box>
                <Box
                  sx={{ padding: "10px 0", cursor: "pointer", marginBottom: 0 }}
                >
                  <Typography>لپ تاپ</Typography>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Box sx={{ padding: "10px 0", cursor: "pointer", marginBottom: 0 }}>
              <Typography>شگفت انگیز ها</Typography>
            </Box>

            <Box sx={{ padding: "10px 0", cursor: "pointer", marginBottom: 0 }}>
              <Typography>پرفروش ترین ها</Typography>
            </Box>

            <Box sx={{ padding: "10px 0", cursor: "pointer", marginBottom: 0 }}>
              <Typography>ارتباط با ما</Typography>
            </Box>
          </Stack>
        </Drawer>
      </Stack>

      <Stack
        sx={{
          paddingTop: {
            xs: "85px",
            md: "125px",
          },
        }}
      ></Stack>

      <BottomBar />
    </>
  );
}
