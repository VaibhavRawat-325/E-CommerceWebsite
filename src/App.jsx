import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Product from "./components/Product";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/" element={<MainLayout />}>
        <Route path="about" element={<AboutMe />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:product_id/details" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
