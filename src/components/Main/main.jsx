import Caroussel from "./Contents/caroussel";
import Sidebar from "./Contents/sidebar";
import Section from "./Contents/section";
import { Grid, Box, Link } from "@mui/material";

const Main = () => {
  return (
    <Grid container  spacing={0} height="88.6vh">
      <Grid container spacing={0}  width="14%" >
        <Sidebar />
      </Grid>
      <Grid container spacing={0}  width="86%">
      <Caroussel  />   
        <Section />
      </Grid>
    </Grid>
  );
};

export default Main;
