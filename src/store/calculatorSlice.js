import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    lastValue: 0,
    currentValue: 0,
    operation: {
      func: null,
      symbol: "",
    },
  },
  reducers: {
    setOperation: (state, action) => {
      state.operation.func = action.payload;
      state.lastValue = state.currentValue;
      state.currentValue = 0;
      switch (action.payload) {
        case increment:
          state.operation.symbol = "+";
          break;
        case decrement:
          state.operation.symbol = "-";
          break;
        case multiplication:
          state.operation.symbol = "*";
          break;
        case division:
          state.operation.symbol = "/";
          break;
        case intDiv:
          state.operation.symbol = "//";
          break;
        case modulo:
          state.operation.symbol = "%";
          break;
        default:
          state.operation.symbol = "";
          break;
      }
    },
    invokeOperation: (state) => {
      state.operation.func(state);
      state.currentValue = state.lastValue;
      state.lastValue = 0;
      state.operation.func = null;
      state.operation.symbol = "";
    },
    increment: (state) => {
      state.lastValue += state.currentValue;
    },
    decrement: (state) => {
      state.lastValue -= state.currentValue;
    },
    multiplication: (state) => {
      state.lastValue *= state.currentValue;
    },
    division: (state) => {
      state.lastValue /= state.currentValue;
    },
    intDiv: (state) => {
      state.lastValue = Math.floor(state.lastValue / state.currentValue);
    },
    modulo: (state) => {
      state.lastValue %= state.currentValue;
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
      state.operation.func = null;
      state.operation.symbol = "";
    },
  },
});

export const {
  setOperation,
  invokeOperation,
  increment,
  decrement,
  multiplication,
  division,
  intDiv,
  modulo,
  addDigit,
  deleteLastDigit,
  softReset,
  hardReset,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
