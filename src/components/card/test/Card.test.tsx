import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  ShoppingContext,
  ShoppingContextProps,
} from "@/context/shopping/useShopping";
import Card from "../Card";

describe("<Card />", () => {
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

  it("should render product", () => {
    render(
      <ShoppingContext.Provider value={simulatorContext}>
        <Card
          description="description of product"
          id={1}
          image=""
          name="Fake product"
          price="1000"
        />
      </ShoppingContext.Provider>
    );

    // Procura o nome do produto
    const nameProduct = screen.getByText("Fake product");

    // Verifica se o nome do produto fake está sendo exibido na tela
    expect(nameProduct).toBeInTheDocument();
  });

  it("should buy product", () => {
    const buyProduct = jest.fn();
    render(
      <ShoppingContext.Provider value={{ ...simulatorContext, buyProduct }}>
        <Card
          description="description of product"
          id={1}
          image=""
          name="Fake product"
          price="1000"
        />
      </ShoppingContext.Provider>
    );

    // Clica no botão de comprar
    const buy = screen.getByText("COMPRAR");
    fireEvent.click(buy);

    // Verifica se a função de comprar o produto foi chamada
    expect(buyProduct).toHaveBeenCalled();
  });
});
