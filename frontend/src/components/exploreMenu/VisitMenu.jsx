import { menu_list } from "../../assets/assets";
import { stateActions } from "../../store/features/statesSlice";
import styles from "./VisitMenu.module.css";
import { useSelector, useDispatch } from "react-redux";

const VisitMenu = () => {
  const { category } = useSelector((state) => state.states);
  const dispatch = useDispatch();

  return (
    <div id="visit-menu" className={styles.visit_menu}>
      <h1>Visit Our Menu</h1>
      <p className={styles.visit_menu_text}>
        Our menu contains delicious foods and dishes known worldwide for it's
        taste. Made by famous and well-skilled chefs across the world. EatNow is
        the leading brand across the world.
      </p>
      <div className={styles.visit_menu_list}>
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                const newCategory =
                  category === item.menu_name ? "All" : item.menu_name;
                dispatch(stateActions.setCategory(newCategory));
              }}
              key={index}
              className={styles.visit_menu_list_item}
            >
              <img
                className={category === item.menu_name ? styles.active : ""}
                src={item.menu_image}
                alt="menu-image"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default VisitMenu;
