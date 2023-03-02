import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Button, TextField } from "@mui/material";
import { Grid, Box, Typography } from "@mui/material";
import { updateUser, uploadPictures } from "../actions/user.action";

function Profil() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const [bio, setBio] = useState(localStorage.getItem("bio") || userData.bio);
  const [image, setImage] = useState(null);
  const [avatarKey, setAvatarKey] = useState(Date.now());

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handlePictureChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setImage(file);
  
    const formData = new FormData();
    formData.append("name", userData.pseudo);
    formData.append("userId", userData._id);
    formData.append("file", file);
  
    dispatch(uploadPictures(formData, userData._id))
      .then(() => {
        // Ajouter une clé unique pour actualiser la source de l'image
        const newKey = Date.now();
        setAvatarKey(newKey);
      })
      .catch((error) => console.log(error));
  };

  const handleUpdateUser = () => {
    const userData = { bio };
    dispatch(updateUser(userData));
  };
 
  useEffect(() => {
    localStorage.setItem("bio", bio);
  }, [bio]);
  return (
    <Grid
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
<Avatar
  src={userData.picture ? `${process.env.REACT_APP_API_URL}${userData.picture}?key=${avatarKey}` : null}
  style={{ width: "12.5rem", height: "12.5rem", margin: "2rem" }}
/>

      <input
        accept=".jpg, .jpeg, .png"
        style={{ display: "none" }}
        id="avatar-input"
        type="file"
        name="file"
        onChange={handlePictureChange}
      />
      <label htmlFor="avatar-input">
        <Button
          variant="contained"
          component="span"
          style={{ marginBottom: "1rem" }}
        >
          Changer d'image
        </Button>
      </label>
      <Box style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        {userData.pseudo}
      </Box>
      <Box>Membre depuis {new Date(userData.createdAt).getFullYear()}</Box>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginTop: "1rem",
        }}
      >
        <Box style={{ fontWeight: "bold" }}>
          Amis: {userData.following ? userData.following.length : 0}
        </Box>
        <Box style={{ fontWeight: "bold" }}>
          Abonnés: {userData.followers ? userData.followers.length : 0}
        </Box>
      </Grid>

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
        <TextField
          variant="outlined"
          fullWidth
          value={bio}
          onChange={handleBioChange}
          multiline
          rows={4}
          style={{ marginBottom: "1rem" }}
        />
        <Button variant="contained" color="primary" onClick={handleUpdateUser}>
          Enregistrer
        </Button>
      </Grid>
    </Grid>
  );
}

export default Profil;
