import Contact from "../../components/contact/Contact";
import VisitMenu from "../../components/exploreMenu/VisitMenu";
import FoodApp from "../../components/foodApp/FoodApp";
import FoodArea from "../../components/foodArea/FoodArea";
import Header from "../../components/header/Header";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <VisitMenu />
      <FoodArea />
      <FoodApp />
      <Contact />
    </div>
  );
};

export default Home;
