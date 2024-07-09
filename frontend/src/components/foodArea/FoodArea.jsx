import { useSelector } from "react-redux";
import FoodItem from "../foodItem/FoodItem";
import styles from "./FoodArea.module.css";

const FoodArea = () => {
  const { category } = useSelector((state) => state.states);
  const { foodList } = useSelector((state) => state.cartItems);
  return (
    <div className={styles.food_area} id="food-area">
      <h2>Popular Foods Around You</h2>
      <div className={styles.food_area_list}>
        {foodList.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                price={item.price}
                description={item.description}
                name={item.name}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodArea;
