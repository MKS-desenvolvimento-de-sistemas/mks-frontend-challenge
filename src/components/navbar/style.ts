import theme from "@/styles/theme";
import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text.white};
  padding: 25px 0px;
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerLeft = styled.div`
  display: flex;
  gap: 10px;
  align-items: end;
`;