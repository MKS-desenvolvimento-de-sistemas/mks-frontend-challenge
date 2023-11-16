import renderWithRedux from "./util/renderWithRedux";
import { screen, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { products } from "./mocks/products";

describe("Testes para o MKS frontend Challenge", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue({ products }),
    });
  });

  afterEach(() => jest.clearAllMocks());

  it("Testa se os produtos são exibidos corretamentena tela", async () => {
    renderWithRedux(<App />);
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC"
      );
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    const product1 = await screen.findByText(/Iphone 11 128 GB/i);
    const product2 = await screen.findByText(/AirPods/i);
    const product3 = await screen.findByText(/Macbook Air/i);
    const product4 = await screen.findByText(/iPhone 12 64 GB/i);
    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
    expect(product3).toBeInTheDocument();
    expect(product4).toBeInTheDocument();
  });
  it('Testa se ao clicar no botão "Comprar" o item é adicionado ao carrinho', async () => {
    renderWithRedux(<App />);
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC"
      );
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    const product1 = await screen.findByTestId(/buy-1/);
    const product2 = await screen.findByTestId(/buy-2/);

    userEvent.click(product1);
    userEvent.click(product2);

    const cart = screen.getByTestId("cart-button");
    userEvent.click(cart);

    const productCart1 = screen.getByTestId(/product-cart-1/i);
    const productCart2 = screen.getByTestId(/product-cart-2/i);

    expect(productCart1).toHaveTextContent("Iphone 11 128 GB");
    expect(productCart2).toHaveTextContent("AirPods");
  });

  it('Testa se ao clicar no botão "Comprar" mais de uma vez, o item é adicionado ao carrinho de acordo com a quantidade de cliks', async () => {
    renderWithRedux(<App />);
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC"
      );
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    const product1 = await screen.findByTestId(/buy-1/);
    const product2 = await screen.findByTestId(/buy-2/);
    const productPrice1 = await screen.findByTestId(/product-price-1/);
    const productPrice2 = await screen.findByTestId(/product-price-2/);

    userEvent.click(product1);
    userEvent.click(product1);
    userEvent.click(product1);
    userEvent.click(product2);
    userEvent.click(product2);

    const cart = screen.getByTestId("cart-button");
    userEvent.click(cart);

    const productCartCount1 = screen.getByTestId(/product-cart-count-1/i);
    const productCartCount2 = screen.getByTestId(/product-cart-count-2/i);
    const productCartPrice1 = screen.getByTestId(/product-cart-price-1/i);
    const productCartPrice2 = screen.getByTestId(/product-cart-price-2/i);

    expect(productCartCount1).toHaveTextContent("3");
    expect(productCartCount2).toHaveTextContent("2");
    expect(productCartPrice1.textContent).toBe(
      `R$${Number(productPrice1.textContent.split("R$")[1]) * 3}`
    );
    expect(productCartPrice2.textContent).toBe(
      `R$${Number(productPrice2.textContent.split("R$")[1]) * 2}`
    );
  });

  it("Testa se é possivel alterar a quantidade de itens pela aba cart", async () => {
    renderWithRedux(<App />);
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC"
      );
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    const product1 = await screen.findByTestId(/buy-1/);
    const product2 = await screen.findByTestId(/buy-2/);
    const productPrice1 = await screen.findByTestId(/product-price-1/);
    const productPrice2 = await screen.findByTestId(/product-price-2/);

    userEvent.click(product1);
    userEvent.click(product2);

    const cart = screen.getByTestId("cart-button");
    userEvent.click(cart);

    const productCartCount1 = screen.getByTestId(/product-cart-count-1/i);
    const productCartCount2 = screen.getByTestId(/product-cart-count-2/i);
    const productCartPrice1 = screen.getByTestId(/product-cart-price-1/i);
    const productCartPrice2 = screen.getByTestId(/product-cart-price-2/i);

    console.log(productCartCount1);
    expect(productCartCount1).toHaveTextContent("1");
    expect(productCartCount2).toHaveTextContent("1");
    expect(productCartPrice1.textContent).toBe(
      `R$${productPrice1.textContent.split("R$")[1]}`
    );
    expect(productCartPrice2.textContent).toBe(
      `R$${productPrice2.textContent.split("R$")[1]}`
    );

    userEvent.click(screen.getByTestId(/more-button-product-1/i));
    expect(screen.getByTestId(/product-cart-count-1/i)).toHaveTextContent("2");
    expect(screen.getByTestId(/product-cart-price-1/i).textContent).toBe(
      `R$${Number(productPrice1.textContent.split("R$")[1]) * 2}`
    );

    userEvent.click(screen.getByTestId(/more-button-product-1/i));
    expect(screen.getByTestId(/product-cart-count-1/i)).toHaveTextContent("3");
    expect(screen.getByTestId(/product-cart-price-1/i).textContent).toBe(
      `R$${Number(productPrice1.textContent.split("R$")[1]) * 3}`
    );

    userEvent.click(screen.getByTestId(/less-button-product-1/i));
    expect(screen.getByTestId(/product-cart-count-1/i)).toHaveTextContent("2");
    expect(screen.getByTestId(/product-cart-price-1/i).textContent).toBe(
      `R$${Number(productPrice1.textContent.split("R$")[1]) * 2}`
    );

    userEvent.click(screen.getByTestId(/more-button-product-2/i));
    expect(screen.getByTestId(/product-cart-count-2/i)).toHaveTextContent("2");
    expect(screen.getByTestId(/product-cart-price-2/i).textContent).toBe(
      `R$${Number(productPrice2.textContent.split("R$")[1]) * 2}`
    );

    userEvent.click(screen.getByTestId(/more-button-product-2/i));
    expect(screen.getByTestId(/product-cart-count-2/i)).toHaveTextContent("3");
    expect(screen.getByTestId(/product-cart-price-2/i).textContent).toBe(
      `R$${Number(productPrice2.textContent.split("R$")[1]) * 3}`
    );

    userEvent.click(screen.getByTestId(/less-button-product-2/i));
    expect(screen.getByTestId(/product-cart-count-2/i)).toHaveTextContent("2");
    expect(screen.getByTestId(/product-cart-price-2/i).textContent).toBe(
      `R$${Number(productPrice2.textContent.split("R$")[1]) * 2}`
    );
  });
  it("Testa se ao clicar em excluir o item, o item é removido", async () => {
    renderWithRedux(<App />);
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC"
      );
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    const product1 = await screen.findByTestId(/buy-1/);
    const product2 = await screen.findByTestId(/buy-2/);

    userEvent.click(product1);
    userEvent.click(product2);

    const cart = screen.getByTestId("cart-button");
    userEvent.click(cart);

    const productCart1 = screen.getByTestId(/product-cart-1/i);
    const productCart2 = screen.getByTestId(/product-cart-2/i);

    const removeItem1 = screen.getByTestId(/remove-item-1/i);
    const removeItem2 = screen.getByTestId(/remove-item-2/i);

    console.log(removeItem1);

    userEvent.click(removeItem1);
    expect(productCart1).not.toBeInTheDocument();

    userEvent.click(removeItem2);
    expect(productCart2).not.toBeInTheDocument();
  });
});
