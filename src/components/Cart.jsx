import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../utils/cartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const cartData = useSelector((store) => store.cart.cartData);
  const dispatch = useDispatch();
  const handleRemoveToCart = (id) => {
    dispatch(removeToCart(id));
    toast.success("Item removed from cart");
  };
  console.log("hello", cartData);
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center">
        {cartData?.length > 0 &&
          cartData.map((data) => (
            <div
              key={data?.id}
              className="flex shadow-md flex-col it  justify-center border p-4 rounded-md w-[80%] mt-4 h-60"
            >
              <img
                src={data?.img}
                alt={data?.id}
                className=" object-fill w-40 min-h-[120px]"
              />
              <p className="text-sm mt-1 ">
                {data?.title?.length > 20
                  ? data?.title?.slice(0, 20) + "..."
                  : data?.title}
              </p>
              <p>{data?.star}</p>
              <p className="text-sm font-semibold"> $ {data?.newPrice}</p>
              <button onClick={() => handleRemoveToCart(data?.id)}>
                Remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
