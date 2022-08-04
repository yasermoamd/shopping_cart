import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import "./styles.css";

function Cart() {
  const [cart, setCart] = useContext(CartContext);

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className="app_cart">
      <span>Total price: ${totalPrice}</span>
    </div>
  );
}

export default Cart;
