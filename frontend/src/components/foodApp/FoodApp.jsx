import { assets } from "../../assets/assets";
import styles from "./FoodApp.module.css";

const FoodApp = () => {
  return (
    <div className={styles.food_app} id="food-app">
      <p>
        Experience The Best by downloading <br />
        EatNow App
      </p>
      <div className={styles.food_app_platforms}>
        <img src={assets.play_store} alt="play-store" />
        <img src={assets.app_store} alt="app-store" />
      </div>
    </div>
  );
};

export default FoodApp;
