import {  Grid, Box, Link } from "@mui/material";

const Footer = () => {
  return (
  
        <Grid 
        position="fixed"
        bottom={0}
      
        container
         style={{ background: "#e2c6a8" }}>
          <Grid item textAlign="center"p={1}   xs={12} sm={4} md={4}>
            <Link href="/">A Propos</Link>
          </Grid>
          <Grid item textAlign="center" p={1}  xs={12} sm={4} md={4}>
            <Link href="/">Contact</Link>
          </Grid>
          <Grid item textAlign="center" p={1}  xs={12} sm={4} md={4}>
            <Link href="/">Confidentialité</Link>
          </Grid>
        </Grid>

  );
};

export default Footer;
