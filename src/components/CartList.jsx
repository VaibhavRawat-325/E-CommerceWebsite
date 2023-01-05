import React, { useContext, useEffect } from "react";
import Button from "./Button";
import CartRow from "./CartRow";
import { CartContext } from "./Context";
import Input from "./Input";
import Loading from "./Loading";

function CartList({ listItems, loadingData }) {
  const { cartItems, updateCart } = useContext(CartContext);
  const { loading, setLoading } = loadingData; //f
  const [localCart, setLocalCart] = React.useState([]);

  const handleLoadingEvent = (x) => {
    setLoading(x);
  };

  const handleChange = () => {
    updateCart(localCart);
  };

  useEffect(() => {
    setLocalCart(cartItems);
  }, [cartItems]);

  const localCartData = { localCart, setLocalCart };

  return (
    <>
      {listItems ? (
        <div className="bg-green-400">
          <div className="flex justify-between px-5 py-1">
            <span className="bg-amber-500 p-2">Product</span>
            <div className="bg-red-400 flex gap-20 p-1">
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
          </div>
          {!loading ? (
            <div>
              {listItems.map((item) => (
                <CartRow
                  key={item.id}
                  {...item}
                  handleLoadingEvent={handleLoadingEvent}
                  localCartData={localCartData}
                />
              ))}
            </div>
          ) : (
            <Loading />
          )}
          <div className="flex justify-between">
            <div className="flex">
              <Input placeholder="Coupon code" />
              <Button>Apply Coupon</Button>
            </div>
            <Button onClick={handleChange}>Update Cart</Button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CartList;
