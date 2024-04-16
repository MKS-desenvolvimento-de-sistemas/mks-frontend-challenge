"use client";

import { ReactNode } from "react";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/global";

interface ProvidersProps {
  children: ReactNode,
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      {children}
    </StyledComponentsRegistry>
  )
};

export default Providers;