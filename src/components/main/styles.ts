import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 90dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GridOfProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 31px 22px;
  padding: 3rem 0;

  @media (max-width: 970px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 730px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const SucessNotification = styled.div`
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.theme.colors?.white};
  padding: 2rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: ${(props) => props.theme.colors?.blue01};
`;
