import React, { useContext, useEffect } from "react";
import { getProduct } from "./Api";
import CartList from "./CartList";
import { CartContext } from "./Context";
import Loading from "./Loading";
import NoMatching from "./NoMatching";

function Cart() {
  const { cartItems, totalCount } = useContext(CartContext);

  const [cart, setCart] = React.useState([]);

  const productItems = Object.keys(cartItems).map((productId) => {
    return getProduct(productId);
  });

  useEffect(() => {
    const promises = Promise.all(productItems);
    promises.then((responses) => {
      setCart(responses);
    });
  }, []);

  return (
    <div className="">
      {totalCount ? (
        <div>
          {cart.length !== 0 ? <CartList listItems={cart} /> : <Loading />}
        </div>
      ) : (
        <NoMatching>cart is empty</NoMatching>
      )}
    </div>
  );
}

export default Cart;
