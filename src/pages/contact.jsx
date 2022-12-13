//Import mui
import {
  TextField,
  
  Grid,
  Stack,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
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
      <Grid mb={2}>
        <TextField
          sx={{ width: 208 }}
          id="contact-message"
          label="Message"
          multiline
          rows={5}
          size="small"
        />
      </Grid>
      <Grid> <Button size="small" variant="outlined" endIcon={<SendIcon />}>
        Envoyer
      </Button></Grid>
    </Grid>
  );
};

export default Contact;
