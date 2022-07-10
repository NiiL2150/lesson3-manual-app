import { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice";

export default function CounterPage2() {
  const [count, setCount] = useState();

  const dispatch = useDispatch();

  function changed(e) {
    setCount(e.target.value);
  }

  return (
    <div>
      <input id="count" type="number" placeholder="count" value={count} onChange={changed} />
      <button
        onClick={() => {
          dispatch(increment(+count));
        }}
      >
        Add count
      </button>
      <button
        onClick={() => {
          dispatch(decrement(+count));
        }}
      >
        Sub count
      </button>
    </div>
  );
}
