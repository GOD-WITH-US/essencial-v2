import axios from "axios";

export const UPDATE_USER = "UPDATE_USER";

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