import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE ";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch ((err) => console.log(err));
  };
};


export const updateBio = (data) => {
  return (dispatch, getState) => {
    const { userReducer: { _id } } = getState(); // récupère l'ID de l'utilisateur actuel depuis le state
    return axios
      .put(`${process.env.REACT_APP_API_URL}api/user/${_id}`, data) // envoie une requête PUT avec les nouvelles données de l'utilisateur
      .then((res) => {
        dispatch({ type: UPDATE_BIO, payload: res.data.bio}); // met à jour le state Redux avec les nouvelles données de l'utilisateur
      })
      .catch((err) => console.log(err));
  };
};

export const uploadPictures= (data, id) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
      .then((res) => {
        return axios 
        .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
        .then((res) => {
          dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
        })
      })
     .catch ((err) => console.log(err));
  };
};

export const followUser = (followerId, idToFollow) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/user/follow/` + followerId,
      data: { idToFollow },
    
    })
      .then((res) => {
        dispatch({ type: FOLLOW_USER, payload: { idToFollow } });
      })
      .catch((err) => console.log(err));
  };
};

export const unfollowUser = (followerId, idToUnfollow) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/user/unfollow/` + followerId,
      data: { idToUnfollow },
    })
      .then((res) => {
        dispatch({ type: UNFOLLOW_USER, payload: { idToUnfollow } });
      })
      .catch((err) => console.log(err));
  };
};

