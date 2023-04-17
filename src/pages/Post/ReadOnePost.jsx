import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOnePost } from '../actions/post.action';

const ReadOnePost = ({ match }) => {
  const dispatch = useDispatch();

  // On récupère le post sélectionné grâce à son ID dans l'URL
  const postId = match.params.id;

  // On récupère le post depuis le store grâce à son ID
  const post = useSelector((state) => state.postReducer);

  // On utilise useEffect pour déclencher l'action getOnePost lors du chargement de la page
  useEffect(() => {
    dispatch(getOnePost(postId));
  }, [dispatch, postId]);

  // On affiche les informations du post dans le composant
  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.picture} alt={post.title} />
      <p>Catégorie : {post.category}</p>
      <p>Date de création : {new Date(post.createdAt).toLocaleDateString()}</p>
      <p>Auteur : {post.posterId}</p>
      <p>{post.text}</p>
    </div>
  );
};

export default ReadOnePost;