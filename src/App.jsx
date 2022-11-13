import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Product from "./components/Product";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
