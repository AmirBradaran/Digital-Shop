import React, { useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Divider,
  FormLabel,
  FormControl,
  Link,
  TextField,
  Typography,
  Stack,
  CircularProgress,
  Alert,
} from "@mui/material";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import HotToast from "../../../utils/HotToast";
import { Toaster } from "react-hot-toast";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
  },
}));

const validationSchema = Yup.object({
  tel: Yup.string()
    .matches(/^09[0-9]{9}$/, "شماره همراه نامعتبر است")
    .required("شماره همراه الزامی است"),
});

export default function Register({ setHaveAccount }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      tel: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(`${import.meta.env.VITE_BASE_API}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: values.tel,
          }),
        });

        const data = await res.json();
        console.log("API Response:", data); // Debugging API response

        if (!res.ok) {
          throw new Error(data.message || "خطا در ثبت‌نام");
        }

        HotToast("success", data.message || "ثبت‌نام با موفقیت انجام شد");
        formik.resetForm();
      } catch (err) {
        console.error("Error:", err); // Log error for debugging
        HotToast("error", err.message || "خطا در ارتباط با سرور");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="center" sx={{ direction: "rtl" }}>
        <Card variant="outlined">
          <Typography component="h1" variant="h4" fontWeight="bold">
            ثبت‌نام
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <FormControl>
              <FormLabel htmlFor="tel">شماره همراه</FormLabel>
              <TextField
                id="tel"
                name="tel"
                value={formik.values.tel}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.tel && Boolean(formik.errors.tel)}
                helperText={formik.touched.tel && formik.errors.tel}
                placeholder="شماره همراه"
                dir="rtl"
                fullWidth
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!formik.isValid || isLoading}
            >
              {isLoading ? <CircularProgress size={24} color="inherit" /> : "دریافت کد تایید"}
            </Button>

            <Typography sx={{ display: "flex", gap: "10px" }}>
              <span>اکانت دارید؟</span>
              <Link href="#" onClick={(e) => { e.preventDefault(); setHaveAccount(true); }}>
                وارد شوید
              </Link>
            </Typography>

            <Divider />
            <Typography fontSize="13px">
              ثبت‌نام شما به معنای پذیرش{" "}
              <Link sx={{ color: "#3d81e0", fontWeight: "bold", cursor: "pointer" }}>
                قوانین و مقررات
              </Link>{" "}
              هایپر استار می‌باشد.
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
      <Toaster />
    </>
  );
}
