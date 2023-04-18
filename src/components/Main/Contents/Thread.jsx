import { Grid, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { getPosts } from "../../../actions/post.action";

//pages
import PostCard from "./PostCard";

const Thread = () => {
  const [loadPost, setloadPost] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts());
      setloadPost(false);
    }
  }, [loadPost, dispatch]);

  return (
    <Box sx={{ background: "#d8f1e2" }}>
      <Grid
        container
        spacing={1}
        sx={{
          paddingBottom: {
            xs: "7.5em",
            sm: "3em",
            md: "3em",
            lg: "3em",
            xl: "3em",
          },
        }}
      >
        {Array.isArray(posts) &&
          posts.length > 0 &&
          posts.map((post) => (
            <Grid
              item
              key={post._id}
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={10}
              sx={{ marginX: "auto" }}
            >
              <PostCard post={post} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Thread;
