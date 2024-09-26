import { assets } from "../../assets/Frontend/assets";
import "./Download.css";

const Download = () => {
  return (
    <div className="app-download" id="app-download">
      <p>Download Chef's Kitchen App</p>
      <div className="download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default Download;
