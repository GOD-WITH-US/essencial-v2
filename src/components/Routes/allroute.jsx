import About from "../../pages/about";
import Privacy from "../../pages/privacy";
import Contact from "../../pages/contact";
import { Route, Routes } from "react-router-dom";
import SignIn from "../../pages/signIn";
import SignUp from "../../pages/signUp"
const AllRoute = () => {
    return (
        <Routes>
        <Route path="/a-propos" element={About()} />
        <Route path="/confidentialité" element={Privacy()} />
        <Route path="/contact" element={Contact()} />
        <Route path="/tutoriel" element={SignIn()} />
        <Route path="/amis" element={SignUp()} />
        {/* <Route path="" element={} />
         */}
      </Routes>
    );
};

export default AllRoute;