import React from "react";
import { Outlet } from "react-router-dom";
import { CountContext } from "./Context";
import Header from "./Header";

function MainLayout() {
  const [cartItems, setCartItems] = React.useState({});

  console.log("cart", cartItems);

  const handleAddToCart = (productId, count) => {
    const oldCount = cartItems[productId] || 0;
    setCartItems({ ...cartItems, [productId]: oldCount + count });
  };

  const totalCount = Object.keys(cartItems).reduce((previous, current) => {
    return previous + cartItems[current];
  }, 0);

  const data = { handleAddToCart };

  return (
    <CountContext.Provider value={data}>
      <div>
        <Header productCount={totalCount} />
        <div>
          <Outlet />
        </div>
      </div>
    </CountContext.Provider>
  );
}

export default MainLayout;
