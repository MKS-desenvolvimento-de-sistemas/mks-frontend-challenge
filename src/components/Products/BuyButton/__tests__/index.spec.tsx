import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BuyButton from "../";
import renderer from "react-test-renderer";
import { IProduct } from "../../../../types/api";
import { Provider } from "react-redux";
import store from "../../../../redux/";

const productExample: IProduct = {
  id: 1,
  name: "EXEMPLO 1",
  brand: "Exemplo 1",
  description: "Exemplo 1",
  price: "200",
  photo: "/vercel.svg",
  updatedAt: "2022",
  createdAt: "2022",
};

describe("BuyButton Component", () => {
  it("should render the BuyButton correctly", () => {
    render(
      <Provider store={store}>
        <BuyButton product={productExample} />
      </Provider>
    );

    const button = screen.getByTestId("buy-button");

    expect(button).toHaveTextContent("Comprar");
    expect(button.getAttribute("type")).toEqual("button");
    expect(button.getAttribute("title")).toEqual("Adicionar ao Carrinho");
  });

  it("should match the snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BuyButton product={productExample} />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
