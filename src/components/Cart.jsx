import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeToCart } from "../utils/cartSlice";
import { toast } from "react-toastify";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((store) => store.cart.cartData);
  const cartValue = useSelector((store) => store.cart.value);
  const dispatch = useDispatch();
  const handleRemoveToCart = (id) => {
    dispatch(removeToCart(id));
    toast.success("Item removed from cart");
  };
  const handleIncrease = (id) => {
    if (cartValue < 10) {
      dispatch(increment());
    }
  };
  const handleDecrease = (id) => {
    if (cartValue > 1) {
      dispatch(decrement());
    } else {
      dispatch(removeToCart(id));
    }
  };
  console.log("hello", cartData);

  if (!cartData?.length) {
    return (
      <div className="w-full h-full flex justify-center items-center mt-20">
        <div className="flex flex-col items-center">
          <img
            className="w-96 h-96 object-cover"
            src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png?f=webp"
          />
          <h1 className="text-xl font-semibold text-center">
            Oops... your cart is empty
          </h1>
          <Link
            to="/"
            className="bg-yellow-400 text-white rounded-lg px-4 py-2 mt-2 "
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-20 w-full">
      <h1 className="text-xl font-semibold text-center">Cart</h1>
      <div className=" flex  gap-4 px-16">
        <div className="w-[70%]">
          {cartData?.length > 0 &&
            cartData.map((data) => (
              <div
                key={data?.id}
                className=" flex justify-between items-center  shadow-md   border px-10 py-4 rounded-md mt-4 h-60"
              >
                <div className="w-full flex">
                  <div>
                    <img
                      src={data?.img}
                      alt={data?.id}
                      className=" object-fill w-52 min-h-[120px]"
                    />
                  </div>
                  <div className="ml-8">
                    <p className="text-base mt-4 ">{data?.title}</p>
                    <p>{data?.star}</p>
                    <p className="text-sm font-semibold mt-1">
                      {" "}
                      $ {data?.newPrice}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => handleDecrease(data?.id)}>
                        <CiCircleMinus className="text-2xl" />
                      </button>
                      {cartValue}
                      <button>
                        <CiCirclePlus
                          className="text-2xl"
                          onClick={() => handleIncrease(data?.id)}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="border border-yellow-400 text-yellow-400 font-semibold h-fit w-36 py-2 rounded-lg"
                  onClick={() => handleRemoveToCart(data?.id)}
                >
                  Remove
                </button>
              </div>
            ))}
        </div>

        <div className="w-[30%] shadow-md h-fit p-4 rounded-md">
          <h2 className="font-semibold">Order Details</h2>
          <div className="text-sm flex flex-col gap-1 mt-2">
            <div className="flex justify-between ">
              <p>Bag Total</p>
              <p>₹598</p>
            </div>
            <div className="flex justify-between ">
              <p>Bag Discount</p>
              <p>₹40</p>
            </div>
            <div className="flex justify-between ">
              <p>Delievery Fee</p>
              <p>₹99</p>
            </div>
            <hr />
            <div className="flex justify-between font-semibold ">
              <p>Order Total</p>
              <p>₹598</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
