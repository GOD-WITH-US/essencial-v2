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

  return (
    <Card sx={{ m: 1}}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <CardMedia
          component="img"
          src={`${process.env.REACT_APP_API_URL}${post.picture}`}
          alt="post-pic"
          sx={{
            p: 1,
            flex: 1,
            margin: "1rem",
            alignSelf: "center",
            width: "100%",
            maxWidth:"25em",
            height: "20rem",
            objectFit: "contain",
          }}
        />

        <CardContent sx={{ flex: 2 }}>
          <Grid container mb={2} spacing={1} alignItems="center">
            <Grid item>
              <img
                src={
                  !isEmpty(usersData[0]) &&
                  usersData
                    .map((user) => {
                      if (user._id === post.posterId)
                        return `${process.env.REACT_APP_API_URL}${user.picture}`;
                      else return null;
                    })
                    .join("")
                }
                alt="avatar"
                width={48}
                height={48}
                style={{ borderRadius: "50%" }}
              />
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.primary">
                {!isEmpty(usersData[0]) &&
                  usersData
                    .map((user) => {
                      if (user._id === post.posterId) return user.pseudo;
                      else return null;
                    })
                    .join("")}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {new Date(post.createdAt).toLocaleDateString("fr-FR")}
              </Typography>
            </Grid>
          </Grid>

          <Stack
            direction="column"
            spacing={3}
            sx={{ justifyContent: "flex-end", height: "100%" }}
          >
            <Typography variant="h7" component="div">
              {post.category}
            </Typography>
            <Typography variant="h7" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.message}
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ justifyContent: "space-between", height: "100%" }}
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
                <Button sx={{ alignSelf: "flex-end" }}>Lire la suite</Button>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
}
