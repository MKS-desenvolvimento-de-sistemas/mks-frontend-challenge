export interface ProductDataProps {
  count: number;
  products: Array<{
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updatedAt: string;
  }>;
}
