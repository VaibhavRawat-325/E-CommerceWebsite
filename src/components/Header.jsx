import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";

function Header() {
  return (
    <div className="py-4 bg-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <img
          className="h-10"
          src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"
        />
        <div className="flex gap-10 items-center">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
          <NavLink to="/login">Login</NavLink>
          <span className="text-3xl text-orange-500">
            <HiOutlineShoppingBag />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
