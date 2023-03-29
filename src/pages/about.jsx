//Import mui
import { Avatar, Stack, Grid, CardContent, Typography } from "@mui/material";
import Header from "../components/Header/header";

// data, styles et utilitaires
import manu from "../media/manu.jpeg";
import steph from "../media/stephanie.jpeg";
import arthur from "../media/arthur.jpeg";
import matt from "../media/matt.jpeg";

const About = () => {
  return (
    <Grid item sx={{ height: "100%" }}>
      <Grid sx={{p:3}}>
        <Header />
      </Grid>
      <Grid>
        <Typography variant="h6" textAlign="center" ml={10} m={2}>
          L'équipe Essencial
        </Typography>
      </Grid>
      <Stack
        justifyContent="space-evenly"
        alignItems="center"
        direction="row"
        sx={{ flexWrap: "wrap" }}
      >
        <Grid sx={{ m: 2, width: 150, height: 180 }}>
          <Avatar
            sx={{ margin: "auto", width: 80, height: 80 }}
            alt="Emmanuel"
            src={manu}
          />
          <CardContent>
            <Typography
              textAlign="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              Emmanuel
            </Typography>
            <Typography
              textAlign="center"
              variant="body2"
              color="text.secondary"
            >
              Product Owner &<br />
              Lead Front
            </Typography>
          </CardContent>
        </Grid>

        <Grid sx={{ m: 2, width: 150, height: 180 }}>
          <Avatar
            sx={{ margin: "auto", width: 80, height: 80 }}
            alt="Stéphanie"
            src={steph}
          />
          <CardContent>
            <Typography
              textAlign="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              Stéphanie
            </Typography>
            <Typography
              textAlign="center"
              variant="body2"
              color="text.secondary"
            >
              Scrum Master
            </Typography>
          </CardContent>
        </Grid>

        <Grid sx={{ m: 2, width: 150, height: 180 }}>
          <Avatar
            sx={{ margin: "auto", width: 80, height: 80 }}
            alt="Arthur"
            src={arthur}
          />
          <CardContent>
            <Typography
              textAlign="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              Arthur
            </Typography>
            <Typography
              textAlign="center"
              variant="body2"
              color="text.secondary"
            >
              Lead Back
            </Typography>
          </CardContent>
        </Grid>

        <Grid sx={{ m: 2, width: 150, height: 180 }}>
          <Avatar
            sx={{ margin: "auto", width: 80, height: 80 }}
            alt="Matthieu"
            src={matt}
          />
          <CardContent>
            <Typography
              textAlign="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              Matthieu
            </Typography>
            <Typography
              textAlign="center"
              variant="body2"
              color="text.secondary"
            >
              Git Master
            </Typography>
          </CardContent>
        </Grid>
      </Stack>
      <Grid>
        <Typography textAlign="center" ml={10} m={2}>
          Essencial a été créé en mai 2022 avec le désir d'offrir une plateforme
          d'échange destinée aux personnes <br /> souhaitant se reconnecter avec
          la nature et l'humain .
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
