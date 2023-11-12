type Product = {
  id: number,
  name: string,
  price: number,
  description: string,
};

export type ProductList = {
  products: Product[],
};

export class RequestAPI {
  static async getProducts(): Promise<ProductList> {
    try {
      const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC');

      if (!response.ok) {
        throw new Error('Erro ao buscar a API');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Erro ao buscar a API ', error);
      throw error;
    }
  }
}
