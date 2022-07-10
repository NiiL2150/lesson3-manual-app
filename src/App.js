import { useSelector } from "react-redux";
import CalculatorPage from "./page/calculatorPage";

function App() {
  const calculator = useSelector((state) => state.calculator);

  return (
    <div>
      {calculator.operation.symbol !== "" ? <p>{calculator.lastValue} {calculator.operation.symbol} {calculator.currentValue}</p> : <p>{calculator.currentValue}</p>}
      <CalculatorPage/>
    </div>
  );
}

export default App;
