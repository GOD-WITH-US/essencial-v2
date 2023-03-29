import * as React from "react";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import { Card, CardContent } from "@mui/material";
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

export default function CarousselCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ backgroundColor:"#a8c6b4", width:"15em",height:"18em", mx: "auto" }}>
      <CardMedia component="img" image={martin} alt="martin" height="70%" />
      <CardContent sx={{ p:0, '&:last-child': { pb: 0 }, height: '100%' }}>
        <Typography
          sx={{ fontSize: 14, pl: 0.6 }}
          color="text.primary"
          fontWeight={700}
        >
          Emmanuel
        </Typography>
        <Typography
          sx={{ fontSize: 11, pl: 1, mt: 0.2 }}
          variant="body2"
          color="text.secondary"
        >
          Alsace
        </Typography>
        <IconButton aria-label="add to favorites" sx={{ py:0 }}>
          <FavoriteIcon sx={{ fontSize: 14 }} />
        </IconButton>
      </CardContent>
    </Card>
  );
}
