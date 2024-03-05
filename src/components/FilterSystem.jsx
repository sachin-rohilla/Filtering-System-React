import React, { useEffect, useState } from "react";
import FilteringSystemData from "../constants/constants";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import SelectOptionFilter from "./SelectOptionFilter";
import SearchFilter from "./SearchFilter";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const FilteringSystem = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.cart.cartData);
  const [filterData, setFilterData] = useState({
    category: "",
    color: "",
    search: "",
    price: "",
  });

  const [filterDataList, setFilterDataList] = useState(FilteringSystemData);
  const priceFilter = [
    {
      id: 1,
      value: "0-50",
      label: "$0-$50",
    },
    {
      id: 2,
      value: "50-100",
      label: "$50-$100",
    },
    {
      id: 3,
      value: "over-100",
      label: "Over $100",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterData((prevFilterData) => ({
      ...prevFilterData,
      [name]: value,
    }));
    // setFilterDataList(FilteringSystemData);
  };

  useEffect(() => {
    let filteredList = [...FilteringSystemData];

    if (filterData?.category) {
      filteredList = filteredList.filter(
        (item) => item?.category === filterData?.category
      );
    }

    if (filterData?.color) {
      filteredList = filteredList.filter(
        (item) => item?.color === filterData?.color
      );
    }

    if (filterData?.search) {
      const searchTerm = filterData.search.toLowerCase();
      filteredList = filteredList.filter((item) =>
        item?.title?.toLowerCase().includes(searchTerm)
      );
    }

    if (filterData?.price) {
      switch (filterData?.price) {
        case "0-50":
          filteredList = filteredList.filter(
            (item) => item?.newPrice >= 0 && item?.newPrice <= 50
          );
          break;
        case "50-100":
          filteredList = filteredList.filter(
            (item) => item?.newPrice >= 50 && item?.newPrice <= 100
          );
          break;
        case "over-100":
          filteredList = filteredList.filter((item) => item?.newPrice > 100);
          break;
        default:
          break;
      }
    }

    setFilterDataList(filteredList);
  }, [filterData]);

  const handleAddToCart = (data) => {
    if (!cartData.includes(data)) {
      dispatch(addToCart(data));
      toast.success("Added to cart");
    }
  };

  return (
    <div className="flex gap-4 w-full px-16 mt-20">
      <div className="border shadow-md rounded-lg px-10 py-4 h-fit ">
        <CategoryFilter
          handleChange={handleChange}
          categoryFilter={filterData?.category}
        />
        <ColorFilter
          handleChange={handleChange}
          colorFilter={filterData?.color}
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center  ">
          <SelectOptionFilter
            name="price"
            options={priceFilter}
            handleChange={handleChange}
          />

          <SearchFilter
            searchFilter={filterData?.search}
            handleChange={handleChange}
          />
        </div>

        <div className="flex items-center flex-wrap gap-4 mt-4">
          {filterDataList?.length > 0 &&
            filterDataList?.map((data) => (
              <div
                key={data?.id}
                className="flex shadow-md flex-col  justify-center border p-4 rounded-md w-48 h-60"
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
                <button
                  className={`w-full flex justify-center py-1.5  rounded-lg mt-2 text-sm ${
                    cartData?.includes(data)
                      ? "border border-yellow-400 text-yellow-400"
                      : "bg-yellow-400 text-white"
                  }`}
                  onClick={() => handleAddToCart(data)}
                >
                  {cartData?.includes(data) ? (
                    <Link to="/cart" className="flex items-center gap-2">
                      <MdCheckCircle className="text-xl" />
                      <p>Go to Cart</p>
                    </Link>
                  ) : (
                    "Add to Cart"
                  )}
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilteringSystem;
