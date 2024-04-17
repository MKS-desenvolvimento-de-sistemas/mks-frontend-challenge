import ProductProps from "@/components/product/type";
import { CartContext } from "@/context/cart";
import { ReactNode, useState } from "react";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartActive, setCartActive] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductProps[]>([]);

  const value = {
    isCartActive,
    setCartActive,
    products,
    setProducts,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};