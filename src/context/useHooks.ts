import { useState } from 'react';
import { ProductList } from '../interface/type';

export const useHookCarts = () => {
  // array com todas as receitas
  const [cart, setCart] = useState<ProductList>({ products: [] });

  return { cart, setCart };
};
