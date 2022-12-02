import {  Grid, Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Box>
        <Grid container spacing={0} style={{ background: "#a8c6b4" }}>
          <Grid item textAlign="center" p={1}   xs={12} sm={4} md={4}>
            <Link href="/">A Propos</Link>
          </Grid>
          <Grid item textAlign="center" p={1}  xs={12} sm={4} md={4}>
            <Link href="/">Contact</Link>
          </Grid>
          <Grid item textAlign="center" p={1}  xs={12} sm={4} md={4}>
            <Link href="/">Confidencialité</Link>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
