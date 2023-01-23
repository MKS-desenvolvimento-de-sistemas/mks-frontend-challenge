export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProductCart extends IProduct {
  quantity: number;
}

export interface IProducts {
  products: IProduct[];
}
