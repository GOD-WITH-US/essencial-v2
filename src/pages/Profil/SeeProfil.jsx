import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

function SeeProfil() {
  const { id } = useParams(); // Récupérez l'ID de l'URL avec useParams
  const usersData = useSelector((state) => state.usersReducer);

  // Recherchez l'utilisateur correspondant à l'ID dans les données des utilisateurs
  const user = usersData.find((userData) => userData._id === id);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <Grid
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* Afficher l'avatar de l'utilisateur */}
      <Avatar
        variant="rounded"
        src={
          user.picture
            ? `${process.env.REACT_APP_API_URL}${user.picture}`
            : null
        }
        style={{ width: "12rem", height: "12rem", margin: "1rem" }}
      />

      {/* Afficher le pseudo de l'utilisateur */}
      <Box style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        {user.pseudo}
      </Box>

      {/* Afficher la date de création du compte de l'utilisateur */}
      <Box>
        Membre depuis le{" "}
        {new Date(user.createdAt).toLocaleString("fr-FR", {
          day: "numeric",
          year: "numeric",
          month: "long",
        })}
      </Box>

      {/* Afficher la bio de l'utilisateur */}
      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "70%",
          marginTop: "1rem",
        }}
      >
        <Box style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Bio</Box>
        <Typography variant="body1">{user.bio}</Typography>
      </Grid>
    </Grid>
  );
}

export default SeeProfil;
