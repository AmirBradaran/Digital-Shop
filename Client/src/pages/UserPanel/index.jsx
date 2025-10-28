import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MessageIcon from "@mui/icons-material/Message";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
const UserProfile = () => {
  const location = useLocation();
  const currentPage = location.pathname.split("/").pop();
  return (
    <Stack
      sx={{
        flexDirection: "row",
        paddingX: "43px",
        paddingY: "28px ",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
          width: "480px",
          height: "470px",
          borderRadius: "15px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "15px",
        }}
      >
        <Stack sx={{ alignItems: "center" }}>
          <AccountCircleIcon sx={{ fontSize: "55px", color: "#555" }} />
          <Typography sx={{ fontSize: "18px", fontWeight: "700", mt: 1 }}>
            امیررضا کریمی
          </Typography>
        </Stack>

        <List
          sx={{
            width: "100%",
            direction: "rtl",
            textAlign: "right",
          }}
        >
          <ListItem
            button
            component={Link}
            to="profile"
            sx={{
              justifyContent: "flex-end",
              paddingRight: "20px",
              display: "flex",
              gap: "5px",
              color: `${currentPage === "profile" ? "#0369A1" : "#3F3F46"}`,
              borderRight: `${
                currentPage === "profile" ? "3px solid #0369A1" : ""
              }`,
            }}
          >
            <PersonIcon />
            <ListItemText
              primary="پروفایل"
              sx={{ textAlign: "right", fontSize: "15px" }}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="orders"
            sx={{
              justifyContent: "flex-end",
              paddingRight: "20px",
              display: "flex",
              gap: "5px",
              color: `${currentPage === "orders" ? "#0369A1" : "#3F3F46"}`,
              borderRight: `${
                currentPage === "orders" ? "3px solid #0369A1" : ""
              }`,
            }}
          >
            <ShoppingCartIcon />
            <ListItemText
              primary="سفارش ها"
              sx={{ textAlign: "right", fontSize: "15px" }}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="messages"
            sx={{
              justifyContent: "flex-end",
              paddingRight: "20px",
              display: "flex",
              gap: "5px",
              color: `${currentPage === "messages" ? "#0369A1" : "#3F3F46"}`,
              borderRight: `${
                currentPage === "messages" ? "3px solid #0369A1" : ""
              }`,
            }}
          >
            <MessageIcon />
            <ListItemText
              primary="پیام ها"
              sx={{ textAlign: "right", fontSize: "15px" }}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="location"
            sx={{
              justifyContent: "flex-end",
              paddingRight: "20px",
              display: "flex",
              gap: "5px",
              color: `${currentPage === "location" ? "#0369A1" : "#3F3F46"}`,
              borderRight: `${
                currentPage === "location" ? "3px solid #0369A1" : ""
              }`,
            }}
          >
            <LocationOnIcon />
            <ListItemText
              primary="آدرس های من"
              sx={{ textAlign: "right", fontSize: "15px" }}
            />
          </ListItem>
          <ListItem
            button
            sx={{
              justifyContent: "flex-end",
              paddingRight: "20px",
              display: "flex",
              gap: "5px",
              color: "red",
              cursor: "pointer",
            }}
          >
            <ExitToAppIcon />
            <ListItemText
              primary="خروج"
              sx={{ textAlign: "right", fontSize: "15px" }}
            />
          </ListItem>
        </List>
      </Box>

      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
          borderRadius: "15px",
          width: "100%",
        }}
      >
        <Outlet />
      </Box>
    </Stack>
  );
};

export default UserProfile;
