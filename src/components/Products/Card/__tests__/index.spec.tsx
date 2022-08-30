import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductCard from "../";
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

const formatterDescription =
  productExample.description.length > 63
    ? productExample.description.slice(0, 64) + "..."
    : productExample.description;

describe("ProductCard Component", () => {
  it("should render the product card correctly", () => {
    render(
      <Provider store={store}>
        <ProductCard {...productExample} />
      </Provider>
    );

    const card = screen.getByTestId("card");
    const cardImage = screen.getByTestId("card--image");

    expect(cardImage).toHaveStyle({
      backgroundImage: `url(${productExample.photo})`,
    });

    expect(card).toHaveTextContent(productExample.name);
    expect(card).toHaveTextContent(formatterDescription);
    expect(card).toHaveTextContent(`R$${productExample.price}`);
    expect(card).toHaveTextContent("Comprar");
  });

  it("should match the snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ProductCard {...productExample} />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
