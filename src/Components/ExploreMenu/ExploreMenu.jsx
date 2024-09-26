import "./ExploreMenu.css";
import { menu_list } from "../../assets/Frontend/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore" id="explore">
      <h1>Explore Menu</h1>
      <p className="explore-text">
        Indulge in a culinary adventure by exploring our diverse restaurant
        menu. From tantalizing appetizers to exquisite entrees and decadent
        desserts, each dish promises a journey of flavors.
      </p>
      <div className="explore-list">
        {menu_list.map((el, index) => (
          <div
            onClick={() => setCategory(el.menu_name)}
            key={index}
            className="explore-list-items"
          >
            <img
              className={category === el.menu_name ? "active" : ""}
              src={el.menu_image}
              alt="menu-image"
            />
            <p>{el.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
