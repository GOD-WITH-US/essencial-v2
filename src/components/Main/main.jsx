import { Grid } from "@mui/material";
import Sidebar from "./Contents/Sidebar";
import Caroussel from "./Contents/Caroussel";
import Thread from "./Contents/Thread";

const Main = () => {
  return (
    <Grid container spacing={0}>
      <Grid item sx={{ background: "#a8c6b4" }} sm={1} xs={2} md={2}>
        <Sidebar />
      </Grid>
      <Grid item sm={11} xs={10} md={10}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Caroussel />
          </Grid>
          <Grid item xs={12}>
            <Thread />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
