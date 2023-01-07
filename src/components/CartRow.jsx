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
    <div className="flex flex-col">
      <div className="flex justify-between px-10 py-2 items-center">
        <button className="text-xl w-10 text-gray-400" onClick={handleRemove}>
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
              value={productCount}
              type="number"
              min="0"
              onChange={handleOnChange}
            />
          </div>
          <span className="w-20 ml-5 text-left">${productTotal}</span>
        </div>
      </div>
      <hr className="bg-gray-200 text-base" />
    </div>
  );
}
export default CartRow;
