import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import { env } from "./config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ResetForm = () => {
  const theme = createTheme();
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      password: "",
    },
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post(`${env.api}/login`, values);
        if (loginData.status === 200) {
          window.localStorage.setItem(
            "app-token",
            loginData.data.userValues.token
          );
          if (loginData.data.userValues) {
            alert(loginData.data.userValues.message);
            if (loginData.data.userValues.message === "success") {
              navigate("/home");
            }
          }
        }
      } catch (err) {
        alert(err.response.data.message);
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={formik.values.Confirm}
                onChange={formik.handleChange}
                name="Confirm"
                label="Confirm Password"
                autoComplete="password"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ResetForm;
