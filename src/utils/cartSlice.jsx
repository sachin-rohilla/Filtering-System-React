import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
    cartData: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addToCart: (state, action) => {
      state.cartData = [...state.cartData, action.payload];
    },
    removeToCart: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { increment, decrement, addToCart, removeToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
