import { createContext } from 'react';
import { Product, ProductList } from '../interface/type';

export type CartContextType = {
  cart: ProductList;
  addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType>({ cart: { products: [] },
  addToCart: () => {} });

export default CartContext;
