//Import
import { useEffect, useState } from 'react';
import AllRoutes from "./components/Routes/allroute";
import { UidContext } from "./components/AppContext";

//pages

// data, styles et utilitaires
import "./app.scss";

function App() {
  const [uid, setUid] = useState(null);
  
  
  return (
    <div className="App">
      <div className="Routes">
        <UidContext.Provider value={uid}>
          <AllRoutes />
        </UidContext.Provider>
      </div>
    </div>
  );
}

export default App;
