"use client";

import { ProviderStyle } from "@/styles/Theme";
import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsDataProvider } from "@/context/data/useProductData";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ProviderStyle>
      <QueryClientProvider client={queryClient}>
        <ProductsDataProvider>{children}</ProductsDataProvider>
      </QueryClientProvider>
    </ProviderStyle>
  );
};

export default Providers;
