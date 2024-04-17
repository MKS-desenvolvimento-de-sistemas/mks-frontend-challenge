"use client";

import { ReactNode } from "react";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/global";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

interface ProvidersProps {
  children: ReactNode,
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <GlobalStyles />
        {children}
      </StyledComponentsRegistry>
    </QueryClientProvider>
  )
};

export default Providers;