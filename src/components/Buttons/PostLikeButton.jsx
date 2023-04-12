import React, {useContext, useState, useEffect } from "react";
import {Favorite} from "@mui/icons-material";
import {UidContext} from "../AppContext";
import { red, grey } from '@mui/material/colors';
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../../actions/post.action";

const PostLikeButton = ({post}) => {
    const [liked, setLiked] = useState(false);
    const uid = useContext(UidContext);
    const dispatch = useDispatch();

    useEffect(() => {
        if (post.likers.includes(uid)) {
            setLiked(true);
        } else {
            setLiked(false);
        }
    }, [uid, post.likers]);

    const handleLike = () => {
        if (!liked) {
            dispatch(likePost(post._id, uid));
            setLiked(true);
        } else {
            dispatch(unlikePost(post._id, uid));
            setLiked(false);
        }
    }

    return (
        <div>
            <Favorite sx={{color: liked ? red[500] : grey[500], cursor: 'pointer'}} onClick={handleLike}/>
        </div>
    );
};

export default PostLikeButton;
