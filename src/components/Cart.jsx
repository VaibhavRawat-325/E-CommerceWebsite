import React, { useContext, useEffect } from "react";
import { getProduct } from "./Api";
import CartList from "./CartList";
import { CartContext } from "./Context";
import Loading from "./Loading";
import NoMatching from "./NoMatching";

function Cart() {
  const { cartItems, totalCount } = useContext(CartContext);

  const [cart, setCart] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
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
    <div className="">
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
  );
}

export default Cart;
