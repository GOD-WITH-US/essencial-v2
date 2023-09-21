import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeConnexion from "../../pages/homeConnexion";
import SeeProfil from "../../pages/Profil/SeeProfil";
import About from "../../pages/About";
import Profil from "../../pages/Profil/Profil";
import Privacy from "../../pages/privacy";
import Contact from "../../pages/contact";
import SignIn from "../../pages/signIn";
import SignUp from "../../pages/signUp";
import CreatePost from "../../pages/Post/CreatePost";
import ReadOnePost from "../../pages/Post/ReadOnePost";
import Member from "../../pages/Member";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<SignIn />} />
      <Route exact path="/profil" element={<Profil />} />
      <Route exact path="/profil/:id" element={<SeeProfil />} />
      <Route exact path="/post/:id" element={<ReadOnePost />} />
      <Route exact path="/post" element={<CreatePost />} />
      <Route exact path="/home" element={<HomeConnexion />} />
      <Route exact path="/membres" element={<Member />} />
      <Route exact path="/inscription" element={<SignUp />} />
      <Route exact path="/a-propos" element={<About />} />
      <Route exact path="/confidentialité" element={<Privacy />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AllRoutes;
