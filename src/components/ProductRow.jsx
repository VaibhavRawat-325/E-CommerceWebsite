import React from "react";
import { Link } from "react-router-dom";

const ProductRow = ({ title, price, category, sku }) => {
  return (
    <div className="p-10 bg-yellow-500 w-96 m-2">
      <div>{title}</div>
      <div>{category}</div>
      <div>{price}</div>
      <Link className="text-white" to={sku + "/details"}>
        view details
      </Link>
    </div>
  );
};

export default ProductRow;
