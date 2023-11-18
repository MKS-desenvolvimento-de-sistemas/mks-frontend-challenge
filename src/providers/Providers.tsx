"use client"

import { ProviderStyle } from "@/styles/Theme";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ProviderStyle>{children}</ProviderStyle>;
};

export default Providers;
