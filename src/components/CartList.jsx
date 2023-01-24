import React, { useEffect } from "react";
import Button from "./Button";
import CartRow from "./CartRow";
import { WithCart } from "./helpers/WithProvider";
import Input from "./Input";
import Loading from "./Loading";

function CartList({ listItems, loadingData, cartItems, updateCart }) {
  const { loading } = loadingData;
  const [localCart, setLocalCart] = React.useState([]);

  const handleChange = () => {
    updateCart(localCart);
  };

  const handleRemove = (id) => {
    const newCart = { ...cartItems };
    delete newCart[id];
    updateCart(newCart);
  };

  useEffect(() => {
    setLocalCart(cartItems);
  }, [cartItems]);

  const localCartData = { localCart, setLocalCart };

  return (
    <>
      {listItems ? (
        <div className="">
          <div className="bg-gray-200 flex border-x border-t border-gray-300">
            <div className="ml-52 py-3 grow">
              <span>Product</span>
            </div>
            <div className="flex px-10 py-3">
              <span className="w-20 ml-5">Price</span>
              <span className="w-20 ml-5">Quantity</span>
              <span className="w-20 ml-5">Subtotal</span>
            </div>
          </div>
          <div className="border-x border-b border-gray-300">
            {!loading ? (
              <div>
                {listItems.map((item) => (
                  <CartRow
                    key={item.id}
                    {...item}
                    localCartData={localCartData}
                    onRemove={handleRemove}
                  />
                ))}
              </div>
            ) : (
              <Loading />
            )}
          </div>
          <div className="flex justify-between mt-2 py-4 p-5">
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

export default WithCart(CartList);
