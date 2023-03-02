import axios from "axios";

export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE ";


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

export const updateUser = (userData) => {
  return (dispatch, getState) => {
    const { userReducer: { _id } } = getState(); // récupère l'ID de l'utilisateur actuel depuis le state
    return axios
      .put(`${process.env.REACT_APP_API_URL}api/user/${_id}`, userData) // envoie une requête PUT avec les nouvelles données de l'utilisateur
      .then((res) => {
        dispatch({ type: UPDATE_USER, payload: userData }); // met à jour le state Redux avec les nouvelles données de l'utilisateur
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

