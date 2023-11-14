import { useState } from 'react';
import { ProductList } from '../interface/type';

export const useHookCarts = () => {
  // array com todas as receitas
  const [cart, setCart] = useState<ProductList>({ products: [] });
  const [showCart, setShowCart] = useState<boolean>(false);

  return { cart, setCart, showCart, setShowCart };
};
