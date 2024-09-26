import { assets } from "../../assets/Frontend/assets";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Having Cravings?</h2>
        <p>
          Embark on a flavorful journey through our restaurant menu, where each
          dish unveils a tale of culinary mastery. From delectable appetizers to
          exquisite entrees and delightful desserts, explore a world of taste
          sensations waiting to enchant your palate and create lasting dining
          memories.
        </p>

        <button>View Menu</button>
      </div>
      <div>
        <img className="hero" src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
