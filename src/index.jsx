// == Import dépendances
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getUsers } from "./actions/users.action";
// == Import Composants
import App from "./App";

// == Import DevTools
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
store.dispatch(getUsers());

/*  Render */
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootComponent = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const container = document.getElementById("app");
// 3. On donne container a create root en le stockant dans la const root
const root = createRoot(container);
// == 4. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(rootComponent);
