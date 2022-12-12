import { NavLink } from "react-router-dom";
import {
  Grid,
  IconButton,
  ListItemText,
  ListItemButton,
  List,
  ListItem,
} from "@mui/material";
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
        <NavLink  to="/tutoriel" >
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
        <NavLink to="/amis">
        <ListItem disablePadding>
          <ListItemButton disableGutters component="a" href="/">
            <IconButton size="large" color="inherit">
              <PeopleAltIcon />
            </IconButton>
            <ListItemText
              sx={{
                display: { xs: "none", md: "block", lg: "block", xl: "block" },
              }}
              primary="Amis"
            />
          </ListItemButton>
        </ListItem>
        </NavLink>
        <br />
        <ListItem disablePadding>
          <ListItemButton disableGutters component="a" href="/">
            <IconButton size="large" color="inherit">
              <HolidayVillageIcon />
            </IconButton>
            <ListItemText
              sx={{
                display: { xs: "none", md: "block", lg: "block", xl: "block" },
              }}
              primary="Ecovillage"
            />
          </ListItemButton>
        </ListItem>
        <br />
        <ListItem disablePadding>
          <ListItemButton disableGutters component="a" href="/">
            <IconButton size="large" color="inherit">
              <StorefrontIcon />
            </IconButton>
            <ListItemText
              sx={{
                display: { xs: "none", md: "block", lg: "block", xl: "block" },
              }}
              primary="Marketplace"
            />
          </ListItemButton>
        </ListItem>
        <br />
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
      </List>
    </Grid>
  );
};

export default Sidebar;
