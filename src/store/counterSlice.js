import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    step: 0,
  },
  reducers: {
    add: (state) => {
      state.step++;
    },
    subtract: (state) => {
      state.step--;
    },
    increment: (state, action) => {
      state.step += action.payload;
    },
    decrement: (state, action) => {
      state.step -= action.payload;
    },
  },
});

export const {
  add,
  subtract,
  increment,
  decrement,
} = counterSlice.actions;
export default counterSlice.reducer;
