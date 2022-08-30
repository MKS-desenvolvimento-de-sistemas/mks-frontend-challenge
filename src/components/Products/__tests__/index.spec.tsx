import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductsList from "../";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../../redux/";
import { IProduct } from "../../../types/api";

const productCartExampleI: IProduct = {
  id: 1,
  name: "EXEMPLO 1",
  brand: "Exemplo 1",
  description: "Exemplo 1",
  price: "200",
  photo: "/vercel.svg",
  updatedAt: "2022",
  createdAt: "2022",
};

const productCartExampleII: IProduct = {
  id: 2,
  name: "EXEMPLO 2",
  brand: "Exemplo 2",
  description: "Exemplo 2",
  price: "350",
  photo: "/vercel.svg",
  updatedAt: "2022",
  createdAt: "2022",
};

const productsExample = [productCartExampleI, productCartExampleII];

describe("ProductsList Component", () => {
  it("should render the products list component correctly", () => {
    render(
      <Provider store={store}>
        <ProductsList products={productsExample} />
      </Provider>
    );

    const productsList = screen.getByTestId("products-list");

    expect(productsList).toHaveTextContent("EXEMPLO 1");
    expect(productsList).toHaveTextContent("EXEMPLO 2");
  });

  it("should match the snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ProductsList products={productsExample} />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
