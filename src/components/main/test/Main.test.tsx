import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Main from "../Main";
import {
  ProductsDataContext,
  ProductsDataContextProps,
} from "@/context/data/useProductData";

describe("<Main />", () => {
  const productData = {
    count: 1,
    products: [
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
    ],
  };
  // Simula dados do contexto
  const simulatorContext: ProductsDataContextProps = {
    error: null,
  };
  it("should show the loading card", () => {
    render(
      <ProductsDataContext.Provider value={simulatorContext}>
        <Main />
      </ProductsDataContext.Provider>
    );

    const loading = screen.getAllByLabelText("loading");

    // Verifica se pelo mmenos uma das 8 telas de login está sendo exibida
    expect(loading[0]).toBeInTheDocument();
  });

  it("should show the error page", () => {
    // Adiciona um erro vindo do contexto
    render(
      <ProductsDataContext.Provider
        value={{ ...simulatorContext, error: new Error() }}
      >
        <Main />
      </ProductsDataContext.Provider>
    );

    // Procura a mensagem de erro
    const errorPage = screen.getByText("Ops... Ocorreu um erro inesperado.");

    // Verifica se a mensagem de erro está sendo exibida na tela
    expect(errorPage).toBeInTheDocument();
  });

  it("should render correctly the product", () => {
    // Adiciona um produto fake no conexto
    render(
      <ProductsDataContext.Provider
        value={{ ...simulatorContext, data: productData }}
      >
        <Main />
      </ProductsDataContext.Provider>
    );

    // Procura a descrição do produto
    const product = screen.getByText ("description of product")

    // Verifica se a descrição do produto fake foi exibida na tela
    expect(product).toBeInTheDocument()
  });
});
