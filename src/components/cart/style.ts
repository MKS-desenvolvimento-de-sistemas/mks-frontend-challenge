import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 45px;
  border-radius: 8px;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text.black};
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #D3D3D3;
  }
`;