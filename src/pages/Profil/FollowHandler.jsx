import { Box, Typography, Button } from "@mui/material";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { followUser, unfollowUser } from "../../actions/user.action";

const FollowHandler = ({ idToFollow }) => {
  // récupère l'état de l'utilisateur actuellement connecté
  const userData = useSelector((state) => state.userReducer);
  // déclare l'état isFollowed pour stocker si l'utilisateur suivi ou non
  const [isFollowed, setIsFollowed] = useState(false);
  // récupère la fonction dispatch pour appeler les actions de suivi/désabonnement d'utilisateur
  const dispatch = useDispatch();

  // gère le suivi d'utilisateur
  const handleFollow = () => {
    dispatch(followUser(userData._id, idToFollow));
    setIsFollowed(true);
  };

  // gère le désabonnement d'utilisateur
  const handleUnfollow = () => {
    dispatch(unfollowUser(userData._id, idToFollow));
    setIsFollowed(false);
  };

  // vérifie si un objet est vide
  const isEmpty = (value) => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  };

  // effectue une vérification de l'état isFollowed lors de la mise à jour de userData et idToFollow
  useEffect(() => {
    if (!isEmpty(userData) && !isEmpty(userData.following)) {
      if (userData.following.includes(idToFollow)) {
        setIsFollowed(true);
      } else {
        setIsFollowed(false);
      }
    }
  }, [userData, idToFollow]);

  return (
    <Box>
      <>
        {/* Bouton de désabonnement affiché si l'utilisateur est déjà suivi */}
        {isFollowed && (
          <Typography onClick={handleUnfollow} variant="body2">
            <Button
              component="span"
              startIcon={<CancelIcon sx={{ margin: "0 auto" }} />}
            >
            </Button>
          </Typography>
        )}
        {/* Bouton de suivi affiché si l'utilisateur n'est pas suivi */}
        {!isFollowed && (
          <Typography onClick={handleFollow} variant="body2">
            <Button component="span">
              <FollowTheSignsIcon sx={{ margin: "0 auto" }} />
            </Button>
          </Typography>
        )}
      </>
    </Box>
  );
};

export default FollowHandler;