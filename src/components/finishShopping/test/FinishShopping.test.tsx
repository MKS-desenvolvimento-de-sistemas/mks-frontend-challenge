import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import FinishShopping from "../FinishShopping";
import {
  ShoppingContext,
  ShoppingContextProps,
} from "@/context/shopping/useShopping";
import userEvent from "@testing-library/user-event";

describe("<FinishShopping />", () => {
  const closeShopping = jest.fn();

  const productData = [
    {
      id: 1,
      name: "Product simulated",
      brand: "",
      description: "description of product", // Simula um dado de um produto
      photo: "",
      price: "1000",
      createdAt: "",
      updatedAt: "",
    },
  ];
  // Simula dados do contexto
  const simulatorContext: ShoppingContextProps = {
    buyProduct: jest.fn(),
    deleteProduct: jest.fn(),
    shopping: productData,
    setTotal: jest.fn(),
    total: { 1: Number(productData[0].price) },
  };

  it("should render correctly", () => {
    render(<FinishShopping closeShopping={closeShopping} />);

    // Procura o texto
    const title = screen.getByText("Carrinho de compras");

    // Verifica se texto esta na tela
    expect(title).toBeInTheDocument();
  });

  it("should closed FinishShopping", () => {
    render(<FinishShopping closeShopping={closeShopping} />);

    // CLica no botao de fechar o carrinho
    const closedButton = screen.getByText("X");
    fireEvent.click(closedButton);

    // Verifica se a função de fechar o carrinho foi chamada
    expect(closeShopping).toHaveBeenCalledTimes(1);
  });

  it("should render the products", () => {
    render(
      <ShoppingContext.Provider value={simulatorContext}>
        <FinishShopping closeShopping={closeShopping} />
      </ShoppingContext.Provider>
    );

    // Procura o nome do produto que está no conexto
    const product = screen.getByText("Product simulated");

    // Verifica se o nome do produto está sendo exibido na tela
    expect(product).toBeInTheDocument();
  });
});
