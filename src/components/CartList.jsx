import React from "react";
import Button from "./Button";
import CartRow from "./CartRow";
import Input from "./Input";
import Loading from "./Loading";

function CartList({ listItems, loadingData }) {
  const { loading, setLoading } = loadingData; //f

  const handleLoadingEvent = (x) => {
    setLoading(x);
  };

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
                />
              ))}
            </div>
          ) : (
            <Loading />
          )}
          <div className="flex justify-between px-4 py-2">
            <div className="flex">
              <Input placeholder="Coupon code" />
              <Button>Apply Coupon</Button>
            </div>
            <Button>Update Cart</Button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CartList;
