"use client";

import ProductProps from "@/components/product/type";
import { CartContext } from "@/context/cart";
import { ReactNode, useEffect, useState } from "react";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartActive, setCartActive] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductProps[]>(() => {
    if(typeof window !== "undefined"){
      const localData = localStorage.getItem('cartProducts');
      return localData ? JSON.parse(localData) : [];
    }
    return [];
  });

  const getTotal = () => {
    return products.reduce((total, product) => total + (parseFloat(product.price) * product.quantity), 0);
  };

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(products));
  }, [products]);

  const value = {
    isCartActive,
    setCartActive,
    products,
    setProducts,
    getTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};