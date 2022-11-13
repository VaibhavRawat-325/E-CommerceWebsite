import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const data = useParams();
  return <div className="text-5xl">details of the {data.product_id}</div>;
}

export default Product;
