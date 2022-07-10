import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    lastValue: 0,
    currentValue: 0,
    operation: ""
  },
  reducers: {
    setOperation: (state, action) => {
      console.log(action.payload);
      state.operation = action.payload;
      state.lastValue = state.currentValue;
      state.currentValue = 0;
    },
    invokeOperation: (state) => {
      switch (state.operation) {
        case "+":
          state.lastValue += state.currentValue;
          break;
        case "-":
          state.lastValue -= state.currentValue;
          break;
        case "*":
          state.lastValue *= state.currentValue;
          break;
        case "/":
          state.lastValue /= state.currentValue;
          break;
        case "//":
          state.lastValue = Math.floor(state.lastValue / state.currentValue);
          break;
        case "%":
          state.lastValue %= state.currentValue;
          break;
        default:
          break;
      }
      state.currentValue = state.lastValue;
      state.lastValue = 0;
      state.operation = "";
    },
    addDigit: (state, action) => {
      state.currentValue = state.currentValue * 10 + action.payload;
    },
    deleteLastDigit: (state) => {
      state.currentValue = Math.floor(state.currentValue / 10);
    },
    softReset: (state) => {
      state.currentValue = 0;
    },
    hardReset: (state) => {
      state.currentValue = 0;
      state.lastValue = 0;
      state.operation = "";
    },
  },
});

export const {
  setOperation,
  invokeOperation,
  addDigit,
  deleteLastDigit,
  softReset,
  hardReset,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
