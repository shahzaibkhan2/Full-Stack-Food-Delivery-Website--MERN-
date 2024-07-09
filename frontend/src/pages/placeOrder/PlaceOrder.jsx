import { useSelector } from "react-redux";
import styles from "./PlaceOrder.module.css";

const PlaceOrder = () => {
  const { totalAmount } = useSelector((state) => state.cartItems);
  return (
    <form className={styles.place_order}>
      <section className={styles.place_order_left}>
        <p className={styles.title}>Delivery Information</p>
        <div className={styles.multi_fields}>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Street" />
        <div className={styles.multi_fields}>
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className={styles.multi_fields}>
          <input type="text" placeholder="Postal code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone number" />
      </section>
      <section className={styles.place_order_right}>
        <div className={styles.cart_total}>
          <h2>Totals</h2>
          <div>
            <div className={styles.cart_total_details}>
              <p>Subtotal</p>
              <p>$ {totalAmount}</p>
            </div>
            <hr />
            <div className={styles.cart_total_details}>
              <p>Delivery Charges</p>
              <p>$ {totalAmount !== 0 ? 4 : 0}</p>
            </div>
            <hr />
            <div className={styles.cart_total_details}>
              <b>Overall Total</b>
              <b>$ {totalAmount !== 0 ? totalAmount + 4 : 0}</b>
            </div>
          </div>
          <button>PAY NOW</button>
        </div>
      </section>
    </form>
  );
};

export default PlaceOrder;
