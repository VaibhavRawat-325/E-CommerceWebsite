import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [menuIcon, setMenuIcon] = React.useState(false);

  return (
    <div className="bg-red-500 flex lg:justify-end sm: justify-between p-2 text-white">
      <button className="lg:hidden pt-1" onClick={() => setMenuIcon(true)}>
        <GiHamburgerMenu />
      </button>
      <div className="flex lg:gap-10 sm:gap-5">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
}

export default Header;
