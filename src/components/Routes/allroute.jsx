import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeConnexion from "../../pages/homeConnexion";
import About from "../../pages/about";
import Profil from "../../pages/Profil/profil";
import Privacy from "../../pages/privacy";
import Contact from "../../pages/contact";
import SignIn from "../../pages/signIn";
import SignUp from "../../pages/signUp";
import CreatePost from "../../pages/Post/CreatePost";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<SignIn />} />
      <Route exact path="/profil" element={<Profil />} />
      <Route exact path="/post" element={<CreatePost />} />
      <Route exact path="/home" element={<HomeConnexion />} />
      <Route exact path="/inscription" element={<SignUp />} />
      <Route exact path="/a-propos" element={<About />} />
      <Route exact path="/confidentialité" element={<Privacy />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AllRoutes;
