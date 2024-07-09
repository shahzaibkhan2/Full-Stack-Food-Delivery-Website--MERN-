import axios from "axios";
import { assets } from "../../assets/assets";
import { envVars } from "../../config/config";
import { cartItemsActions } from "../../store/features/cartItemsSlice";
import styles from "./FoodItem.module.css";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { RiShoppingBasketFill } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";

const FoodItem = ({ id, price, name, description, image }) => {
  const { cartItems } = useSelector((state) => state.cartItems);
  const { accessToken } = useSelector((state) => state.states);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.food_item} fadeIn_animation`}>
      <div className={styles.food_item_img_box}>
        <img
          className={styles.food_item_img}
          src={`${envVars.serverBaseUri}/images/${image}`}
          alt="item-image"
        />
        {!cartItems[id] ? (
          <button
            onClick={async () => {
              dispatch(cartItemsActions.addToCart(id));
              dispatch(cartItemsActions.getTotalCartAmount());
              if (accessToken) {
                await axios.post(
                  `${envVars.cartServerUri}/add-cart`,
                  { id },
                  {
                    headers: {
                      Authorization: `Bearer ${accessToken}`,
                    },
                  }
                );
              }
            }}
            className={styles.food_item_add_btn}
          >
            Add to bag{" "}
            <RiShoppingBasketFill size={16} style={{ color: "#415725" }} />
          </button>
        ) : (
          <div className={styles.food_item_counter}>
            <IoIosRemoveCircleOutline
              style={{ color: "#E63946", cursor: "pointer" }}
              onClick={async () => {
                dispatch(cartItemsActions.removeFromCart(id));
                dispatch(cartItemsActions.getTotalCartAmount());
                if (accessToken) {
                  await axios.post(
                    `${envVars.cartServerUri}/remove-cart`,
                    { id },
                    {
                      headers: {
                        Authorization: `Bearer ${accessToken}`,
                      },
                    }
                  );
                }
              }}
              size={30}
            />
            <p>{cartItems[id]}</p>
            <IoIosAddCircleOutline
              style={{ color: "#48C78E", cursor: "pointer" }}
              onClick={async () => {
                dispatch(cartItemsActions.addToCart(id));
                dispatch(cartItemsActions.getTotalCartAmount());
                if (accessToken) {
                  await axios.post(
                    `${envVars.cartServerUri}/add-cart`,
                    { id },
                    {
                      headers: {
                        Authorization: `Bearer ${accessToken}`,
                      },
                    }
                  );
                }
              }}
              size={30}
            />
          </div>
        )}
      </div>
      <div className={styles.food_item_info}>
        <div className={styles.food_item_name_rating}>
          <p>{name}</p>
          <img src={assets.rating_stars} alt="rating" />
        </div>
        <p className={styles.food_item_desc}>{description}</p>
        <p className={styles.food_item_price}>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
