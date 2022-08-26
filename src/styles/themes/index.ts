export type theme = {
  primary: { 100: string; 200: string };
  secondary: { 100: string; 200: string; 300: string };
  terciary: string;
};

const light: theme = {
  primary: {
    100: "#FFFFFF",
    200: "#EEEEEE",
  },
  secondary: {
    100: "#373737",
    200: "#2C2C2C",
    300: "#000000",
  },
  terciary: "#0F52BA",
};

const dark: theme = {
  primary: {
    100: "#1D1D1D",
    200: "#000000",
  },
  secondary: {
    100: "#999999",
    200: "#D7D7D7",
    300: "#FFFFFF",
  },
  terciary: "#0F52BA",
};

export const themes: { light: theme; dark: theme } = {
  light,
  dark,
};
