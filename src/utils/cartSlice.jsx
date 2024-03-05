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
      state.cartData.push(action.payload);
    },
  },
});

export const { increment, decrement, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
