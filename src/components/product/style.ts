import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  padding-top: 10px;
  box-shadow: 0px 2px 8px 0px #00000022;
`;

export const Content = styled.div`
  width: 90%;
  margin: auto;
`;

export const ContainerImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Informations = styled.div`
  display: flex;
  padding: 10px 0px;
  flex-direction: column;
  gap: 12px;
`;

export const Header = styled.header`
  display: flex;
  gap: 12px;
  display: -webkit-inline-box;
`;

export const Price = styled.div`
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.text.white};
  background-color: ${theme.colors.secondary};
  font-weight: 700;
  font-size: 18px;
`;