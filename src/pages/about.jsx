/* import about from "../media/about.png" */
import {
  Avatar,
  Stack,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import manu from "../media/manu.jpeg";
import steph from "../media/stephanie.jpeg";
import arthur from "../media/arthur.jpeg";
import matt from "../media/matt.jpeg";

const About = () => {
  return (
    <Grid item sx={{ height: "100%", border: "2px solid red",pb:25 }}>
      <Stack
        justifyContent="space-evenly"
        alignItems="center"
        direction="row"
        sx={{ flexWrap: 'wrap'}}
      >
        <Card sx={{ m:2, width:150, height:180 }}>
          <Avatar
            sx={{ margin: "auto", width: 80, height: 80 }}
            alt="Emmanuel"
            src={manu}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Emmanuel
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Product Owner &<br />Lead Front
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{m:2,  width:150, height:180 }}>
          <Avatar
            sx={{ margin: "auto", width: 80, height: 80 }}
            alt="Stéphanie"
            src={steph}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Stéphanie
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Scrum Master
            </Typography>
          </CardContent>
        </Card>


        <Card sx={{m:2,  width:150, height:180 }}>
          <Avatar
            sx={{ margin: "auto", width: 80, height: 80 }}
            alt="Arthur"
            src={arthur}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Arthur
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lead Back
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{m:2, width:150, height:180 }}>
          <Avatar
            sx={{ margin: "auto", width: 80, height: 80 }}
            alt="Matthieu"
            src={matt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Matthieu
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Git Master
            </Typography>
          </CardContent>
        </Card>


      </Stack>
      <Grid>
        <Typography ml={10}  m={2}>
          Essencial a été créé en mai 2022 avec le désir d'offrir une plateforme
          d'échange au personnes souhaitant se reconnecter avec la nature et
          l'humain .
        </Typography>
      </Grid>
      </Grid>
  );
};

export default About;
