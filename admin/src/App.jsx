import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddItem from "./pages/addItem/AddItem";
import Orders from "./pages/orders/Orders";
import ItemList from "./pages/itemList/ItemList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app_content">
        <Sidebar />
        <Routes>
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/item-list" element={<ItemList />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
