import "../../styles/main.scss";
import Caroussel from "./Contents/caroussel";
import Sidebar from "./Contents/sidebar";
import Section from "./Contents/section";
const Main = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="caroussel">
        <Caroussel />
      </div>
      <div className="card-section">
        <Section />
      </div>
    </div>
  );
};

export default Main;
