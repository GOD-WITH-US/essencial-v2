//Import mui
import {
  TextField,
  Stack,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { maxWidth } from "@mui/system";
import brancheok from "../media/brancheok.jpg";

const Contact = () => {
  return (
    <Grid mt={1} textAlign="center">
      <img height={150} src={brancheok} alt="" />
      <Typography variant="h6">
Contactez nous pour en savoir plus sur Essencial
      </Typography>

      <Grid mb={2}>
        <TextField id="contact-name" label="Nom" type="text"  size="small"/>
      </Grid>
      <Grid mb={2}>
        <TextField id="contact-vorname" label="Prénom" type="text"  size="small"/>
      </Grid>
      <Grid mb={2}>
        <TextField  id="contact-name" label="Email" type="email"  size="small"/>
      </Grid>
      <Grid>
        <TextField
          sx={{ width: 208 }}
          id="contact-message"
          label="Message"
          multiline
          rows={5}
          size="small"
        />
      </Grid>
    </Grid>
  );
};

export default Contact;
