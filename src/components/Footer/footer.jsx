import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Grid
      position="fixed"
      bottom={0}
      container
      style={{ background: "#72a086" }}
    >
      <Grid item textAlign="center" p={1} xs={12} sm={4} md={4}>
        <NavLink style={{ color: "#004d40" }} to="/a-propos">
          <span>A propos</span>
        </NavLink>
      </Grid>

      <Grid item textAlign="center" p={1} xs={12} sm={4} md={4}>
        <NavLink style={{ color: "#004d40" }} to="/contact">
          <span>Contact</span>
        </NavLink>
      </Grid>

      <Grid item textAlign="center" p={1} xs={12} sm={4} md={4}>
        <NavLink style={{ color: "#004d40" }} to="/confidentialité">
          <span>Confidentialité</span>
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default Footer;
