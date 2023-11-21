import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 6.25rem;
  background-color: ${(props) => props.theme.colors?.blue01};
  padding: 0 5.5rem 0 4.0625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors?.white};
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.1875rem;

  @media (max-width: 350px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h3`
  color: ${(props) => props.theme.colors?.white};
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.1875rem;

  @media (max-width: 350px) {
    font-size: 1rem;
  }
`;

export const Shopping = styled.div`
  width: 5.625rem;
  height: 2.8125rem;
  background-color: ${(props) => props.theme.colors?.white};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const QuantityOfProducts = styled.p`
  color: ${(props) => props.theme.colors?.black};
  font-size: 1.125rem;
  font-weight: 700;
`;
