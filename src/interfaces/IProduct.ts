export interface IProduct {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
}

export interface ICartProduct extends IProduct {
  amount: number;
}
