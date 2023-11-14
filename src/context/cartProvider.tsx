import { FC, ReactNode } from 'react';
import CartContext from './cartContext';
import { useHookCarts } from './useHooks';
import { Product } from '../interface/type';

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { cart, setCart, showCart, setShowCart } = useHookCarts();

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      // Lógica para adicionar o produto ao carrinho
      return { products: [...prevCart.products, product] };
    });
  };

  const upDateCart = (id: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      products: prevCart.products.filter((product) => id !== product.id),
    }));
  };
  return (
    <CartContext.Provider
      value={ { cart,
        addToCart,
        showCart,
        setShowCart,
        upDateCart } }
    >
      {children}
    </CartContext.Provider>
  );
};
