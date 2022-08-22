import axios from "axios";

const api = axios.create({
  baseURL: "https://mks-frontend-challenge-api.herokuapp.com",
});

export interface RequestParams {
  page: number;
  rows: number;
  sortBy: string;
  orderBy: string;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface FetchProductsResponse {
  products: Product[];
}

export default {
  async fetchProducts(params: RequestParams): Promise<Product[] | undefined> {
    try {
      const response = await api.get<FetchProductsResponse>(
        "/api/v1/products",
        {
          params,
        }
      );
      return response.data.products;
    } catch (e) {
      console.error("Falha ao obter produtos", e);
    }
  },
};
