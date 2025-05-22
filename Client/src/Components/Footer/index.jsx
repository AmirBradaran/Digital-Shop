import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import digiLogo from "../../assets/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #003b85, #006eff)",
        color: "white",
        padding: { xs: 4, md: 8 },
        mt: "auto",
        direction: "rtl",
        zIndex: 1005,
        fontFamily: "IranYekan",
      }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#ffffff" }}
          >
            دیجیتال شاپ
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", opacity: 0.9 }}>
            لوازم دیجیتالی، دنیای شما را تغییر می‌دهند.
          </Typography>
        </Grid>

        <Grid item xs={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            دسترسی سریع
          </Typography>
          <List dense>
            {[
              { text: "خانه", to: "/home" },
              { text: "درباره ما", to: "/about-us" },
              { text: "ورود", to: "/auth" },
            ].map((link) => (
              <ListItem key={link.to} disableGutters>
                <Link
                  component={RouterLink}
                  to={link.to}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "1rem",
                    transition: "all 0.3s",
                    "&:hover": {
                      color: "#a6d1ff",
                      pl: 1,
                    },
                  }}
                >
                  {link.text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            راه‌های ارتباطی
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            <IconButton
              component="a"
              href="https://www.instagram.com/codemashad/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: "#ffffff22",
                "&:hover": { backgroundColor: "#ffffff44" },
              }}
            >
              <InstagramIcon sx={{ color: "white", fontSize: 28 }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://t.me/@Codemashad_021"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: "#ffffff22",
                "&:hover": { backgroundColor: "#ffffff44" },
              }}
            >
              <TelegramIcon sx={{ color: "white", fontSize: 28 }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://wa.me/09301905219"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: "#ffffff22",
                "&:hover": { backgroundColor: "#ffffff44" },
              }}
            >
              <WhatsAppIcon sx={{ color: "white", fontSize: 28 }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 5, backgroundColor: "white", opacity: 0.2 }} />

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Link
          to="/home"
          component={RouterLink}
          sx={{
            display: "inline-block",
            background: "white",
            p: 1,
            px: 3,
            borderRadius: 100,
            transition: "all 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 4px 10px rgba(255,255,255,0.2)",
            },
          }}
        >
          <img src={digiLogo} alt="logo" style={{ width: 120 }} />
        </Link>
        <Typography variant="body2" sx={{ mt: 2, color: "#d0e4ff" }}>
          تمامی حقوق محفوظ است به دیجیتال شاپ .
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
