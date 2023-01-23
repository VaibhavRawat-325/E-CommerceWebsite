import React from "react";
import { GiCancel } from "react-icons/gi";
import { CartContext } from "./Context";
import WithProvider from "./helpers/WithProvider";

function CartRow({
  title,
  price,
  id,
  thumbnail,
  localCartData,
  onRemove,
  cartItems,
}) {
  const { localCart, setLocalCart } = localCartData;

  const [quantity, setQuantity] = React.useState(cartItems[id]);

  const handleOnRemove = () => {
    onRemove(id);
  };

  const handleOnChange = (event) => {
    const newQuantity = +event.target.value;
    const newLocalCart = { ...localCart, [id]: newQuantity };
    setQuantity(newQuantity);
    setLocalCart(newLocalCart);
  };

  return (
    <div className="flex flex-col">
      <hr className="bg-gray-300 text-base" />
      <div className="flex justify-between px-10 py-2 items-center">
        <button className="text-xl w-10 text-gray-400" onClick={handleOnRemove}>
          <GiCancel />
        </button>
        <div className="h-20 w-20 ml-5">
          <img className="h-full w-full object-cover" src={thumbnail} />
        </div>
        <h1 className="px-2 w-20 grow ml-5">{title}</h1>
        <div className="flex">
          <span className="w-20 text-left ml-5">${price}</span>
          <div className="w-20 ml-5">
            <input
              className="border border-gray-200 rounded-sm p-1 w-12"
              value={quantity}
              type="number"
              min="0"
              onChange={handleOnChange}
            />
          </div>
          <span className="w-20 ml-5 text-left">${quantity * price}</span>
        </div>
      </div>
    </div>
  );
}
export default WithProvider(CartContext)(CartRow);
