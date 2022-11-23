import React from "react";
import { Link } from "react-router-dom";

const ProductRow = ({ title, price, category, id, thumbnail }) => {
  return (
    <div className="p-10 bg-yellow-500 w-96 m-2 flex gap-2">
      <div>
        <img src={thumbnail}></img>
      </div>
      <div>
        <div>{title}</div>
        <div>{category}</div>
        <div>${price}</div>
        <Link className="text-white" to={id + "/details"}>
          view details
        </Link>
      </div>
    </div>
  );
};

export default ProductRow;
