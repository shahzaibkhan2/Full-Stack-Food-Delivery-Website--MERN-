import { assets } from "../../assets/assets";
import styles from "./Navbar.module.css";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBasketFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { stateActions } from "../../store/features/statesSlice";
import { Link, useNavigate } from "react-router-dom";
import profileImg from "../../assets/people.png";
import { TbLogout } from "react-icons/tb";
import { useEffect } from "react";
import {
  fetchCartList,
  fetchFoodList,
} from "../../store/features/cartItemsSlice";

const Navbar = () => {
  const { menu, accessToken, isSticky } = useSelector((state) => state.states);
  const { totalAmount } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    dispatch(stateActions.setAccessToken(""));
    navigate("/");
    dispatch(stateActions.setMenu("home"));
  };

  useEffect(() => {
    dispatch(fetchFoodList());
    if (localStorage.getItem("accessToken")) {
      dispatch(
        stateActions.setAccessToken(localStorage.getItem("accessToken"))
      );
      dispatch(fetchCartList(localStorage.getItem("accessToken")));
    }
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      dispatch(stateActions.setIsSticky(true));
    } else {
      dispatch(stateActions.setIsSticky(false));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`${styles.navbar} ${isSticky && styles.isSticky}`}>
      <Link to="/">
        <img className={styles.logo} src={assets.logo} alt="logo" />
      </Link>
      <ul className={styles.navbar_menu}>
        <Link
          to="/"
          onClick={() => dispatch(stateActions.setMenu("home"))}
          className={menu === "home" ? styles.active : ""}
        >
          Home
        </Link>
        <a
          href="#visit-menu"
          onClick={() => dispatch(stateActions.setMenu("menu"))}
          className={menu === "menu" ? styles.active : ""}
        >
          Menu
        </a>
        <a
          href="#food-app"
          onClick={() => dispatch(stateActions.setMenu("mobile-app"))}
          className={menu === "mobile-app" ? styles.active : ""}
        >
          Our App
        </a>
        <a
          href="#feedback"
          onClick={() => dispatch(stateActions.setMenu("contact"))}
          className={menu === "contact" ? styles.active : ""}
        >
          Contact
        </a>
      </ul>
      <div className={styles.navbar_right}>
        <IoSearch className={styles.navbar_right_icons} />
        <div className={styles.navbar_orders}>
          <Link to="/cart">
            <RiShoppingBasketFill className={styles.navbar_right_icons} />
          </Link>
          <div className={totalAmount ? styles.dot : ""}></div>
        </div>
        {accessToken ? (
          <div className={styles.navbar_profile}>
            <img src={profileImg} alt="profile" />
            <ul className={styles.navbar_profile_dropdown}>
              <li>
                <RiShoppingBasketFill className={styles.navbar_right_icons} />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logoutHandler}>
                <TbLogout className={styles.navbar_right_icons} />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        ) : (
          <button onClick={() => dispatch(stateActions.setShowLogin(true))}>
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
