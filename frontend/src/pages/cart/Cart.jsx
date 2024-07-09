import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { cartItemsActions } from "../../store/features/cartItemsSlice";
import { useNavigate } from "react-router-dom";
import { envVars } from "../../config/config";
import axios from "axios";

const Cart = () => {
  const { cartItems, totalAmount, foodList } = useSelector(
    (state) => state.cartItems
  );
  const { accessToken } = useSelector((state) => state.states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // PDF SETUP

  // const pdfRef = useRef();

  // const downloadPDF = () => {
  //   const input = pdfRef.current;
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "mm", "a4", true);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = pdf.internal.pageSize.getHeight();

  //     const imgWidth = canvas.width;
  //     const imgHeight = canvas.height;

  //     const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

  //     const imgX = (pdfWidth - imgWidth * ratio) / 2;
  //     const imgY = 30; // Example value for Y position, adjust as needed

  //     pdf.addImage(
  //       imgData,
  //       "PNG",
  //       imgX,
  //       imgY,
  //       imgWidth * ratio,
  //       imgHeight * ratio
  //     );
  //     pdf.save("header.pdf");
  //   });
  // };

  // const downloadPDF = () => {
  //   var doc = new jsPDF();
  //   doc.autoTable({ html: "#table" });
  //   doc.save("table.pdf");
  // };

  return (
    <div className={styles.cart}>
      <div className={styles.cart_items}>
        <div className={styles.cart_items_title}>
          <p>Product Image</p>
          <p>Name</p>
          <p>Quantity</p>
          <p>Price ( $ )</p>
          <p>Total ( $ )</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {foodList.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div
                  className={`${styles.cart_items_title} ${styles.cart_items_item}`}
                >
                  <img
                    src={`${envVars.serverBaseUri}/images/${item.image}`}
                    alt="item-image"
                  />
                  <p>{item.name}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>$ {item.price}</p>
                  <p>$ {item.price * cartItems[item._id]}</p>
                  <MdDeleteOutline
                    className={styles.cart_items_item_remove}
                    onClick={async () => {
                      dispatch(cartItemsActions.removeFromCart(item._id));
                      console.log("inside delete cart");
                      if (accessToken) {
                        await axios.post(
                          `${envVars.cartServerUri}/remove-cart`,
                          { id: item._id },
                          {
                            headers: {
                              Authorization: `Bearer ${accessToken}`,
                            },
                          }
                        );
                        console.log("inside axios");
                      }
                      dispatch(cartItemsActions.getTotalCartAmount());
                    }}
                  />
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className={styles.cart_bottom}>
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
          <button onClick={() => navigate("/order")}>CHECKOUT</button>
        </div>
        <div className={styles.cart_coupon_code}>
          <div>
            <p>If you have any coupon code, Enter it here</p>
            <div className={styles.cart_coupon_code_input}>
              <input type="text" placeholder="Coupon Code Here" />
              <button>APPLY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
