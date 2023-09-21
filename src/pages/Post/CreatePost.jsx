import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../actions/post.action";
import {
  Grid,
  Typography,
  Button,
  TextField,
  MenuItem,
  IconButton,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Header from "../../components/Header/header";

const CreatePost = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const [post, setPost] = useState({
    title: "",
    category: "",
    text: "",
    file: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPost({
      ...post,
      file,
    });
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", post.title);
    formData.append("category", post.category);
    formData.append("text", post.text);
    formData.append("file", post.file);
    formData.append("posterId", userData._id);
    formData.append("dateTime", new Date().toISOString());

    dispatch(addPost(formData))
      .then(() => {
        // Réinitialiser le formulaire après l'ajout de la publication
        setPost({
          title: "",
          category: "",
          text: "",
          file: null,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <Grid
      container
      spacing={6}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Grid sx={{ p: 3 }}>
        <Header />
      </Grid>

      <Grid item sx={{ textAlign: "center" }}>
        <Typography variant="h4">Créer une Publication</Typography>
      </Grid>

      <Grid
        item
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "30%",
          minWidth: "20em",
        }}
      >
        <TextField
          label="Votre titre"
          name="title"
          value={post.title}
          onChange={handleChange}
          required
          fullWidth
        />
      </Grid>

      <Grid
        item
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "30%",
          minWidth: "20em",
        }}
      >
        <TextField
    select
    label="Choisir une catégorie"
    name="category"
    value={post.category}
    onChange={handleChange}
    required
    fullWidth
  >
    <MenuItem value="">--Veuillez choisir une catégorie--</MenuItem>
    <MenuItem value="Réalisation">Réalisation</MenuItem>
    <MenuItem value="Tutoriel">Tutoriel</MenuItem>
    <MenuItem value="Alimentation">Alimentation</MenuItem>
    <MenuItem value="Jardinage">Jardinage</MenuItem>
    <MenuItem value="Elevage">Elevage</MenuItem>
    <MenuItem value="Maison">Maison</MenuItem>
    <MenuItem value="Eau">Eau</MenuItem>
    <MenuItem value="Dechets">Dechets</MenuItem>
    <MenuItem value="Energie">Energie</MenuItem>
  </TextField>
      </Grid>

      <Grid
        item
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
          minWidth: "20em",
        }}
      >
        <TextField
          label="Ajouter votre texte"
          multiline
          rows={10}
          name="text"
          value={post.text}
          onChange={handleChange}
          required
          fullWidth
        />
      </Grid>

      <Grid item>
        <IconButton color="primary" component="label">
          <AddAPhotoIcon sx={{ fontSize: "1.4em" }} />
          <input
            accept="image/*"
            type="file"
            name="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </IconButton>
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          onClick={handleSubmit}
          color="primary"
          type="button" // Pas besoin de type "submit"
          // Désactive la soumission du formulaire si les champs ne sont pas tous complétés
          disabled={!post.title || !post.category || !post.text || !post.file}
        >
          Publication
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreatePost;
