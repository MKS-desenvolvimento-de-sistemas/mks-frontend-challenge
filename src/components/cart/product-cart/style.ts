import theme from "@/styles/theme";
import styled from "styled-components";

export const ProductItem = styled.li`
  width: 80%;
  padding: 12px 24px;
  color: ${theme.colors.text.black};
  background-color: ${theme.colors.background};
  list-style: none;
  box-shadow: -2px 2px 10px 0px #0000000D;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const RemoveProduct = styled.div`
  background-color: ${theme.colors.black};
  padding: 5px 8px;
  border-radius: 50%;
  position: absolute;
  right: -10px;
  top: -10px;
  color: ${theme.colors.text.white};
  cursor: pointer;
  font-size: 12px;
  text-center: center;
`;