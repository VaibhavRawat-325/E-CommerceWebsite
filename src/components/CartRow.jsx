import React, { useContext } from "react";
import { GiCancel } from "react-icons/gi";
import { CartContext } from "./Context";

function CartRow({ title, price, id, handleLoadingEvent, localCartData }) {
  const { cartItems, updateCart } = useContext(CartContext);
  const { localCart, setLocalCart } = localCartData;

  const [productCount, setProductCount] = React.useState(cartItems[id]);
  const [productTotal, setProductTotal] = React.useState(cartItems[id] * price);

  const handleRemove = () => {
    const newCart = { ...cartItems };
    delete newCart[id];
    updateCart(newCart);
    handleLoadingEvent(true);
  };

  const handleOnChange = (event) => {
    const newValue = +event.target.value;
    const newLocalCart = { ...localCart, [id]: newValue };
    setProductCount(newValue);
    setProductTotal(newValue * price);
    setLocalCart(newLocalCart);
  };

  return (
    <div className="bg-fuchsia-400 flex justify-between px-5">
      <button onClick={handleRemove}>
        <GiCancel />
      </button>
      <span className="bg-green-500 px-2">{title}</span>
      <div className="bg-yellow-400 flex gap-24">
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
