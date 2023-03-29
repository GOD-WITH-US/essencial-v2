import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Stack, Button, IconButton } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { isEmpty } from "../../Utils";
import postReducer from "../../../reducers/post.reducer";

export default function PostCard({ post }) {
  /* je récupére mes posts */
  const usersData = useSelector((state) => state.usersReducer);
  const postsData = useSelector((state) => state.postReducer);
  /* je récupére les infos de mon user connecté  */
  const userData = useSelector((state) => state.userReducer);
  
  const [truncatedText, setTruncatedText] = useState("");

  useEffect(() => {
    if (post.text && post.text.length > 400) {
      setTruncatedText(post.text.slice(0, 400) + "...");
    } else {
      setTruncatedText(post.text);
    }
  }, [post.text]);

  return (
    <Card sx={{ m: 1 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            src={`${process.env.REACT_APP_API_URL}${post.picture}`}
            alt="post-pic"
            sx={{
              mr: "1rem",
              mt: "1rem",
              width: "100%",
              height: "20rem",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent sx={{ height: "100%" }}>
            <Grid container justifyContent="flex-end" mb={2}>
              <Grid item>
                <Button variant="contained" sx={{ backgroundColor: "#729883" }}>
                  {post.category}
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Typography variant="h7" component="div">
                  {post.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  {truncatedText}
                </Typography>
              </Grid>
              <Grid item>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ justifyContent: "space-between", marginTop: 20 }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton>
                      <CommentIcon />
                    </IconButton>
                    <Typography variant="caption" color="text.secondary">
                      {post.comments.length}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton>
                      <FavoriteIcon />
                    </IconButton>
                    <Typography variant="caption" color="text.secondary">
                      {post.likers.length}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Button sx={{ alignSelf: "flex-end" }}>
                      Lire la suite
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
