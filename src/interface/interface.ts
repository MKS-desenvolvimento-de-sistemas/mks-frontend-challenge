export interface ProductDataProps {
  count: number;
  products: ProductProps[];
}

export interface ProductProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface CardProps {
  image: string;
  name: string;
  price: string;
  description: string;
  id: number;
}
