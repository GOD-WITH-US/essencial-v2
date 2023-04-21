import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOnePost } from "../../actions/post.action";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { timeAgo } from "../../components/Utils";
import { Comment } from "@mui/icons-material";
import PostLikeButton from "../../components/Buttons/PostLikeButton";
import Header from "../../components/Header/header";

const ReadOnePost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(getOnePost(id));
    const updateData = () => {
      dispatch(getOnePost(id));
    };
  }, [dispatch, id]);

  const post = useSelector((state) => state.postReducer) || {};
  const posts = post.posts || [];
  //  je récupére mes users
  const usersData = useSelector((state) => state.usersReducer);
  // Je récupère le nom de l'auteur du post
  const author =
    usersData.length > 0
      ? usersData.find((user) => user._id === post.posterId)
      : null;

  const comments = post.comments || [];

  const [commentText, setCommentText] = useState("");

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const updateData = () => {
    dispatch(getOnePost(id));
  };

  return (
    <Grid
      container
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#CAD6CB",
        minHeight: "100vh",
      }}
    >
      <Grid sx={{ p: 3 }}>
        <Header />
      </Grid>

      <Card
        sx={{ width: "90%", display: "flex", flexDirection: "column", mb: 4 }}
      >
        <CardContent>
          <Typography variant="h5" align="center" sx={{ mb: 1 }}>
            {post.title}
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              ml: 4,
              mb: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item>
              <Avatar alt={author?.pseudo} src={author?.picture} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">{author?.pseudo}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">
                {timeAgo(post.createdAt)}
              </Typography>
            </Grid>
          </Grid>
          {post.picture && (
            <CardMedia
              component="img"
              src={`${process.env.REACT_APP_API_URL}${post.picture}`}
              alt={post.title}
              sx={{ maxHeight: 400, objectFit: "contain" }}
            />
          )}
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            {post.text && (
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: "pre-wrap",
                  marginY: "1em",
                  marginX: "auto",
                  maxWidth: "50em",
                  minWidth: "10em",
                  wordWrap: "break-word",
                  textAlign: "center",
                  fontSize: "1em",
                  lineHeight: "1em",
                  wordBreak: "break-all",
                  "@media screen and (max-width: 37.5em)": {
                    textAlign: "left",
                    marginX: "1em",
                    fontSize: "0.9em",
                    lineHeight: "1.3em",
                  },
                }}
              >
                {post.text.replace(/[.!?]/g, (match) => `${match}\n`)}
              </Typography>
            )}
            <Stack alignItems="center" xs={12} sm={8}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Stack direction="row" spacing={1} alignItems="center">
                  <IconButton aria-label="Like">
                    <PostLikeButton post={post} onLike={updateData} />
                  </IconButton>
                </Stack>

                <IconButton aria-label="Comment">
                  <Comment />
                </IconButton>
                {comments && (
                  <Typography variant="h6" sx={{ mt: 4 }}>
                    Commentaires ({comments.length})
                  </Typography>
                )}
              </Stack>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ReadOnePost;
