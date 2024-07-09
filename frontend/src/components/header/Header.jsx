import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header_contents} fadeIn_animation`}>
        <h2>Find and order best food here.</h2>
        <p>
          We provide a variety of foods with diverse menu. You can choose your
          favorite food and order on just one click. Our menu includes
          international foods. Hurry up and visit our menu to get started !
        </p>
        <button>Visit Menu</button>
      </div>
    </header>
  );
};

export default Header;
