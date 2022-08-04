import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "./CartContext";

const CartList = () => {
  const [cart, setCart] = useContext(CartContext);
  return;
  <section>
    {cart.map((item) => (
      <Cart key={item.id} item={item} />
    ))}
  </section>;
};

export default CartList;
