import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartProvider from "./providers/CartProvider";

function MainLayout() {
  return (
    <CartProvider>
      <Header />
      <Outlet />
    </CartProvider>
  );
}

export default MainLayout;
