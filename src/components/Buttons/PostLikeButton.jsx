import React, { useContext, useState, useEffect } from "react";
import { Favorite } from "@mui/icons-material";
import { red, grey } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../../actions/post.action";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";

const PostLikeButton = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const uid = useSelector((state) => state.userReducer._id);
  const dispatch = useDispatch();
  const [likeCount, setLikeCount] = useState(post.likers?.length);

  useEffect(() => {
    if (Array.isArray(post.likers) && post.likers.includes(uid)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [uid, post.likers]);

  useEffect(() => {
    setLikeCount(post.likers?.length);
  }, [post.likers]);

  const handleLike = () => {
    if (!liked) {
      dispatch(likePost(post._id, uid));
      setLiked(true);
      setLikeCount((prev) => prev + 1);
    } else {
      dispatch(unlikePost(post._id, uid));
      setLiked(false);
      setLikeCount((prev) => prev - 1);
    }
  };

  return (
    <Grid container sx={{ alignItems: "center" }}>
      <Favorite
        sx={{ color: liked ? red[500] : grey[500], cursor: "pointer" }}
        onClick={handleLike}
      />
      <Typography sx={{ ml: 0.5 }} variant="caption" color="text.secondary">
        {likeCount}
      </Typography>
    </Grid>
  );
};

export default PostLikeButton;
