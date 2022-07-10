import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    lastValue: 0,
    currentValue: 0,
    operation: "",
    isDecimal: false,
  },
  reducers: {
    setOperation: (state, action) => {
      state.operation = action.payload;
      state.lastValue = +state.currentValue;
      state.currentValue = 0;
      state.isDecimal = false;
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
      if (!state.isDecimal) {
        if (state.currentValue < 0) {
          state.currentValue = state.currentValue * 10 - action.payload;
        } else {
          state.currentValue = state.currentValue * 10 + action.payload;
        }
      } else {
        state.currentValue += action.payload.toString();
      }
    },
    deleteLastDigit: (state) => {
      if (!state.isDecimal) {
        state.currentValue = Math.floor(state.currentValue / 10);
      } else {
        if (state.currentValue.toString().length > 1) {
          if (
            state.currentValue.toString()[
              state.currentValue.toString().length - 1
            ] === "."
          ) {
            state.isDecimal = false;
          }
          state.currentValue = state.currentValue.toString().slice(0, -1);
        } else {
          state.currentValue = 0;
        }
      }
    },
    softReset: (state) => {
      state.currentValue = 0;
      state.isDecimal = false;
    },
    hardReset: (state) => {
      state.currentValue = 0;
      state.lastValue = 0;
      state.operation = "";
      state.isDecimal = false;
    },
    toNegativeNumber: (state) => {
      state.currentValue = -state.currentValue;
    },
    addDecimalPoint: (state) => {
      if (!state.isDecimal) {
        state.currentValue += ".";
        state.isDecimal = true;
      }
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
  toNegativeNumber,
  addDecimalPoint,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
