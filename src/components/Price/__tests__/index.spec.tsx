import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Price from "../";
import renderer from "react-test-renderer";

describe("Price Component", () => {
  it("should render the price with type product correctly", () => {
    render(<Price price={200} type="product" />);

    const price = screen.getByTestId("price");

    expect(price).toHaveTextContent("R$200");
    expect(price).toHaveStyle({
      padding: "5px 10px" || "4px 7px",
    });
  });

  it("should render the price with type cart correctly", () => {
    render(<Price price={200} type="cart" />);

    const price = screen.getByTestId("price");

    expect(price).toHaveTextContent("R$200");
    expect(price).toHaveStyle({
      padding: "8px 17px" || "0",
    });
  });

  it("should match the snapshot - type product", () => {
    const tree = renderer.create(<Price price={200} type="product" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should match the snapshot - type cart", () => {
    const tree = renderer.create(<Price price={200} type="cart" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
