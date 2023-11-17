import api from "./http";

export const getProducts = async (
  page: number,
  rows: number,
  sortBy = "id",
  orderBy = "ASC"
) => {
  try {
    const { data } = await api.get(
      `products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`
    );

    return data;
  } catch (error) {
    return console.error(error);
  }
};
