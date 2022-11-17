import React from "react";
import Input from "./Input";
import ProductsList from "./ProductsList";

function Products() {
  console.log("hello producst");

  // const data = ["iPhone 11", "iPhone 12", "iPhone 13"];

  const data = [
    { title: "iPhone 11", category: "mobile", price: "Rs. 12" },
    { title: "iPhone 12", category: "mobile", price: "Rs. 15" },
    { title: "iPhone 13", category: "mobile", price: "Rs. 20" },
  ];

  return (
    <div className="bg-gray-400 p-5 h-screen w-screen items-center flex flex-col">
      <Input placeholder="search" />
      <ProductsList products={data} />
    </div>
  );
}

export default Products;
