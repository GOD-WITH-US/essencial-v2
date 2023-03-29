import axios from 'axios';

// posts
export const GET_POSTS = "GET_POSTS";
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const ADD_POST = "ADD_POST";

export const getPosts = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/post/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_POSTS, payload: array });
        dispatch({ type: GET_ALL_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addPost = (data) => {
  console.log("addPost log ");
  console.log(data); // Vérifier que les données sont correctes ici
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/post/`, data)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: ADD_POST, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
