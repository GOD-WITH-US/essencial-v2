import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <NavLink style={{ color: "#616161" }} color="inherit" to="/a-propos">
        <span> Essen'cial</span>
      </NavLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    essencial: createColor("#a2d1b6"),
  },
});

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/home ";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://zupimages.net/up/22/50/60ek.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#a2d1b6" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Se connecter
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 2.8 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                label="Adresse mail"
                name="email"
                type="text"
                autoComplete="email"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    /* switch between two green for the checkbox */
                    sx={{
                      color: "#a2d1b6",
                      "&.Mui-checked": {
                        color: "#729883",
                      },
                    }}
                  />
                }
                label="Se souvenir de moi"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="essencial"
                sx={{ mt: 3, mb: 2 }}
              >
                {"Connectez vous"}
              </Button>
              <Grid container>
                <Grid item xs>
                  <NavLink style={{ color: "#729883" }} to="#" variant="body2">
                    {"Mot de passe oublié ?"}
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink to="/inscription" style={{ color: "#729883" }}>
                    Pas encore de compte ?
                  </NavLink>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
