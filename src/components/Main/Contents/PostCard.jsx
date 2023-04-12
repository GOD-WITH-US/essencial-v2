import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Stack, Button, IconButton } from "@mui/material";
import { Comment } from "@mui/icons-material";
import { useSelector } from "react-redux";
import PostLikeButton from "../../Buttons/PostLikeButton";

export default function PostCard({ post }) {
  /* je récupére mes users */
  const usersData = useSelector((state) => state.usersReducer);
  /* je récupére le nom de l'auteur du post */
  const author = usersData.find((user) => user._id === post.posterId);

  const [truncatedText, setTruncatedText] = useState(
    post.text ? post.text.slice(0, 400) + "..." : ""
  );

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
                  Créer par : {author.pseudo}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" component="div">
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
                    <IconButton  aria-label="Comment">
                      <Comment />
                    </IconButton>
                    <Typography variant="caption" color="text.secondary">
                      {post.comments.length}
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton  aria-label="Like">
                      <PostLikeButton post={post}/>
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
