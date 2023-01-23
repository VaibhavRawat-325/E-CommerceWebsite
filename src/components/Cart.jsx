import React, { useContext, useEffect } from "react";
import { getProduct } from "./Api";
import CartList from "./CartList";
import { CartContext } from "./Context";
import WithProvider from "./HOCs/withProvider";
import Loading from "./Loading";
import NoMatching from "./NoMatching";

function Cart({ cartItems, totalCount }) {
  const [cart, setCart] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    const productItems = Object.keys(cartItems).map((productId) => {
      return getProduct(productId);
    });

    const promises = Promise.all(productItems);
    promises.then((responses) => {
      setCart(responses);
      setLoading(false);
    });
  }, [cartItems]);

  const loadingData = { loading, setLoading };

  return (
    <div className="pb-10 mx-5 my-7">
      <div className="bg-white max-w-6xl mx-auto mt-10 px-20 py-24">
        {totalCount ? (
          <div>
            {cart.length !== 0 ? (
              <CartList loadingData={loadingData} listItems={cart} />
            ) : (
              <Loading />
            )}
          </div>
        ) : (
          <NoMatching>cart is empty</NoMatching>
        )}
      </div>
    </div>
  );
}

export default WithProvider(CartContext)(Cart);
