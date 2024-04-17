import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 90px;
  height: 45px;
  border-radius: 8px;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text.black};
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;