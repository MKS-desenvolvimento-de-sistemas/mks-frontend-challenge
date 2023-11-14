import { createContext } from 'react';
import { Product, ProductList } from '../interface/type';

export type CartContextType = {
  cart: ProductList;
  addToCart: (product: Product) => void;
  upDateCart: (id: number) => void;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartContext = createContext<CartContextType>({
  cart: { products: [] },
  addToCart: () => { },
  upDateCart: () => { },
  showCart: false,
  setShowCart(): void {
    throw new Error('Function not implemented.');
  },
});

export default CartContext;
