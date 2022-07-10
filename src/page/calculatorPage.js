import { useDispatch, useSelector } from "react-redux";
import {
  setOperation,
  invokeOperation,
  addDigit,
  deleteLastDigit,
  softReset,
  hardReset,
  toNegativeNumber,
  addDecimalPoint
} from "../store/calculatorSlice";

export default function CalculatorPage() {
  const dispatch = useDispatch();
  const calculator = useSelector((state) => state.calculator);

  return (
    <div>
      {calculator.operation === "" ? (
        <div>
          <button onClick={() => dispatch(setOperation("+"))}>+</button>
          <button onClick={() => dispatch(setOperation("-"))}>-</button>
          <button onClick={() => dispatch(setOperation("*"))}>*</button>
          <button onClick={() => dispatch(setOperation("/"))}>/</button>
          <button onClick={() => dispatch(setOperation("//"))}>//</button>
          <button onClick={() => dispatch(setOperation("%"))}>%</button>
        </div>
      ) : (
        <div>
          <button onClick={() => dispatch(invokeOperation())}> = </button>
          <button onClick={() => dispatch(hardReset())}>C</button>
        </div>
      )}
      <button onClick={() => dispatch(softReset())}>CE</button>
      <button onClick={() => dispatch(toNegativeNumber())}>+/-</button>
      <button onClick={() => dispatch(addDecimalPoint())}>.</button>

      <br />

      {Array.from({ length: 10 }, (_, i) => {
        return <button onClick={() => dispatch(addDigit(i))}>{i}</button>;
      })}
      <button onClick={() => dispatch(deleteLastDigit())}>DEL</button>
    </div>
  );
}
