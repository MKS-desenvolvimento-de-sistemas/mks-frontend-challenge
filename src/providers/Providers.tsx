"use client";

import { ProviderStyle } from "@/styles/Theme";
import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ProviderStyle>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ProviderStyle>
  );
};

export default Providers;
