import { DataApi, Product } from "@/@types/Products";
import axios from "axios";

const BASE_URL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1';

export const fetchProducts = async (page: number, rows: number): Promise<Product> => {
  try {
    const response = await axios.get(`${BASE_URL}/products`, {
      params: {
        page,
        rows,
        sortBy: 'id',
        orderBy: 'DESC',
      },
    });

    console.log(response.data.products);


    return response.data.products;
  } catch (error) {

    throw new Error('Erro ao buscar produtos da API');
  }
};