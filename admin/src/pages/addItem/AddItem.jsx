import styles from "./AddItem.module.css";
import upload from "../../assets/upload.png";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { envVars } from "../../config/config.js";

const AddItem = () => {
  const [image, setImage] = useState(false);
  const nameRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let nameVal = nameRef.current.value;
    let priceVal = priceRef.current.value;
    let categoryVal = categoryRef.current.value;
    let descriptionVal = descriptionRef.current.value;

    const formData = new FormData();
    formData.append("name", nameVal);
    formData.append("price", Number(priceVal));
    formData.append("description", descriptionVal);
    formData.append("category", categoryVal);
    formData.append("image", image);

    const response = await axios.post(
      `${envVars.serverUri}/add-food`,
      formData
    );

    if (response.data.success) {
      toast.success("Food added successfully !");
      nameRef.current.value = "";
      priceRef.current.value = "";
      categoryRef.current.value = "Dessert";
      descriptionRef.current.value = "";

      setImage(false);
    } else {
      toast.error("Food is not added due to error.");
      console.log("Data uploading failed.");
    }
  };

  return (
    <div className={styles.add_item}>
      <form onSubmit={handleSubmit} className={`flex_col`}>
        <div className={`${styles.add_item_img_upload} flex_col`}>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : upload}
              alt="upload-image"
            />
          </label>
          <input
            onChange={(event) => setImage(event.target.files[0])}
            id="image"
            type="file"
            hidden
            required
          />
        </div>
        <div className={`${styles.add_item_product_name} flex_col`}>
          <p>Product Name</p>
          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Product name"
            required
          />
        </div>
        <div className={`${styles.add_item_product_description} flex_col`}>
          <p>Product Description</p>
          <textarea
            ref={descriptionRef}
            name="description"
            placeholder="Write description here"
            required
            rows="6"
          />
        </div>
        <div className={`${styles.add_item_category_and_price}`}>
          <div className={`${styles.add_item_category} flex_col`}>
            <p>Product Category</p>
            <select ref={categoryRef} name="category">
              <option value="Dessert">Dessert</option>
              <option value="Noodles">Noodles</option>
              <option value="Burger">Burger</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Pasta">Pasta</option>
              <option value="Cake">Cake</option>
              <option value="Veg">Veg</option>
              <option value="Salad">Salad</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>
          <div className={`${styles.add_item_price} flex_col`}>
            <p>Product Price</p>
            <input
              ref={priceRef}
              type="number"
              name="price"
              required
              placeholder="$10"
            />
          </div>
        </div>
        <button type="submit" className={styles.add_item_btn}>
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
