import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Cart from "../";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../../redux/";
import { IProductCart } from "../../../types/api";

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

const cartExample = [productCartExampleI, productCartExampleII];

describe("Cart Component", () => {
  it("should render the cart component correctly", () => {
    const closeCart = jest.fn();
    render(
      <Provider store={store}>
        <Cart cart={cartExample} closeCart={closeCart} />
      </Provider>
    );

    const cart = screen.getByTestId("cart");
    const cartList = screen.getByTestId("cart-list");

    expect(cart).toHaveTextContent("Carrinho de Compras");
    expect(cartList).toHaveTextContent("EXEMPLO 1");
    expect(cartList).toHaveTextContent("EXEMPLO 2");
  });

  it("should render the total price correctly", () => {
    const closeCart = jest.fn();
    render(
      <Provider store={store}>
        <Cart cart={cartExample} closeCart={closeCart} />
      </Provider>
    );

    const cartTotal = screen.getByTestId("cart-total");

    // 200 * 2 (Produto 1) + 350 * 1 (Produto 2)
    expect(cartTotal).toHaveTextContent("R$ 750");
  });

  it("should match the snapshot", () => {
    const closeCart = jest.fn();
    const tree = renderer
      .create(
        <Provider store={store}>
          <Cart cart={cartExample} closeCart={closeCart} />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
