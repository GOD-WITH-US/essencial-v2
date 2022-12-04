import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Grid, Box, Link } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import martin from "../../../media/Martin.jpg";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 130, mx: "auto" }}>
      <CardMedia component="img" height="120" image={martin} alt="martin " />
      <Grid container spacing={0}>
        <Typography
          sx={{ fontSize: 14, pl: 0.6 }}
          color="text.primary"
          fontWeight={700}
        >
          Emmanuel
        </Typography>
      </Grid>
      <Grid>
        {" "}
        <Typography
          sx={{ fontSize: 11, pl: 1, mt: 0.2 }}
          variant="body2"
          color="text.secondary"
        >
          Alsace
        </Typography>
        <IconButton aria-label="add to favorites" sx={{ py: 0, pb: 0.2 }}>
          <FavoriteIcon sx={{ fontSize: 14 }} />
        </IconButton>
      </Grid>
    </Card>
  );
}