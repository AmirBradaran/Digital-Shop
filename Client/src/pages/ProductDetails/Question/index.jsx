import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
export default function Question({ textQuestion }) {
  return (
    <>
      <Box
        sx={{
          width: {
            xs: "90%",
            md: "200px",
          },
          paddingX: {
            xs: "20px",
            md: "0px",
          },
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            paddingBottom: "12px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
              paddingTop: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "11px",
                color: "52525B",
              }}
            >
              11 بهمن 1402
            </Typography>
            <Typography
              sx={{
                fontSize: "11px",
                color: "52525B",
              }}
            >
              امیررضا کریمی
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Box
            sx={{
              paddingTop: "10px",
            }}
          >
            <Typography
              sx={{
                color: "#52525B",
                fontSize: "13px",
                width: "200px",
                whiteSpace: "normal",
                wordWrap: "break-word",
              }}
            >
              {textQuestion}
            </Typography>
            <Typography
              sx={{
                fontSize: "11px",
                color: "52525B",
                paddingTop: "15px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              پاسخ
              <KeyboardArrowLeftIcon
                sx={{
                  fontSize: "20px",
                }}
              />
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
