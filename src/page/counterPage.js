import { useDispatch } from "react-redux";
import { add, subtract } from "../store/counterSlice";

export default function CounterPage() {
  //const state = useSelector((state) => state.counter.step);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(add())}>Add</button>
      <button onClick={() => dispatch(subtract())}>Subtract</button>
    </div>
  );
}
