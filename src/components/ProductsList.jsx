import React from "react";
import ProductRow from "./ProductRow";

function ProductsList({ products }) {
  return (
    <div className="bg-green-500 flex flex-col ">
      {products.map((item) => (
        <ProductRow key={item.sku} {...item} />
      ))}
    </div>
  );
}

export default ProductsList;
