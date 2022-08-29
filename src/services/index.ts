import { IProducts } from "../types/api";

export const baseUrl =
  "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products";

export const getProducts = async (
  page: number = 1,
  rows: number = 8,
  sortBy: "id" | "name" | "price" = "id",
  orderBy: "ASC" | "DESC" = "ASC"
): Promise<IProducts> => {
  const response = await fetch(
    `${baseUrl}?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`
  );

  let data = await response.json();

  return data.products;
};
