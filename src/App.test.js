import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";

test("test 1", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  fireEvent.click(screen.getByText("2"));
  fireEvent.click(screen.getByText("4"));
  fireEvent.click(screen.getByText("+/-"));
  fireEvent.click(screen.getByText("5"));
  fireEvent.click(screen.getByText("*"));
  fireEvent.click(screen.getByText("."));
  fireEvent.click(screen.getByText("2"));
  fireEvent.click(screen.getByText("5"));
  const elem3 = screen.getByText("-245 * 0.25");
  expect(elem3).toBeInTheDocument();
  fireEvent.click(screen.getByText("DEL"));
  const elem1 = screen.getByText("-245 * 0.2");
  expect(elem1).toBeInTheDocument();
  fireEvent.click(screen.getByText("="));
  const elem2 = screen.getByText("-49");
  expect(elem2).toBeInTheDocument();
});
