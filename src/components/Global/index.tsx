import { ReactNode } from "react";
// STYLED IMPORT'S
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import { themes } from "../../styles/themes";

// REDUX IMPORT'S
import { RootState } from "../../redux";
import { useSelector } from "react-redux";

interface IGlobalProps {
  children: ReactNode | ReactNode[];
}

const Global = ({ children }: IGlobalProps) => {
  const theme = useSelector((state: RootState) => state.theme.currentValue);

  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Global;
