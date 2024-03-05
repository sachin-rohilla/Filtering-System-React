import React from "react";
import { BsShop } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="w-full py-4 fixed top-0 z-10 bg-white shadow-md px-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <BsShop className="text-3xl" />
        <h1 className="font-semibold text-lg">Shop</h1>
      </div>
      <HiOutlineShoppingCart className="text-2xl " />
    </nav>
  );
};

export default Navbar;
