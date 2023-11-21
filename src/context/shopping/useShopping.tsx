"use client";

import { ProductProps } from "@/interface/interface";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useProductsData } from "../data/useProductData";

export type ShoppingContextProps = {
  shopping: ProductProps[];
  buyProduct: (id: number) => void;
  deleteProduct: (id: number) => void;
  setTotal: Dispatch<
    SetStateAction<{
      [key: number]: number;
    }>
  >;
  total: {
    [key: number]: number;
  };
};

export const ShoppingContext = createContext({} as ShoppingContextProps);

export const ShoppingProvider = ({ children }: { children: ReactNode }) => {
  const [shopping, setShopping] = useState<ProductProps[]>([]);
  const [total, setTotal] = useState<{ [key: number]: number }>({}); // Controla o valor total das compras

  const { data } = useProductsData();

  const buyProduct = (id: number) => {
    const filteredProduct = data?.products.filter(
      (product) => product.id === id
    );

    if (filteredProduct && !shopping.find((item) => item.id === id)) {
      setShopping((product) => [...product, ...filteredProduct]);
    }
  };

  const deleteProduct = (id: number) => {
    setShopping((currentShopping) =>
      currentShopping.filter((product) => product.id !== id)
    );

    // Atualiza o valor total dos produtos logo após m algum produto for removido
    setTotal((currentTotal) => {
      const newTotal = { ...currentTotal };
      delete newTotal[id];
      return newTotal;
    });
  };

  return (
    <ShoppingContext.Provider
      value={{
        shopping,
        buyProduct,
        deleteProduct,
        setTotal,
        total,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShopping = () => useContext(ShoppingContext);
