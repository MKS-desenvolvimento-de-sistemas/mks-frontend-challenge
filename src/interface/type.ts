export type Product = {
  id: number,
  name: string,
  price: number,
  description: string,
  photo: string,
  quantity: number,
};

export type ProductList = {
  products: Product[],
};
