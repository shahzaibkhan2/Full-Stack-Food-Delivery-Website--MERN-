import styles from "./Navbar.module.css";
import logo from "../../assets/eatLogo.png";
import profile from "../../assets/admin.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="logo" />
      <img className={styles.profile} src={profile} alt="profile" />
    </div>
  );
};

export default Navbar;
