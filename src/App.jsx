//Import

//pages

//components
import Main from "./components/Main/main";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

// data, styles et utilitaires
import "./app.scss";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Header />
      </header>

      <main className="App-main">
        <Main />
      </main>

      <footer className="App-footer">
        <Footer  />
      </footer>

    </div>
  );
}

export default App;
