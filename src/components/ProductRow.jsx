import React from "react";
import { uniqueId } from "lodash";

const ProductRow = ({ title, price, category, id }) => {
  // const id = uniqueId();
  // console.log(id);
  return (
    <div id={id} className="p-10 bg-yellow-500 w-96 m-2">
      <div>{title}</div>
      <div>{category}</div>
      <div>{price}</div>
    </div>
  );
};

export default ProductRow;
