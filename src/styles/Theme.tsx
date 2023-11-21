import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#fff",
    black: "#000",
    blue01: "#0F52BA",
    background: "#F9F9F9",
    bgFooter: "#EEE",
    card: {
      text: "#2C2C2C",
      bgPrice: "#373737",
    },
  },
};

export const ProviderStyle = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
