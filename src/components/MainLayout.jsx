import React from "react";
import { Outlet } from "react-router-dom";
import { CartContext } from "./Context";
import Header from "./Header";

function MainLayout() {
  const cachedData = JSON.parse(localStorage.getItem("new-cart") || "{}");
  const [cartItems, setCartItems] = React.useState(cachedData);

  const handleAddToCart = (productId, count) => {
    const oldCount = cartItems[productId] || 0;
    const newCart = { ...cartItems, [productId]: oldCount + count };
    updateCart(newCart);
  };

  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem("new-cart", JSON.stringify(newCart));
  };

  const totalCount = Object.keys(cartItems).reduce((previous, current) => {
    return previous + cartItems[current];
  }, 0);

  return (
    <CartContext.Provider value={{ handleAddToCart, cartItems, updateCart }}>
      <div>
        <Header productCount={totalCount} />
        <div>
          <Outlet />
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default MainLayout;
