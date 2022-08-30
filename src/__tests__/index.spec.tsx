import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/";
import { Provider } from "react-redux";
import store from "../redux/";
import { IProductCart } from "../types/api";

const productCartExampleI: IProductCart = {
  id: 1,
  name: "EXEMPLO 1",
  brand: "Exemplo 1",
  description: "Exemplo 1",
  price: "200",
  photo: "/vercel.svg",
  updatedAt: "2022",
  createdAt: "2022",
  quantity: 2,
};

const productCartExampleII: IProductCart = {
  id: 2,
  name: "EXEMPLO 2",
  brand: "Exemplo 2",
  description: "Exemplo 2",
  price: "350",
  photo: "/vercel.svg",
  updatedAt: "2022",
  createdAt: "2022",
  quantity: 1,
};

const productsExample = [productCartExampleI, productCartExampleII];

describe("Home Page", () => {
  it("cart should start closed by default", () => {
    render(
      <Provider store={store}>
        <Home products={productsExample} />
      </Provider>
    );

    expect(screen.queryByTestId("cart")).toBeFalsy();
  });

  it("should open the cart by clicking on the corresponding button", () => {
    render(
      <Provider store={store}>
        <Home products={productsExample} />
      </Provider>
    );

    const cartButton = screen.getByTestId("cart-button");
    expect(screen.queryByTestId("cart")).toBeFalsy();
    fireEvent.click(cartButton);
    expect(screen.queryByTestId("cart")).toBeTruthy();
  });

  it("should add a product to cart when click on buybutton", async () => {
    render(
      <Provider store={store}>
        <Home products={productsExample} />
      </Provider>
    );

    const cartButton = screen.getByTestId("cart-button");
    fireEvent.click(cartButton);

    const cartList = await screen.findByTestId("cart-list");
    expect(cartList).not.toHaveTextContent("EXEMPLO 1");
    expect(cartButton).toHaveTextContent("0");

    const buyButton = screen.getAllByTestId("buy-button")[0];
    fireEvent.click(buyButton);

    expect(cartButton).toHaveTextContent("1");
    expect(cartList).toHaveTextContent("EXEMPLO 1");
  });
});
