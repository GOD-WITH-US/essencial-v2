//components
import Main from "../components/Main/main";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

//Import
import React from 'react';
import { Grid } from "@mui/material";


const homeConnexion = () => {
    return (
        <Grid className="App">
        <header className="App-header">
          <Header />
        </header>
  
        <main className="App-main">
          <Main />
        </main>
  
        <footer className="App-footer">
          <Footer />
        </footer>
      </Grid>
    );
};

export default homeConnexion;