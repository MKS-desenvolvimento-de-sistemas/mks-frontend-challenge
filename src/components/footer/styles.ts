import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 34px;
  background-color: ${(props) => props.theme.colors?.bgFooter};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.p`
  color: ${(props) => props.theme.colors?.black};
  font-size: 12px;
  font-weight: 400;
`;
