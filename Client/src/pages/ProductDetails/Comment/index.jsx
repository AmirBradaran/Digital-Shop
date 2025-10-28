import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

export default function Comment({ likeDislike, titleComment, textComment }) {
  return (
    <>
      <Box
        sx={{
          width: {
            xs: "90%",
            md: "200px",
          },
          paddingX: {
            xs:"20px",
            md:"0px"
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
          <Typography
            sx={{
              fontSize: "17px",
              color: "#3F3F46",
              width: "200px",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            {titleComment}
          </Typography>
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
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "11px",
                  backgroundColor: "#4ADE80",
                  padding: "3px 8px",
                  borderRadius: "50px",
                }}
              >
                خریدار
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Box
            sx={{
              paddingTop: "10px",
            }}
          >
            {likeDislike === "like" ? (
              <Typography
                sx={{
                  display: "flex",
                  color: "#22C55E",
                  gap: "5px",
                  fontSize: "14px",
                  alignItems: "center",
                }}
              >
                <ThumbUpOffAltIcon
                  sx={{
                    color: "#22C55E",
                    fontSize: "22px",
                  }}
                />
                پیشنهاد میشود
              </Typography>
            ) : (
              <Typography
                sx={{
                  display: "flex",
                  gap: "5px",
                  fontSize: "14px",
                  color: "#F87171",
                  alignItems: "center",
                }}
              >
                <ThumbDownAltIcon
                  sx={{
                    color: "#F87171",
                    fontSize: "22px",
                  }}
                />
                پیشنهاد نمیشود
              </Typography>
            )}
          </Box>
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
              {textComment}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
