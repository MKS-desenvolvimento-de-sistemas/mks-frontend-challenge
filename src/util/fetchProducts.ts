import Product from "../interfaces";

const fetchProducts = async (): Promise<[]|Product[]> => {
  const url = 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC';
  const response = await fetch(url);
  const data = await response.json();
  
  if (data.products) {
    return data;
  }
  return []
}

export default fetchProducts;