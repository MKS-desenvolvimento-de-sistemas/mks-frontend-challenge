"use client";

import { createContext, useContext, ReactNode } from "react";

// Props dos dados da API
import { ProductDataProps } from "@/interface/interface";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";

export type ProductsDataContextProps = {
  data?: ProductDataProps;
  error: Error | null;
};

export const ProductsDataContext = createContext(
  {} as ProductsDataContextProps
);

export const ProductsDataProvider = ({ children }: { children: ReactNode }) => {
  const { data, error } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get(
          "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
        )
        .then((res) => res.data),
    retry: 3,  // caso a requisição falhe, ele vai tentar fazer a requisição mais 3 vezes
  });

  return (
    <ProductsDataContext.Provider
      value={{
        data,
        error
      }}
    >
      {children}
    </ProductsDataContext.Provider>
  );
};

export const useProductsData = () => useContext(ProductsDataContext);
