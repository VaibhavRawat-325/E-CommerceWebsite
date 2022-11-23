import React from "react";

import ProductRow from "./ProductRow";

function ProductsList({ products }) {
  return (
    <div className="bg-green-500 flex flex-col wrap">
      {products.map((item) => (
        <ProductRow key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ProductsList;
