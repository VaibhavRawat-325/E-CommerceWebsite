import React from "react";
import { useParams } from "react-router-dom";
import { getMockProducts } from "./Api";

function ProductDetail() {
  const { sku } = useParams();

  const store = getMockProducts();

  let Product;

  for (let i = 0; i < store.length; i++) {
    const pItem = store[i];
    if (sku == pItem.sku) {
      Product = pItem;
    }
  }

  return (
    <div className="bg-blue-400 p-2">
      <div className="">details of the {Product.title}</div>
    </div>
  );
}

export default ProductDetail;
