import { FC, ReactNode } from 'react';
import CartContext from './cartContext';
import { useHookCarts } from './useHooks';
import { Product } from '../interface/type';

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { cart, setCart } = useHookCarts();

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      // Lógica para adicionar o produto ao carrinho
      return { products: [...prevCart.products, product] };
    });
  };

  return (
    <CartContext.Provider value={ { cart, addToCart } }>
      {children}
    </CartContext.Provider>
  );
};
