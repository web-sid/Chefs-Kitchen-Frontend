import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import Shimmer from "../../Shimmer/Shimmer";

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);

  // const filteredFoods =
  //   category === "All" || !foodList.length
  //     ? foodList
  //     : foodList.filter((food) => food.category === category);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Picks for you</h2>
      <div className="food-list">
        {!foodList ? (
          <Shimmer />
        ) : (
          foodList.map((el, index) => {
            return (
              <FoodItem
                key={index}
                id={el._id}
                name={el.name}
                description={el.description}
                price={el.price}
                image={el.image}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
