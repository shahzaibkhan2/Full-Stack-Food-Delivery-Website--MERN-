import styles from "./Contact.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { FaBusinessTime } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Feedback from "../feedback/Feedback";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <section className={styles.contact_map}>
        <div className={styles.contact_details}>
          <span>STAY IN TOUCH</span>
          <h2>Visit Our Franchise Locations Or Contact Us</h2>
          <h3>Main Office</h3>
          <ul>
            <li>
              <IoLocationSharp className={styles.icons} />
              <p>East Coastal,Walnut Street, Malibu Point, California</p>
            </li>
            <li>
              <LuPhoneCall className={styles.icons} />
              <p>(+72)-21467567-11</p>
            </li>
            <li>
              <FaBusinessTime className={styles.icons} />
              <p>Monday-Friday from 9am-5pm</p>
            </li>
            <li>
              <FaEnvelope className={styles.icons} />
              <p>www.contact@eatnow.com</p>
            </li>
          </ul>
        </div>

        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409012.995974052!2d-120.38547967900838!3d36.784622342831135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945de1549e4e9d%3A0x7b12406449a3b811!2sFresno%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1720154583430!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Feedback />
    </div>
  );
};

export default Contact;
