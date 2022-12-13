import { NavLink } from "react-router-dom";
import {
  Grid,
  IconButton,
  ListItemText,
  ListItemButton,
  List,
  ListItem,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import HandymanIcon from "@mui/icons-material/Handyman";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsIcon from "@mui/icons-material/Groups";
const Sidebar = () => {
  return (
    <Grid
      item
      textAlign="center"
      pt={"10vh"}
      height="100%"
      width="100%"
      style={{ background: "#a8c6b4" }}
    >
      <List>
        <NavLink style={{ color: "#004d40" }} to="/tutoriel">
          <ListItem disablePadding>
            <ListItemButton disableGutters component="a" to="/tutoriel">
              <IconButton size="large" color="inherit" pl={0}>
                <HandymanIcon />
              </IconButton>
              <ListItemText
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                }}
                primary="Tutoriel"
              />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <br />
        <NavLink style={{ color: "#004d40" }} to="/amis">
          <ListItem disablePadding>
            <ListItemButton disableGutters component="a" href="/">
              <IconButton size="large" color="inherit">
                <PeopleAltIcon />
              </IconButton>
              <ListItemText
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                }}
                primary="Amis"
              />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <br />
        <NavLink style={{ color: "#004d40" }} to="/ecovillage">
          <ListItem disablePadding>
            <ListItemButton disableGutters component="a" href="/">
              <IconButton size="large" color="inherit">
                <HolidayVillageIcon />
              </IconButton>
              <ListItemText
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                }}
                primary="Ecovillage"
              />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <br />
        <NavLink style={{ color: "#004d40" }} to="/boutique">
          <ListItem disablePadding>
            <ListItemButton disableGutters component="a" href="/">
              <IconButton size="large" color="inherit">
                <StorefrontIcon />
              </IconButton>

              <ListItemText
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                }}
                primary="Marketplace"
              />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <br />
        <NavLink style={{ color: "#004d40" }} to="/membres">
        <ListItem disablePadding>
          <ListItemButton disableGutters component="a" href="/">
            <IconButton size="large" color="inherit">
              <GroupsIcon />
            </IconButton>
            <ListItemText
              sx={{
                display: { xs: "none", md: "block", lg: "block", xl: "block" },
              }}
              primary="Membres"
            />
          </ListItemButton>
        </ListItem>
        </NavLink>
      </List>
    </Grid>
  );
};

export default Sidebar;
