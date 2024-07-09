import styles from "./Footer.module.css";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footer_content}>
        <div className={styles.footer_content_left}>
          <img src="/foodLogo.png" alt="logo" />
          <p>
            We provide a variety of foods with diverse menu. You can choose your
            favorite food and order on just one click. Our menu includes
            international foods. Hurry up and visit our menu to get started !
          </p>
          <div className={styles.footer_social_icons}>
            <div className={`${styles.footer_social_icon} fadeIn_animation`}>
              <FaLinkedinIn size={21} />
            </div>
            <div className={`${styles.footer_social_icon} fadeIn_animation`}>
              <FaFacebookF size={21} />
            </div>
            <div className={`${styles.footer_social_icon} fadeIn_animation`}>
              <FaXTwitter size={21} />
            </div>
          </div>
        </div>
        <div className={styles.footer_content_middle}>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>Delivery</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.footer_content_right}>
          <h2>Get in Touch</h2>
          <ul>
            <li>+92-303-3465463</li>
            <li>contact@eatnow.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className={styles.footer_copyright}>
        Copyright © EatNow 2024. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
