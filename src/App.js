//Import

//pages

//components
import Caroussel from "./components/Caroussel/caroussel";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";

// data, styles et utilitaires
import'./app.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      
      <main className="App-main">
        <Caroussel />
        <Sidebar />
        <div className="App-body"></div>
        
        <div className="card-display">
          Je vais devenir l'affichage de mes cards
        </div>
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
