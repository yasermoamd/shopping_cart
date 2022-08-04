import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

import "./navbar.css";

const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Shopping cart</h1>
      </div>
      <div className="right_side">
        <div className="">
          <span className="login">Login</span>
        </div>
        <div className="wish_list">
          <BsCardChecklist size={24} color="black" />
        </div>
        <div className="nav_cart">
          <Link to="">
            <AiOutlineShoppingCart color="black" size={24} />
            <span className="items_count">{cart.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
