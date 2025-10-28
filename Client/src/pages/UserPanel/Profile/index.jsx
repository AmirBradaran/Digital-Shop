import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import DiamondIcon from "@mui/icons-material/Diamond";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
export default function Profile() {
  return (
    <>
      <Box>
        <Stack
          sx={{
            width: "100%",
          }}
        >
          <Stack
            sx={{
              padding: "20px",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#EF4444",
                gap: "5px",
                width: "23%",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              <PaymentIcon
                sx={{
                  fontSize: "35px",
                }}
              />
              <Box
                sx={{
                  color: "white",
                }}
              >
                <Typography>موجودی حساب</Typography>
                <Typography>75,000 تومان</Typography>
              </Box>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#EAB308",
                gap: "5px",
                width: "23%",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              <DiamondIcon
                sx={{
                  fontSize: "35px",
                }}
              />
              <Box
                sx={{
                  color: "white",
                }}
              >
                <Typography>امتیاز ها</Typography>
                <Typography>735 امتیاز</Typography>
              </Box>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#22C55E",
                gap: "5px",
                width: "23%",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              <ShoppingCartIcon
                sx={{
                  fontSize: "35px",
                }}
              />
              <Box
                sx={{
                  color: "white",
                }}
              >
                <Typography>سفارشت کل</Typography>
                <Typography>16</Typography>
              </Box>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#3B82F6 ",
                gap: "5px",
                width: "23%",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              <ShoppingCartIcon
                sx={{
                  fontSize: "35px",
                }}
              />
              <Box
                sx={{
                  color: "white",
                }}
              >
                <Typography>تحویل داده شده</Typography>
                <Typography>16</Typography>
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              gap: "10px",
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              سفارش های اخیر من:
            </Typography>
            <TableContainer
              component={Paper}
              style={{ direction: "rtl" }}
              elevation={0}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ fontWeight: "bold", textAlign: "right" }}
                    >
                      شماره سفارش
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", textAlign: "right" }}
                    >
                      تاریخ
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", textAlign: "right" }}
                    >
                      مبلغ
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", textAlign: "right" }}
                    >
                      وضعیت
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell style={{ textAlign: "right" }}>
                      #1f3G4t
                    </TableCell>
                    <TableCell style={{ textAlign: "right" }}>
                      1402/11/11
                    </TableCell>
                    <TableCell style={{ textAlign: "right" }}>
                      742,000 تومان
                    </TableCell>
                    <TableCell style={{ textAlign: "right", color: "#EAB308" }}>
                      درانتظار پرداخت
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ textAlign: "right" }}>
                      #2H5Y5u
                    </TableCell>
                    <TableCell style={{ textAlign: "right" }}>
                      1402/11/08
                    </TableCell>
                    <TableCell style={{ textAlign: "right" }}>
                      730,000 تومان
                    </TableCell>
                    <TableCell style={{ textAlign: "right", color: "#16A34A" }}>
                      پرداخت شده
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ textAlign: "right" }}>
                      #R34trU
                    </TableCell>
                    <TableCell style={{ textAlign: "right" }}>
                      1402/11/01
                    </TableCell>
                    <TableCell style={{ textAlign: "right" }}>
                      1,900,000 تومان
                    </TableCell>
                    <TableCell style={{ textAlign: "right", color: "#EF4444" }}>
                      لغو شده
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
