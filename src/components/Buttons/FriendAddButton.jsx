import React, { useState, useEffect } from "react";
import { IconButton, Typography, Grid } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { red, grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../actions/user.action";

const FriendAddButton = ({ targetUserId }) => {
    // État pour suivre ou ne pas suivre l'utilisateur cible
    const [isFollowing, setIsFollowing] = useState(false);

    // ID de l'utilisateur connecté
    const loggedInUserId = useSelector((state) => state.userReducer._id);

    // Données des utilisateurs stockées dans le Redux store
    const usersData = useSelector((state) => state.usersReducer);

    // Dispatcher Redux pour gérer les actions de suivi et de désabonnement
    const dispatch = useDispatch();

    // Effet pour vérifier si l'utilisateur connecté suit l'utilisateur cible
    useEffect(() => {
        console.log("Valeur de targetUserId:", targetUserId);
        // Fonction pour vérifier si l'utilisateur est abonné à l'utilisateur cible
        const isUserFollowing = checkIfUserIsFollowing(loggedInUserId, targetUserId, usersData);

        // Met à jour l'état en fonction du résultat
        setIsFollowing(isUserFollowing);
    }, [loggedInUserId, targetUserId, usersData]);

    // Fonction pour basculer entre le suivi et le désabonnement
    const toggleFollow = () => {
        if (isFollowing) {
            // Désabonne l'utilisateur cible
            dispatch(unfollowUser(loggedInUserId, targetUserId));
            setIsFollowing(false);
        } else {
            // Abonne l'utilisateur cible
            dispatch(followUser(loggedInUserId, targetUserId));
            setIsFollowing(true);
        }
    };

    // Fonction pour vérifier si l'utilisateur est abonné à l'utilisateur cible
    const checkIfUserIsFollowing = (loggedInUserId, targetUserId, usersData) => {
        // Recherche de l'utilisateur connecté et de l'utilisateur cible dans les données des utilisateurs
        const loggedInUser = usersData.find((user) => user._id === loggedInUserId);
        const targetUser = usersData.find((user) => user._id === targetUserId);

        // Si l'utilisateur connecté ou l'utilisateur cible n'est pas trouvé, retourne false
        if (!loggedInUser || !targetUser) {
            return false;
        }

        // Vérifie si l'utilisateur connecté suit l'utilisateur cible
        return loggedInUser.following.includes(targetUserId);
    };

    return (
        <Grid container sx={{ alignItems: "center" }}>
            {/* Bouton pour suivre ou ne pas suivre avec un cœur qui change de couleur */}
            <Favorite
                sx={{ color: isFollowing ? red[500] : grey[500], cursor: "pointer" }}
                onClick={toggleFollow}
            />
        </Grid>
    );
};

export default FriendAddButton;
