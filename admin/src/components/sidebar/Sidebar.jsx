import "./Sidebar.css";
import { IoMdAdd } from "react-icons/io";
import { MdFastfood } from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar_options">
        <NavLink to="add-item" className="sidebar_option">
          <IoMdAdd className="sidebar_option_icons" />
          <p>Add Item</p>
        </NavLink>

        <NavLink to="/orders" className="sidebar_option">
          <MdFastfood className="sidebar_option_icons" />
          <p>Orders</p>
        </NavLink>

        <NavLink to="/item-list" className="sidebar_option">
          <GoChecklist className="sidebar_option_icons" />
          <p>Items List</p>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
