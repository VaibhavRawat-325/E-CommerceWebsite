import React from "react";
import { Outlet } from "react-router-dom";
import { CountContext } from "./Context";
import Header from "./Header";

function MainLayout() {
  const [productCount, setProductCount] = React.useState();

  const handleAddToCart = (productId, count) => {
    console.log("product id", productId, "count", count);
    setProductCount(count);
  };

  const data = { handleAddToCart };

  return (
    <CountContext.Provider value={data}>
      <div>
        <Header productCount={productCount} />
        <div>
          <Outlet />
        </div>
      </div>
    </CountContext.Provider>
  );
}

export default MainLayout;
