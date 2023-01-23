import React from "react";
import { CartContext } from "../Context";

function CartProvider({ children }) {
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
    <CartContext.Provider
      value={{ handleAddToCart, cartItems, updateCart, totalCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
