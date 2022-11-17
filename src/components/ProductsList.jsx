import React from "react";
import ProductRow from "./ProductRow";
import { uniqueId } from "lodash";

function ProductsList({ products }) {
  const id = uniqueId();

  return (
    <div className="bg-green-500 flex flex-col h-screen">
      {products.map((e) => (
        <ProductRow
          title={e.title}
          category={e.category}
          price={e.price}
          key={id}
        />
      ))}
    </div>
  );
}

export default ProductsList;
