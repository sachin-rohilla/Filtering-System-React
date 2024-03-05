import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrement,
  increment,
  removeToCart,
} from "../utils/cartSlice";
import { toast } from "react-toastify";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Cart = () => {
  const cartData = useSelector((store) => store.cart.cartData);
  const cartValue = useSelector((store) => store.cart.value);
  const totalAmount = useSelector((store) => store.cart.totalAmount);

  const bagDiscount = 40;
  const deliveryFee = 99;

  const orderTotal = totalAmount + deliveryFee - bagDiscount;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRemoveToCart = (id) => {
    dispatch(removeToCart(id));
    toast.success("Item removed from cart");
  };
  const handleIncrease = (id) => {
    console.log(id, "yes");
    if (cartValue < 5) {
      dispatch(increment(id));
    }
  };
  const handleDecrease = (id) => {
    if (cartValue > 1) {
      dispatch(decrement());
    } else {
      dispatch(removeToCart(id));
      toast.success("Item removed from cart");
    }
  };

  const handlePlaceOrder = () => {
    Swal.fire({
      title: " Do you want to place the order?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Order placed successfully!", "", "success");
        setTimeout(() => {
          navigate("/");
          dispatch(clearCart());
        }, 2000);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  console.log("hello", cartData, totalAmount);

  if (!cartData?.length) {
    return (
      <div className="w-full h-full flex justify-center items-center mt-20">
        <div className="flex flex-col items-center">
          <img
            className="w-[350px] h-76 object-cover"
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
      <h1 className="text-xl font-semibold text-center">
        Cart Items - {cartData?.length}
      </h1>
      <div className=" flex flex-col  lg:flex-row lg:gap-4 px-8 lg:px-16 mt-4">
        <div className="w-full lg:w-[70%] ">
          {cartData?.length > 0 &&
            cartData.map((data) => (
              <div
                key={data?.id}
                className=" flex lg:flex-row flex-col justify-between items-center  shadow-md   border px-6 lg:px-10 py-4 rounded-md mb-4 h-52 lg:h-60"
              >
                <div className="w-full flex items-center">
                  <div>
                    <img
                      src={data?.img}
                      alt={data?.id}
                      className=" object-fill w-44 lg:w-52 min-h-[80px] lg:min-h-[120px]"
                    />
                  </div>
                  <div className="ml-8">
                    <p className="text-sm lg:text-base mt-4 ">{data?.title}</p>
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
                          className={`text-2xl ${
                            cartValue === 5
                              ? "cursor-not-allowed opacity-45"
                              : "opacity-100"
                          }`}
                          onClick={() => handleIncrease(data?.id)}
                          disabled={cartValue === 5}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="border border-yellow-400 text-yellow-400 font-semibold h-fit w-36 py-2 rounded-lg text-sm lg:text-base"
                  onClick={() => handleRemoveToCart(data?.id)}
                >
                  Remove
                </button>
              </div>
            ))}
        </div>
        <div className="w-full lg:w-[30%] ">
          <div className="shadow-md h-fit p-4 rounded-md border">
            <h2 className="font-semibold">Order Details</h2>
            <div className="text-sm flex flex-col gap-1 mt-2">
              <div className="flex justify-between ">
                <p>Bag Total</p>
                <p>₹{totalAmount}</p>
              </div>
              <div className="flex justify-between text-yellow-400 ">
                <p>Bag Discount</p>
                <p>-₹{bagDiscount}</p>
              </div>
              <div className="flex justify-between ">
                <p>Delievery Fee</p>
                <p>₹{deliveryFee}</p>
              </div>
              <hr />
              <div className="flex justify-between font-semibold ">
                <p>Order Total</p>
                <p>₹{orderTotal}</p>
              </div>
            </div>
          </div>
          <button
            className="bg-yellow-400 py-2 rounded-lg text-white w-full mt-4"
            onClick={handlePlaceOrder}
          >
            {" "}
            Place Order{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
