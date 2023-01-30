import styled from "styled-components";

export const MainStyle = styled.main``;

export const ProductsList = styled.ul`
  max-width: 990px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;

  @media (max-width: 950px) {
    margin-top: 88px;
  }

  @media (max-width: 720px) {
    margin-top: 48px;
  }
`;
