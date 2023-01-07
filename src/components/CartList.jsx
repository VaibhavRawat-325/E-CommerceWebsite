import React, { useContext, useEffect } from "react";
import Button from "./Button";
import CartRow from "./CartRow";
import { CartContext } from "./Context";
import Input from "./Input";
import Loading from "./Loading";

function CartList({ listItems, loadingData }) {
  const { cartItems, updateCart } = useContext(CartContext);
  const { loading } = loadingData;
  const [localCart, setLocalCart] = React.useState([]);

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
        <div className="">
          <div className="bg-gray-200 flex border border-gray-300">
            <div className="ml-52 py-3 grow">
              <span>Product</span>
            </div>
            <div className="flex px-10 py-3">
              <span className="w-20 ml-5">Price</span>
              <span className="w-20 ml-5">Quantity</span>
              <span className="w-20 ml-5">Subtotal</span>
            </div>
          </div>
          <div className="border-x">
            {!loading ? (
              <div>
                {listItems.map((item) => (
                  <CartRow
                    key={item.id}
                    {...item}
                    localCartData={localCartData}
                  />
                ))}
              </div>
            ) : (
              <Loading />
            )}
          </div>
          <div className="flex justify-between mt-2 py-4">
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
