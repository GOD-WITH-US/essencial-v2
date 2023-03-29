import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { uploadPictures, updateBio } from "../../actions/user.action";
import FollowHandler from "./FollowHandler";
import {
  Avatar,
  Button,
  Box,
  Grid,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem,
} from "@mui/material";
import Header from "../../components/Header/header";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

function Profil() {
  // Importer les fonctions nécessaires à partir de Redux
  const dispatch = useDispatch(); // Permet d'appeler les actions pour mettre à jour les données dans le store Redux
  const userData = useSelector((state) => state.userReducer); // Récupère les données de l'utilisateur actuel depuis le store Redux
  const usersData = useSelector((state) => state.usersReducer); // Récupère les données des autres utilisateurs depuis le store Redux

  // Définir les états locaux pour stocker les données du composant
  const [bio, setBio] = useState(localStorage.getItem("bio") || userData.bio); // Stocke la biographie de l'utilisateur actuel
  const [image, setImage] = useState(null); // Stocke l'image sélectionnée par l'utilisateur pour son avatar
  const [avatarKey, setAvatarKey] = useState(Date.now()); // Stocke une clé unique pour actualiser l'image de l'avatar de l'utilisateur
  const [openFollowingModal, setOpenFollowingModal] = useState(false); // Gère l'ouverture et la fermeture de la modale "Suivi(e)"
  const [openFollowersModal, setOpenFollowersModal] = useState(false); // Gère l'ouverture et la fermeture de la modale "Mes Abonnés"

  // Fonction pour gérer le changement de la biographie de l'utilisateur
  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  // Fonction pour gérer le changement de l'image de l'utilisateur
  const handlePictureChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0]; // Récupère le fichier sélectionné par l'utilisateur
    setImage(file); // Met à jour l'état local "image" avec le fichier sélectionné

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

  // Fonction pour gérer la mise à jour des informations de l'utilisateur
  const handleBioUpdate = () => {
    const userData = { bio }; // Stocke la nouvelle biographie de l'utilisateur dans un objet userData
    dispatch(updateBio(userData)); // Appelle l'action "updateBio" pour mettre à jour la biographie de l'utilisateur dans le store Redux
  };

  // Fonctions pour gérer l'ouverture et la fermeture des modales
  const handleFollowingModalOpen = () => {
    setOpenFollowingModal(true);
  };
  const handleFollowersModalOpen = () => {
    setOpenFollowersModal(true);
  };
  const handleFollowingModalClose = () => {
    setOpenFollowingModal(false);
  };
  const handleFollowersModalClose = () => {
    setOpenFollowersModal(false);
  };

  // Utilise useEffect pour sauvegarder la biographie de l'utilisateur dans le localStorage à chaque fois que le composant change
  useEffect(() => {
    localStorage.setItem("bio", bio);
  }, [bio]);

  return (
    <Grid
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Grid sx={{ p: 3 }}>
        <Header />
      </Grid>
      {/* Afficher l'avatar de l'utilisateur */}
      <Avatar
        variant="rounded"
        src={
          userData.picture
            ? `${process.env.REACT_APP_API_URL}${userData.picture}?key=${avatarKey}`
            : null
        }
        style={{ width: "12rem", height: "12rem", margin: "1rem" }}
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
        ></Button>
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
        {/* Bouton Suivi*/}
        <Button variant="outlined" onClick={handleFollowingModalOpen}>
          Suivi(e): {userData.following ? userData.following.length : 0}
        </Button>
        {/* Modale avec liste des utilisateurs suivis */}
        <Dialog open={openFollowingModal} onClose={handleFollowingModalClose}>
          <DialogTitle>Suivi(e)</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Liste des personnes que vous suivez.
            </DialogContentText>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gridGap: 2,
              }}
            >
              {Object.keys(usersData).map((key) => {
                const user = usersData[key];
                if (userData.following && userData.following.length > 0) {
                  for (let i = 0; i < userData.following.length; i++) {
                    if (user._id === userData.following[i]) {
                      return (
                        <Box
                          key={user._id}
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Avatar
                            src={`${process.env.REACT_APP_API_URL}${user.picture}`}
                            alt="user-pic"
                          />
                          <List>
                            <ListItem>
                              <Typography variant="h6">
                                <NavLink to={`/profil/${user._id}`}>
                                  {user.pseudo}
                                </NavLink>
                              </Typography>

                              <FollowHandler idToFollow={user._id} />
                            </ListItem>
                          </List>
                        </Box>
                      );
                    }
                  }
                }
              })}
            </Box>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleFollowingModalClose}>Fermer</Button>
          </DialogActions>
        </Dialog>
        {/* Bouton Mes abonnés*/}
        <Button variant="outlined" onClick={handleFollowersModalOpen}>
          Mes Abonnés: {userData.followers ? userData.followers.length : 0}
        </Button>
        {/* Modale avec liste des utilisateur abonnés a mon compte*/}
        <Dialog open={openFollowersModal} onClose={handleFollowersModalClose}>
          <DialogTitle>Mes Abonnés</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Liste des personnes qui vous suivent.
            </DialogContentText>

            {Object.keys(usersData).map((key) => {
              const user = usersData[key];
              if (userData.followers && userData.followers.length) {
                for (let i = 0; i < userData.followers.length; i++) {
                  if (user._id === userData.followers[i]) {
                    return (
                      <Box
                        key={user._id}
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Avatar
                          src={`${process.env.REACT_APP_API_URL}${user.picture}`}
                          alt="user-pic"
                        />
                        <List>
                          <ListItem>
                            <Typography variant="h6">
                              <NavLink to={`/profil/${user._id}`}>
                                {user.pseudo}
                              </NavLink>
                            </Typography>
                          </ListItem>
                        </List>
                      </Box>
                    );
                  }
                }
              }
            })}
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
