import { useSelector } from "react-redux";
import CalculatorPage from "./page/calculatorPage";

function App() {
  const calculator = useSelector((state) => state.calculator);

  return (
    <div data-testid="calcOutput">
      {calculator.operation !== "" ? (
        <p>
          {calculator.lastValue} {calculator.operation}{" "}
          {calculator.currentValue}
        </p>
      ) : (
        <p>{calculator.currentValue}</p>
      )}
      <CalculatorPage />
    </div>
  );
}

export default App;
