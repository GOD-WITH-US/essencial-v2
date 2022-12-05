import React from "react";
import {
  Grid,
  Box,
  Link,
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
        <ListItem disablePadding>
          <ListItemButton disableGutters component="a" href="/">
            <IconButton size="large" color="inherit" pl={0}>
              <HandymanIcon />
            </IconButton>
            <ListItemText 
             sx={{ display: { xs: 'none',md:'block', lg: 'block', xl: 'block' }}}
            primary="Tutoriel" />
          </ListItemButton>
        </ListItem>
        <br />
        <ListItem disablePadding>
          <ListItemButton disableGutters component="a" href="/">
            <IconButton size="large" color="inherit">
              <PeopleAltIcon />
            </IconButton>
            <ListItemText
             sx={{ display: { xs: 'none',md:'block', lg: 'block', xl: 'block' }}}
            primary="Amis" />
          </ListItemButton>
        </ListItem>
        <br />
        <ListItem disablePadding>
          <ListItemButton disableGutters component="a" href="/">
            <IconButton size="large" color="inherit">
              <HolidayVillageIcon />
            </IconButton>
            <ListItemText
             sx={{ display: { xs: 'none',md:'block', lg: 'block', xl: 'block' }}}
             primary="Ecovillage" />
          </ListItemButton>
        </ListItem>
        <br />
        <ListItem disablePadding>
          <ListItemButton disableGutters component="a" href="/">
            <IconButton size="large" color="inherit">
              <StorefrontIcon />
            </IconButton>
            <ListItemText 
            sx={{ display: { xs: 'none',md:'block', lg: 'block', xl: 'block' }}}
             primary="Marketplace" />
          </ListItemButton>
        </ListItem>
      </List>
    </Grid>
  );
};

export default Sidebar;
