import React from "react";
import { BsShop } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const cartData = useSelector((store) => store.cart.cartData);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="w-full py-4 fixed top-0 z-10 bg-white shadow-md px-8 lg:px-16 flex items-center justify-between">
      <Link to={"/"}>
        <div className="flex items-center gap-2">
          <BsShop className="text-2xl" />
          <h1 className="font-semibold text-lg">Shop</h1>
        </div>
      </Link>
      {location.pathname !== "/cart" && (
        <Link to="/cart">
          {" "}
          <div className="relative flex items-center">
            <HiOutlineShoppingCart className="text-2xl" />
            <p className="text-xs bg-black text-white flex justify-center items-center rounded-full w-4 h-4 absolute top-0 right-0 -mt-2 -mr-2">
              {cartData.length}
            </p>
          </div>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
