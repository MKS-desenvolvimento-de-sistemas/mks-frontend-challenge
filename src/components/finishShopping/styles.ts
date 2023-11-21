import styled, { keyframes } from "styled-components";

const animeRight = keyframes`
  100% {
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 486px;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 36px;
  background: ${(props) => props.theme.colors?.blue01};
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  transform: translateX(200px);
  animation: ${animeRight} 500ms forwards;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const TitleAndClose = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 22px 0 47px;

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors?.white};
  font-size: 27px;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Close = styled.div`
  width: 38px;
  height: 38px;
  background-color: ${(props) => props.theme.colors?.black};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${(props) => props.theme.colors?.white};
  cursor: pointer;

  @media (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
`;

export const Products = styled.div`
  width: 100%;
  height: 60dvh;
  padding: 8px 60px 0 47px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 500px) {
    padding: 8px 1rem 0 1rem;
  }
`;

export const TotalAndPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 63px 0 47px;

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export const Total = styled.p`
  color: ${(props) => props.theme.colors?.white};
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Finish = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.colors?.black};
  padding: 30px 0;
  color: ${(props) => props.theme.colors?.white};
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  border: none;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
