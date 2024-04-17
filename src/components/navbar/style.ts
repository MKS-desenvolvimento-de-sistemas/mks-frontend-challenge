import theme from "@/styles/theme";
import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100vw;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text.white};
  display: flex;
  justify-content: space-between;
  
`;

export const Container = styled.div`
  display: flex;
  padding: 15px 30px;
  gap: 10px;
  align-items: end;
`;