import {
  Avatar,
  Stack,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import brancheok from "../media/brancheok.jpg";
const Privacy = () => {
  return (
    <Grid item sx={{ height: "100%",px:5 ,pt:1}}>
        <img height={150} src={brancheok} alt="" />
        <Typography>
        <p>
                    Nous informons les visiteurs du site Web de notre politiques en matière de collecte,
                    d'utilisation et de divulgation des informations personnelles si quelqu'un décide d'utiliser notre service,
                     de reseau Essencial. <br/><br/>
                    Si vous choisissez d'utiliser notre service, vous acceptez la collecte et l'utilisation d'informations en relation
                    avec cette politique. Les informations personnelles que nous recueillons sont utilisées pour fournir et améliorer 
                    le service.<br/><br/> Nous n'utiliserons ni ne partagerons vos informations avec quiconque, sauf dans les cas décrits dans la
                     présente politique de confidentialité.<br/><br/>
                    Les termes utilisés dans la présente politique de confidentialité ont la même signification que dans nos conditions générales,
                     qui sont accessibles à l'adresse <strong><a href="#">www.essencial.eco</a></strong>.
                </p>
        </Typography>
    

    </Grid>
  );
};

export default Privacy;
