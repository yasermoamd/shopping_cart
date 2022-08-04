import React from "react";
import data from "./data.json";
import Product from "../src/Product";

const ProductList = ({ item, onRemove }) => {
  return (
    <div className="product">
      {data.map((item) => (
        <Product key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default ProductList;
