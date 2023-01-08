import React from "react";
import { Link } from "react-router-dom";

const ProductRow = ({ title, price, category, id, thumbnail }) => {
  return (
    <div className="max-w-xs flex flex-col mb-9 aspect-square bg-gray-100 p-2 border border-gray-200">
      <div className="w-full aspect-square overflow-hidden">
        <img className="h-full w-full object-cover" src={thumbnail}></img>
      </div>
      <div className="px-2">
        <div className="text-gray-600 font-medium">{category}</div>
        <Link to={id + "/details"} className="font-medium">
          <h1>{title}</h1>
        </Link>
        <div>${price}</div>
      </div>
    </div>
  );
};

export default ProductRow;
