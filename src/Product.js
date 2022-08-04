import React, { useContext, useEffect, useState } from "react";
import "./product.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CartContext } from "./CartContext";

function Product({ item, onRemove }) {
  const [wish, setWish] = useState(false);
  const [cart, setCart] = useContext(CartContext);
  const productItems = {
    id: item.id,
    Title: item.Title,
    price: item.price,
    img: item.img
  };

  const handleAdd = () => {
    // todo:
    setCart((curr) => [...curr, productItems]);
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="product" key={item.id}>
      <div className="product_image">
        <img src={item.img} className="img_url" alt={item.Title} />
      </div>
      <div className="">
        <div className="product_title">
          <div>{item.Title}</div>
          <div onClick={() => setWish(!wish)}>
            {wish ? (
              <AiFillHeart size={20} color={"red"} />
            ) : (
              <AiOutlineHeart size={20} />
            )}
          </div>
        </div>
        <div className="product_details">
          <div className="product_price">{item.price}</div>
          <div className="product_button">
            <button
              onClick={() => handleAdd()}
              type="submit"
              className="product_btn"
            >
              Add
            </button>
            <button
              onClick={() => handleRemove(item.id)}
              type="submit"
              className="product_btn"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
