//Import
import {  useEffect, useState } from 'react';
import AllRoutes from "./components/Routes/allroute";
import { UidContext } from "./components/AppContext";
import axios from 'axios';

//pages

// data, styles et utilitaires
import "./app.scss";

function App() {
  const [uid, setUid] = useState(null);

  useEffect (() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: "get",
          url:`${process.env.REACT_APP_API_URL}jwtid`,
          withCredentials: true
        });
        setUid(res.data);
        console.log(res);
      } catch (err) {
        console.log("No Token");
      }
    };
    
    fetchData();
   
  }, []);
  
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
