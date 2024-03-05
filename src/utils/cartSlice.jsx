import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 1,
    cartData: [],
    totalAmount: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
      state.totalAmount = calculateTotalOrder(state.cartData, state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      state.totalAmount = calculateTotalOrder(state.cartData, state.value);
    },
    addToCart: (state, action) => {
      state.cartData = [...state.cartData, action.payload];
      state.totalAmount = calculateTotalOrder(state.cartData, state.value);
    },
    removeToCart: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload
      );
      state.totalAmount = calculateTotalOrder(state.cartData, state.value);
    },
  },
});

const calculateTotalOrder = (cart, qty) => {
  return cart.reduce((total, item) => total + qty * item.newPrice, 0);
};

export const { increment, decrement, addToCart, removeToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
