import React from "react";

import ProductRow from "./ProductRow";

function ProductsList({ products }) {
  return (
    <div className="grid-cols-1 grid sm:grid-cols-3 gap-2">
      {products.map((item) => (
        <ProductRow key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ProductsList;
