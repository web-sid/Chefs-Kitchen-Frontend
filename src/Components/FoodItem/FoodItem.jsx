import { useContext } from "react";
import { assets } from "../../assets/Frontend/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="item-image-container">
        <img className="item-image" src="https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1daa9086-0f1d-4d65-86b5-4a15a36d08d4/traditional-food-around-the-world-Travlinmad.jpg" alt="" />

        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => {
              addToCart(id);
            }}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="item-counter">
            <img
              onClick={() => {
                removeFromCart(id);
              }}
              src={assets.remove_icon_red}
              alt="remove-icon"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => {
                addToCart(id);
              }}
              src={assets.add_icon_green}
              alt="add button"
            />
          </div>
        )}
      </div>
      <div className="item-info">
        <div className="item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating stars" />
        </div>
        <p className="item-description">{description}</p>
        <p className="item-price">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
