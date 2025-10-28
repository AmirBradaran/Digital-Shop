import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import image1 from "../../../assets/1.png";
export default function ProductCategories({ categories }) {
  // const items = categories?.map((cat) => {});
  return (
    <>
      <Box
        sx={{
          marginTop: "30px",
        }}
       >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: "700",
          }}
        >
          دسته بندی محصولات
        </Typography>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
            marginTop: "10px",
            flexWrap:"wrap",
            paddingX:"30px",
            // marginBottom:"100px"
          }}
        >
          <Stack
            sx={{
              width: "120px",
              height: "175px",
              boxShadow: "2px 2px 8px rgba(203, 213, 225, 0.5)",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              gap: "20px",
              "&:hover img": {
                transform: "scale(1.2)",
                transition: "all .5s",
              },
              "&:hover ": {
                transform: "scale(1.05)",
                transition: "all .5s",
                backgroundColor: "rgb(59, 121, 220)",
              },
              "&:hover p": {
                color: "white",
              },
              transition: "transform 0.3s ease",
            }}
          >
            <img src={image1} alt="#" style={{ width: "80px" }} />
            <Typography
              sx={{
                textAlign: "center",
                color: "#71717A",
              }}
            >
              هدفون
            </Typography>
          </Stack>
          <Stack
            sx={{
              width: "120px",
              height: "175px",
              boxShadow: "2px 2px 8px rgba(203, 213, 225, 0.5)",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              gap: "20px",
              "&:hover img": {
                transform: "scale(1.2)",
                transition: "all .5s",
              },
              "&:hover ": {
                transform: "scale(1.05)",
                transition: "all .5s",
                backgroundColor: "rgb(59, 121, 220)",
              },
              "&:hover p": {
                color: "white",
              },
              transition: "transform 0.3s ease",
            }}
          >
            <img src={image1} alt="#" style={{ width: "80px" }} />
            <Typography
              sx={{
                textAlign: "center",
                color: "#71717A",
              }}
            >
              هدفون
            </Typography>
          </Stack>
          <Stack
            sx={{
              width: "120px",
              height: "175px",
              boxShadow: "2px 2px 8px rgba(203, 213, 225, 0.5)",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              gap: "20px",
              "&:hover img": {
                transform: "scale(1.2)",
                transition: "all .5s",
              },
              "&:hover ": {
                transform: "scale(1.05)",
                transition: "all .5s",
                backgroundColor: "rgb(59, 121, 220)",
              },
              "&:hover p": {
                color: "white",
              },
              transition: "transform 0.3s ease",
            }}
          >
            <img src={image1} alt="#" style={{ width: "80px" }} />
            <Typography
              sx={{
                textAlign: "center",
                color: "#71717A",
              }}
            >
              هدفون
            </Typography>
          </Stack>
          <Stack
            sx={{
              width: "120px",
              height: "175px",
              boxShadow: "2px 2px 8px rgba(203, 213, 225, 0.5)",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              gap: "20px",
              "&:hover img": {
                transform: "scale(1.2)",
                transition: "all .5s",
              },
              "&:hover ": {
                transform: "scale(1.05)",
                transition: "all .5s",
                backgroundColor: "rgb(59, 121, 220)",
              },
              "&:hover p": {
                color: "white",
              },
              transition: "transform 0.3s ease",
            }}
          >
            <img src={image1} alt="#" style={{ width: "80px" }} />
            <Typography
              sx={{
                textAlign: "center",
                color: "#71717A",
              }}
            >
              هدفون
            </Typography>
          </Stack>
          <Stack
            sx={{
              width: "120px",
              height: "175px",
              boxShadow: "2px 2px 8px rgba(203, 213, 225, 0.5)",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              gap: "20px",
              "&:hover img": {
                transform: "scale(1.2)",
                transition: "all .5s",
              },
              "&:hover ": {
                transform: "scale(1.05)",
                transition: "all .5s",
                backgroundColor: "rgb(59, 121, 220)",
              },
              "&:hover p": {
                color: "white",
              },
              transition: "transform 0.3s ease",
            }}
          >
            <img src={image1} alt="#" style={{ width: "80px" }} />
            <Typography
              sx={{
                textAlign: "center",
                color: "#71717A",
              }}
            >
              هدفون
            </Typography>
          </Stack>
          <Stack
            sx={{
              width: "120px",
              height: "175px",
              boxShadow: "2px 2px 8px rgba(203, 213, 225, 0.5)",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              gap: "20px",
              "&:hover img": {
                transform: "scale(1.2)",
                transition: "all .5s",
              },
              "&:hover ": {
                transform: "scale(1.05)",
                transition: "all .5s",
                backgroundColor: "rgb(59, 121, 220)",
              },
              "&:hover p": {
                color: "white",
              },
              transition: "transform 0.3s ease",
            }}
          >
            <img src={image1} alt="#" style={{ width: "80px" }} />
            <Typography
              sx={{
                textAlign: "center",
                color: "#71717A",
              }}
            >
              هدفون
            </Typography>
          </Stack>
          <Stack
            sx={{
              width: "120px",
              height: "175px",
              boxShadow: "2px 2px 8px rgba(203, 213, 225, 0.5)",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              gap: "20px",
              "&:hover img": {
                transform: "scale(1.2)",
                transition: "all .5s",
              },
              "&:hover ": {
                transform: "scale(1.05)",
                transition: "all .5s",
                backgroundColor: "rgb(59, 121, 220)",
              },
              "&:hover p": {
                color: "white",
              },
              transition: "transform 0.3s ease",
            }}
          >
            <img src={image1} alt="#" style={{ width: "80px" }} />
            <Typography
              sx={{
                textAlign: "center",
                color: "#71717A",
              }}
            >
              هدفون
            </Typography>
          </Stack>
          <Stack
            sx={{
              width: "120px",
              height: "175px",
              boxShadow: "2px 2px 8px rgba(203, 213, 225, 0.5)",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              gap: "20px",
              "&:hover img": {
                transform: "scale(1.2)",
                transition: "all .5s",
              },
              "&:hover ": {
                transform: "scale(1.05)",
                transition: "all .5s",
                backgroundColor: "rgb(59, 121, 220)",
              },
              "&:hover p": {
                color: "white",
              },
              transition: "transform 0.3s ease",
            }}
          >
            <img src={image1} alt="#" style={{ width: "80px" }} />
            <Typography
              sx={{
                textAlign: "center",
                color: "#71717A",
              }}
            >
              هدفون
            </Typography>
          </Stack>
          <Stack
            sx={{
              width: "120px",
              height: "175px",
              boxShadow: "2px 2px 8px rgba(203, 213, 225, 0.5)",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              gap: "20px",
              "&:hover img": {
                transform: "scale(1.2)",
                transition: "all .5s",
              },
              "&:hover ": {
                transform: "scale(1.05)",
                transition: "all .5s",
                backgroundColor: "rgb(59, 121, 220)",
              },
              "&:hover p": {
                color: "white",
              },
              transition: "transform 0.3s ease",
            }}
          >
            <img src={image1} alt="#" style={{ width: "80px" }} />
            <Typography
              sx={{
                textAlign: "center",
                color: "#71717A",
              }}
            >
              هدفون
            </Typography>
          </Stack>
          <Stack
            sx={{
              width: "120px",
              height: "175px",
              boxShadow: "2px 2px 8px rgba(203, 213, 225, 0.5)",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              gap: "20px",
              "&:hover img": {
                transform: "scale(1.2)",
                transition: "all .5s",
              },
              "&:hover ": {
                transform: "scale(1.05)",
                transition: "all .5s",
                backgroundColor: "rgb(59, 121, 220)",
              },
              "&:hover p": {
                color: "white",
              },
              transition: "transform 0.3s ease",
            }}
          >
            <img src={image1} alt="#" style={{ width: "80px" }} />
            <Typography
              sx={{
                textAlign: "center",
                color: "#71717A",
              }}
            >
              هدفون
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
