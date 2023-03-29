import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../actions/post.action";
import { Grid, Typography, Button, TextField, MenuItem } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Header from "../../components/Header/header";

const CreatePost = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const [userId, setUserId] = useState("");
  const [dateTime, setDateTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Créer un objet FormData pour envoyer les informations du post au serveur
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("text", text);
    formData.append("file", file);
    formData.append("posterId", userData._id);
    formData.append("dateTime", new Date().toISOString());

    console.log(formData);

    dispatch(addPost(formData))
      .then(() => {
        setTitle("");
        setCategory("");
        setText("");
        setFile("");
        setUserId("");
        setDateTime("");
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

      <Grid item xs={12}>
        <Typography variant="h4">Créer une Publication</Typography>
      </Grid>

      <Grid item xs={12} sm={12}>
        <TextField
          label="Votre titre"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
          fullWidth
          sx={{ width: "30em" }}
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <TextField
          select
          label="Choisir une catégorie"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
          fullWidth
          sx={{ width: "30em" }}
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

      <Grid item xs={12}>
        <TextField
          label="Ajouter votre texte"
          multiline
          rows={10}
          value={text}
          onChange={(event) => setText(event.target.value)}
          required
          fullWidth
          sx={{ width: "80vh" }}
        />
      </Grid>
      <Grid item xs={12}>
        <input
          accept="image/*"
          type="file"
          name="file"
          onChange={(event) => setFile(event.target.files[0])}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          color="primary"
          type="submit"
          //désactive la soumission du formulaire si les champs ne sont pas tous complété
          disabled={!title || !category || !text || !file}
        >
          Publication
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreatePost;
