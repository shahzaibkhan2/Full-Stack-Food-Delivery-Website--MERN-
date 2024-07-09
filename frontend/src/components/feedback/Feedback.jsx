import styles from "./Feedback.module.css";
import { assets } from "../../assets/assets";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Feedback = () => {
  return (
    <section id="feedback" className={styles.feedback}>
      <div className={styles.feedback_form}>
        <h3>GIVE US A FEEDBACK</h3>
        <h2>We Would Like To Have a Feedback</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea cols="30" rows="10" placeholder="Your Feedback"></textarea>
          <button className={styles.normal}>Submit</button>
        </form>
      </div>
      <div className={styles.user}>
        <div className={`${styles.user_one}`}>
          <img src={assets.user1} alt="user-image" />
          <div>
            <h3>Shahzaib Khan</h3>
            <h4>General Manager at Google</h4>
            <p>Phone: + 21 13 3267373</p>
            <div className={styles.social_icons}>
              <div className={`${styles.social_icon} fadeIn_animation`}>
                <FaLinkedinIn size={15} />
              </div>
              <div className={`${styles.social_icon} fadeIn_animation`}>
                <FaFacebookF size={15} />
              </div>
              <div className={`${styles.social_icon} fadeIn_animation`}>
                <FaXTwitter size={15} />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.user_one}`}>
          <img src={assets.user1} alt="user-image" />
          <div>
            <h3>Yasir Khan</h3>
            <h4>Engineer at Microsoft</h4>
            <p>Phone: + 72 19 346594956</p>
            <div className={styles.social_icons}>
              <div className={`${styles.social_icon} fadeIn_animation`}>
                <FaLinkedinIn size={15} />
              </div>
              <div className={`${styles.social_icon} fadeIn_animation`}>
                <FaFacebookF size={15} />
              </div>
              <div className={`${styles.social_icon} fadeIn_animation`}>
                <FaXTwitter size={15} />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.user_one}`}>
          <img src={assets.user1} alt="user-image" />
          <div>
            <h3>Yasir Khan</h3>
            <h4>Engineer at Microsoft</h4>
            <p>Phone: + 72 19 346594956</p>
            <div className={styles.social_icons}>
              <div className={`${styles.social_icon} fadeIn_animation`}>
                <FaLinkedinIn size={15} />
              </div>
              <div className={`${styles.social_icon} fadeIn_animation`}>
                <FaFacebookF size={15} />
              </div>
              <div className={`${styles.social_icon} fadeIn_animation`}>
                <FaXTwitter size={15} />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.user_one}`}>
          <img src={assets.user1} alt="user-image" />
          <div>
            <h3>Yasir Khan</h3>
            <h4>Engineer at Microsoft</h4>
            <p>Phone: + 72 19 346594956</p>
            <div className={styles.social_icons}>
              <div className={`${styles.social_icon} fadeIn_animation`}>
                <FaLinkedinIn size={15} />
              </div>
              <div className={`${styles.social_icon} fadeIn_animation`}>
                <FaFacebookF size={15} />
              </div>
              <div className={`${styles.social_icon} fadeIn_animation`}>
                <FaXTwitter size={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
