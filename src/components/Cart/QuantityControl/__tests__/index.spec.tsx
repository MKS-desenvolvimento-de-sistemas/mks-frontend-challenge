import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import QuantityControl from "../";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../../../redux/";
import { useState } from "react";

interface IQuantityControlWithStateProps {
  initialState?: number;
}

const QuantityControlWithState = ({
  initialState = 1,
}: IQuantityControlWithStateProps) => {
  const [quantity, setQuantity] = useState(initialState);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <Provider store={store}>
      <QuantityControl
        quantity={quantity}
        increment={increment}
        decrement={decrement}
      />
    </Provider>
  );
};

describe("QuantityControl Component", () => {
  it("should start with zero value by default", () => {
    render(<QuantityControlWithState />);

    const display = screen.getByTestId("quantity-display");

    expect(display).toHaveTextContent("1");
  });

  it("should render the decrement button correctly", () => {
    render(<QuantityControlWithState />);

    const decrementButton = screen.getByTestId("decrement-button");

    expect(decrementButton).toHaveTextContent("-");
    expect(decrementButton.getAttribute("type")).toEqual("button");
    expect(decrementButton.getAttribute("title")).toEqual(
      "Diminuir Quantidade"
    );
  });

  it("should render the increment button correctly", () => {
    render(<QuantityControlWithState />);

    const incrementButton = screen.getByTestId("increment-button");

    expect(incrementButton).toHaveTextContent("+");
    expect(incrementButton.getAttribute("type")).toEqual("button");
    expect(incrementButton.getAttribute("title")).toEqual(
      "Aumentar Quantidade"
    );
  });

  it("should not reduce the value if it is less than or equal to 1", () => {
    render(<QuantityControlWithState />);

    const decrementButton = screen.getByTestId("decrement-button");
    const display = screen.getByTestId("quantity-display");

    expect(display).toHaveTextContent("1");

    // QUANTITY É MENOR QUE 1 QUANDO INICIA
    expect(decrementButton).toHaveStyle({ cursor: "not-allowed" });

    fireEvent.click(decrementButton);

    // VALOR NÃO DIMINUIR, POIS NÃO É MAIOR QUE 1
    expect(display).toHaveTextContent("1");
  });

  it("should reduce the value if it is greater than 1", () => {
    render(<QuantityControlWithState initialState={3} />);

    const decrementButton = screen.getByTestId("decrement-button");
    const display = screen.getByTestId("quantity-display");

    expect(display).toHaveTextContent("3");

    expect(decrementButton).toHaveStyle({ cursor: "pointer" });

    fireEvent.click(decrementButton);

    expect(display).toHaveTextContent("2");
  });

  it("should increase the value", () => {
    render(<QuantityControlWithState />);

    const incrementButton = screen.getByTestId("increment-button");
    const display = screen.getByTestId("quantity-display");

    expect(display).toHaveTextContent("1");

    fireEvent.click(incrementButton);

    expect(display).toHaveTextContent("2");
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<QuantityControlWithState />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
