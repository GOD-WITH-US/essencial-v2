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
const About = () => {
  return (
    <Grid item sx={{ height: "100%", border: "2px solid red" }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        m={2}
      >
        <Card sx={{ maxWidth: 345 }}>
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
              Product Owner & Lead Front
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
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
              Product Owner & Lead Front
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
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
              Product Owner & Lead Front
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
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
              Product Owner & Lead Front
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Grid>
  );
};

export default About;
