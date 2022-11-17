import React from "react";

const ProductRow = ({ title, price, category }) => {
  return (
    <div className="p-10 bg-yellow-500 w-96 m-2">
      <div>{title}</div>
      <div>{category}</div>
      <div>{price}</div>
    </div>
  );
};

export default ProductRow;
