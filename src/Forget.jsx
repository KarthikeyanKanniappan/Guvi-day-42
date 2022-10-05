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
const Forget = () => {
  const theme = createTheme();
  let navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        let loginData = await axios.post(`${env.api}/password`, values);
        if (loginData.status === 200) {
          alert("Check Your Email Reset link sent");
        }
        //   window.localStorage.setItem(
        //     "app-token",
        //     loginData.data.userValues.token
        //   );
        // if (loginData.data.userValues) {
        //   alert(loginData.data.userValues.message);
        //   if (loginData.data.userValues.message === "success") {
        //     navigate("/home");
        //   }
        // }
        // }
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
            Find Your Account
          </Typography>
          <Divider />
          <hr />
          <Typography component="p" variant="p">
            Please enter your email address or mobile number to search for your
            account
          </Typography>
          <hr />
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                label="Enter Email address"
                id="fullWidth"
              />
              <Box
                sx={{
                  marginTop: 4,
                }}
              />
              <Button type="submit" variant="contained" size="medium">
                Reset Password
              </Button>
              <Button
                sx={{
                  marginLeft: 4,
                }}
                variant="contained"
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Forget;
