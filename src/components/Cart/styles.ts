import styled from "styled-components";

export const Cart = styled.aside`
  width: 330px;
  height: 100%;
  max-height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: var(--z-cart);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--terciary-color);
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  @media (min-width: 1240px) {
    width: 486px;
  }
`;

export const CartHeader = styled.div`
  width: 100%;
  margin: 25px 0 18px 0;
  padding: 0 15px 0 32px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  font-size: 46px;
  color: var(--secondary-color-300);

  h2 {
    font-weight: 700;
    font-size: 27px;
    color: var(--primary-color-100);
  }

  @media (min-width: 1240px) {
    margin: 36px 0 58px 0;
    padding: 0 22px 0 47px;
    font-size: 38px;

    h2 {
      font-size: 27px;
      max-width: 180px;
    }
  }
`;

export const CartList = styled.ul`
  width: 100%;
  padding: 10px 46px 10px 34px;
  flex: 2;
  overflow-y: scroll;

  scrollbar-width: thin;
  scrollbar-color: var(--primary-color-100) var(--terciary-color);

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: var(--terciary-color);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color-100);
    border-radius: 20px;
    border: 3px solid var(--terciary-color);
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12.95px;

  @media (min-width: 1240px) {
    gap: 28px;
  }
`;

export const CartTotal = styled.div`
  width: 100%;
  padding: 35px 15px 35px 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 700;
  font-size: 28px;
  color: var(--primary-color-100);

  @media (min-width: 1240px) {
    padding: 35px 22px 35px 47px;
  }
`;

export const CartButton = styled.button`
  width: 100%;
  padding: 26px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--secondary-color-300);

  font-weight: 700;
  font-size: 20px;
  color: var(--primary-color-100);

  &:hover {
    filter: opacity(0.7);
  }
`;
