import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CartContext } from "./Context";
import WithProvider from "./helpers/WithProvider";

function Header({ totalCount }) {
  return (
    <div className="py-4 bg-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <img
          className="h-10"
          src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"
        />
        <div className="flex gap-10 items-center text-gray-600">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
          <NavLink to="/login">Login</NavLink>
          <div className="flex flex-col">
            <HiOutlineShoppingBag className="text-4xl text-orange-500" />
            <span className="text-sm text-orange-500 ml-3.5 -mt-6">
              {totalCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithProvider(CartContext)(Header);
