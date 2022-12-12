import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Grid
      position="fixed"
      bottom={0}
      container
      style={{ background: "#e2c6a8" }}
    >
      <Grid item textAlign="center" p={1} xs={12} sm={4} md={4}>
        <NavLink to="/a-propos">
          <span>A propos</span>
        </NavLink>
      </Grid>

      <Grid item textAlign="center" p={1} xs={12} sm={4} md={4}>
        <NavLink to="/contact">
          <span>Contact</span>
        </NavLink>
      </Grid>

      <Grid item textAlign="center" p={1} xs={12} sm={4} md={4}>
        <NavLink to="/confidentialité">
          <span>Confidentialité</span>
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default Footer;
