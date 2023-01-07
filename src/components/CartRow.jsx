import React, { useContext } from "react";
import { GiCancel } from "react-icons/gi";
import { CartContext } from "./Context";

function CartRow({ title, price, id, thumbnail, localCartData }) {
  const { cartItems, updateCart } = useContext(CartContext);
  const { localCart, setLocalCart } = localCartData;

  const [productCount, setProductCount] = React.useState(cartItems[id]);
  const [productTotal, setProductTotal] = React.useState(cartItems[id] * price);

  const handleRemove = () => {
    const newCart = { ...cartItems };
    delete newCart[id];
    updateCart(newCart);
  };

  const handleOnChange = (event) => {
    const newValue = +event.target.value;
    const newLocalCart = { ...localCart, [id]: newValue };
    setProductCount(newValue);
    setProductTotal(newValue * price);
    setLocalCart(newLocalCart);
  };

  return (
    <div className="flex justify-between px-10 py-4 border-b border-x border-gray-400 items-center">
      <button className="text-xl" onClick={handleRemove}>
        <GiCancel />
      </button>
      <div className="h-20 w-20">
        <img className="h-full w-full object-cover" src={thumbnail} />
      </div>
      <span className="px-2">{title}</span>
      <div className="flex gap-24">
        <span>${price}</span>
        <input
          className="border border-black rounded-sm p-1 w-12"
          value={productCount}
          type="number"
          min="0"
          onChange={handleOnChange}
        />
        <span>${productTotal}</span>
      </div>
    </div>
  );
}
export default CartRow;
