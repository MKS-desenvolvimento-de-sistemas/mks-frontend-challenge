import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  ShoppingContext,
  ShoppingContextProps,
} from "@/context/shopping/useShopping";
import CardOfShopping from "../CardOfShopping";

describe("<CardOfShopping />", () => {
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
  it("should delete of product", async () => {
    const deleteProductMock = jest.fn();
    render(
      <ShoppingContext.Provider
        value={{ ...simulatorContext, deleteProduct: deleteProductMock }}
      >
        <CardOfShopping product={productData[0]} />
      </ShoppingContext.Provider>
    );

    // Clica no botão de deletar o produto
    const deleteProduct = screen.getByTestId("deleteProduct");
    fireEvent.click(deleteProduct);

    // Verifica se a função de deletar o produto foi executada
    expect(deleteProductMock).toHaveBeenCalled();
  });

  it("should increase and decrease if clicked", () => {
    render(
      <ShoppingContext.Provider value={simulatorContext}>
        <CardOfShopping product={productData[0]} />
      </ShoppingContext.Provider>
    );

    const countElement = screen.getByTestId("count");
    const increaseButton = screen.getByTestId("increase");
    const decreaseButton = screen.getByTestId("decrease");

    // Verifica se o contador inicia em 1
    expect(countElement.textContent).toBe("1");

    // Clica no botão de aumentar e verifica se o contador foi para 2
    fireEvent.click(increaseButton);
    expect(countElement.textContent).toBe("2");

    // Clica no botão de diminuir e verifica se o contador voltou para 1
    fireEvent.click(decreaseButton);
    expect(countElement.textContent).toBe("1");
  });
});
