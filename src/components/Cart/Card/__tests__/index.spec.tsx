import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import CartCard from "../";
import renderer from "react-test-renderer";
import { IProductCart } from "../../../../types/api";
import { Provider } from "react-redux";
import store from "../../../../redux/";

const productExample: IProductCart = {
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

const formatterDescription =
  productExample.description.length > 63
    ? productExample.description.slice(0, 64) + "..."
    : productExample.description;

describe("CartCard Component", () => {
  it("should render the cart card correctly", () => {
    render(
      <Provider store={store}>
        <CartCard {...productExample} />
      </Provider>
    );

    const card = screen.getByTestId("cart-card");
    const cardImage = screen.getByTestId("cart-card--image");

    expect(cardImage).toHaveStyle({
      backgroundImage: `url(${productExample.photo})`,
    });

    expect(card).toHaveTextContent(productExample.name);
    expect(card).toHaveTextContent(`${productExample.quantity}`);
    expect(card).toHaveTextContent(`R$${productExample.price}`);
    expect(card).toHaveTextContent("+");
    expect(card).toHaveTextContent("-");
  });

  it("should update the quantity of the product in the cart", () => {
    render(
      <Provider store={store}>
        <CartCard {...productExample} />
      </Provider>
    );

    const card = screen.getByTestId("cart-card");
    const decrementButton = screen.getByTestId("decrement-button");
    const incrementButton = screen.getByTestId("increment-button");

    // INICIA EM 2
    expect(card).toHaveTextContent("2");

    // DIMINUI UMA UNIDADE
    fireEvent.click(decrementButton);

    expect(card).toHaveTextContent("1");

    // NÃO DIMINUI
    fireEvent.click(decrementButton);

    expect(card).toHaveTextContent("1");

    // AUMENTA UMA UNIDADE
    fireEvent.click(incrementButton);

    expect(card).toHaveTextContent("2");
  });

  it("should remove product from cart", async () => {
    render(
      <Provider store={store}>
        <CartCard {...productExample} />
      </Provider>
    );

    const removeButton = screen.getByTestId("cart-card--remove");

    fireEvent.click(removeButton);

    const card = await screen.findByTestId("cart-card");

    waitForElementToBeRemoved(card).then(() => {
      expect(card).not.toBeInTheDocument();
    });
  });

  it("should match the snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CartCard {...productExample} />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
