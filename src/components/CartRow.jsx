import React, { useContext } from "react";
import { CartContext } from "./Context";

function CartRow({ title, price }) {
  const { cartItems } = useContext(CartContext);

  const [productCount, setProductCount] = React.useState(1);

  const handleOnChange = (event) => {
    setProductCount(event.target.value);
  };

  return (
    <div className="bg-fuchsia-400 flex justify-between px-5">
      <span className="bg-green-500 px-2">{title}</span>
      <div className="bg-yellow-400 flex gap-24">
        <span>${price}</span>
        <input
          className="border border-black rounded-sm p-1 w-12"
          value={productCount}
          type="number"
          onChange={handleOnChange}
        />
        <span>total</span>
      </div>
    </div>
  );
}
export default CartRow;
