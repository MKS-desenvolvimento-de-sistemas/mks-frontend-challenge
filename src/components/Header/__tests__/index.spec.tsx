import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../../redux/";

describe("Header Component", () => {
  it("should render the Link correctly", () => {
    const openCart = jest.fn();
    render(
      <Provider store={store}>
        <Header openCart={openCart} />
      </Provider>
    );

    const header = screen.getByTestId("header");

    expect(header).toHaveTextContent("MKS");
    expect(header).toHaveTextContent("Sistemas");
  });

  it("should render the Theme Button correctly", () => {
    const openCart = jest.fn();
    render(
      <Provider store={store}>
        <Header openCart={openCart} />
      </Provider>
    );

    const themeButton = screen.getByTestId("theme-button");
    expect(themeButton.getAttribute("type")).toEqual("button");
    expect(themeButton.getAttribute("title")).toEqual("Ativar Modo Escuro");

    fireEvent.click(themeButton);

    expect(themeButton.getAttribute("title")).toEqual("Ativar Modo Claro");
  });

  it("should render the Cart Button correctly", () => {
    const openCart = jest.fn();
    render(
      <Provider store={store}>
        <Header openCart={openCart} />
      </Provider>
    );

    const cartButton = screen.getByTestId("cart-button");
    expect(cartButton.getAttribute("type")).toEqual("button");
    expect(cartButton.getAttribute("title")).toEqual("Abrir Carrinho");
  });

  it("should match the snapshot", () => {
    const openCart = jest.fn();
    const tree = renderer
      .create(
        <Provider store={store}>
          <Header openCart={openCart} />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
