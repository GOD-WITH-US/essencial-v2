import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Grid, Box, Typography } from "@mui/material";
import { uploadPictures, updateBio } from "../actions/user.action";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

function Profil() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  // Etat local pour stocker la biographie de l'utilisateur
  const [bio, setBio] = useState(localStorage.getItem("bio") || userData.bio);

  // Etat local pour stocker l'image sélectionnée par l'utilisateur
  const [image, setImage] = useState(null);

  // Etat local pour stocker la clé unique qui actualise l'image de l'avatar de l'utilisateur
  const [avatarKey, setAvatarKey] = useState(Date.now());

  // Etat local pour gérer l'ouverture et la fermeture de la modale "Suivi(e)"
  const [openFollowingModal, setOpenFollowingModal] = useState(false);
  // Etat local pour gérer l'ouverture et la fermeture de la modale "Mes Abonnés"
  const [openFollowersModal, setOpenFollowersModal] = useState(false);

  // Gérer le changement de la biographie de l'utilisateur
  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  // Gérer le changement de l'image de l'utilisateur
  const handlePictureChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setImage(file);

    // Créer un objet FormData pour envoyer les informations de l'image sélectionnée au serveur
    const formData = new FormData();
    formData.append("name", userData.pseudo);
    formData.append("userId", userData._id);
    formData.append("file", file);

    // Appeler l'action "uploadPictures" qui envoie l'image au serveur pour la stocker
    dispatch(uploadPictures(formData, userData._id))
      .then(() => {
        // Ajouter une clé unique pour actualiser la source de l'image de l'avatar
        const newKey = Date.now();
        setAvatarKey(newKey);
      })
      .catch((error) => console.log(error));
  };

  // Gérer la mise à jour des informations de l'utilisateur
  const handleBioUpdate = () => {
    const userData = { bio };
    dispatch(updateBio(userData));
  };
  // Gérer l'ouverture des modales
  const handleFollowingModalOpen = () => {
    setOpenFollowingModal(true);
  };
  const handleFollowersModalOpen = () => {
    setOpenFollowersModal(true);
  };

  // Gérer la fermeture des modales
  const handleFollowingModalClose = () => {
    setOpenFollowingModal(false);
  };
  const handleFollowersModalClose = () => {
    setOpenFollowersModal(false);
  };

  // Sauvegarder la biographie de l'utilisateur dans le localStorage
  useEffect(() => {
    localStorage.setItem("bio", bio);
  }, [bio]);

  return (
    <Grid
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* Afficher l'avatar de l'utilisateur */}
      <Avatar
        src={
          userData.picture
            ? `${process.env.REACT_APP_API_URL}${userData.picture}?key=${avatarKey}`
            : null
        }
        style={{ width: "12.5rem", height: "12.5rem", margin: "2rem" }}
      />

      {/* Créer un champ pour sélectionner une nouvelle image */}
      <input
        accept=".jpg, .jpeg, .png"
        style={{ display: "none" }}
        id="avatar-input"
        type="file"
        name="file"
        onChange={handlePictureChange}
      />
      {/* Associer la sélection de fichier à un bouton */}
      <label htmlFor="avatar-input">
        <Button
          variant="contained"
          component="span"
          startIcon={<AddAPhotoIcon />}
          sx={{ mb: 1 }}
        >
          Ajouter une photo
        </Button>
      </label>

      {/* Afficher le pseudo de l'utilisateur */}
      <Box style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        {userData.pseudo}
      </Box>

      {/* Afficher la date de création du compte de l'utilisateur */}
      <Box>
        Membre depuis le{" "}
        {new Date(userData.createdAt).toLocaleString("fr-FR", {
          day: "numeric",
          year: "numeric",
          month: "long",
        })}
      </Box>

      {/* Afficher le nombre de personnes suivies et d'abonnés */}
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginTop: "1rem",
        }}
      >
        <Button variant="outlined" onClick={handleFollowingModalOpen}>
          Suivi(e): {userData.following ? userData.following.length : 0}
        </Button>
        <Dialog open={openFollowingModal} onClose={handleFollowingModalClose}>
          <DialogTitle>Suivi(e)</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Liste des personnes que vous suivez.
            </DialogContentText>
            {<ul>
              <li>{userData.following}</li>
              </ul>
            }
          </DialogContent>
          <DialogActions>
            <Button onClick={handleFollowingModalClose}>Fermer</Button>
          </DialogActions>
        </Dialog>

        <Button variant="outlined" onClick={handleFollowersModalOpen}>
          Mes Abonnés: {userData.followers ? userData.followers.length : 0}
        </Button>
        <Dialog open={openFollowersModal} onClose={handleFollowersModalClose}>
          <DialogTitle>Mes Abonnés</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Liste des personnes qui vous suivent.
            </DialogContentText>
            {<ul>
              <li>{userData.followers}</li>
              </ul>
            }
          </DialogContent>
          <DialogActions>
            <Button onClick={handleFollowersModalClose}>Fermer</Button>
          </DialogActions>
        </Dialog>
      </Grid>

      {/* Afficher le champ de bio de l'utilisateur */}
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
        {/* Créer un champ pour modifier la bio de l'utilisateur */}
        <TextField
          variant="outlined"
          fullWidth
          value={bio}
          onChange={handleBioChange}
          multiline
          rows={4}
          style={{ marginBottom: "1rem" }}
        />
        {/* Ajouter un bouton pour enregistrer les modifications de la bio */}
        <Button variant="contained" color="primary" onClick={handleBioUpdate}>
          Enregistrer
        </Button>
      </Grid>
    </Grid>
  );
}

export default Profil;
