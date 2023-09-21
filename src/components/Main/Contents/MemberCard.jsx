import React from "react";
import { Card, CardContent, CardActions, IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import FriendAddButton from "../../Buttons/FriendAddButton";

export default function MemberCard({ user, currentUserUid }) {
  // Vérifie si l'utilisateur correspond à l'utilisateur actuel
  if (user._id === currentUserUid) {
    // Si c'est le cas, retourne null pour exclure la carte
    return null;
  }

  return (
    <Card sx={{ backgroundColor: "#a8c6b4", width: "15em", height: "18em", mx: "auto", marginBottom: "1em" }}>
      <CardMedia
        component="img"
        src={`${process.env.REACT_APP_API_URL}${user.picture}`}
        alt={user.pseudo}
        height="70%"
      />

      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 }, height: '100%' }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          pl={0.6}
          color="text.primary"
        >
          <NavLink to={`/profil/${user._id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            {user.pseudo}
          </NavLink>
        </Typography>
        <Typography
          variant="body2"
          pl={1}
          mt={0.2}
          color="text.secondary"
        >
          {user.location}
        </Typography>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FriendAddButton targetUserId={user._id} />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}
