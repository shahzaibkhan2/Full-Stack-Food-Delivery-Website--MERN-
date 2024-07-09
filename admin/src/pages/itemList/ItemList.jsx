import { useEffect } from "react";
import styles from "./ItemList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodList, removeFood } from "../../store/features/foodSlice";
import { envVars } from "../../config/config";
import { MdDeleteOutline } from "react-icons/md";

const ItemList = () => {
  const { data } = useSelector((state) => state.food);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoodList());
  }, [data]);

  return (
    <main
      className={`${styles.item_list} ${styles.item_list_padding} flex_col`}
    >
      <p>Food List</p>
      <div className={styles.item_list_table}>
        <div className={`${styles.item_list_table_format} ${styles.title}`}>
          <b>Item Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price ($)</b>
          <b>Remove</b>
        </div>
        {data.map((item, index) => {
          return (
            <div key={index} className={styles.item_list_table_format}>
              <img
                src={`${envVars.serverBaseUri}/images/` + item.image}
                alt="item-image"
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>$ {item.price}</p>
              <MdDeleteOutline
                onClick={() => dispatch(removeFood(item._id))}
                className={styles.item_list_remove_icon}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ItemList;
