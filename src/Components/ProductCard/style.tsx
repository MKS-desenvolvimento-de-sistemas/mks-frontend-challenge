import styled from "styled-components";

export const Card = styled.ul`
  width: 217.56px;
  height: 285px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  .info {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 90%;
  }

  .name {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 1rem;
  }

  .price {
    width: 64px;
    height: 26px;
    padding: 0 3px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    background-color: var(--color-gray-100);

    font-family: "Montserrat";
    font-weight: 700;
    font-size: 0.93;
    color: var(--color-white);
  }

  .description {
    font-family: "Montserrat";
    font-weight: 300;
    font-size: 10px;

    width: 90%;
  }

  img {
    width: 55%;
    heigth: 50%;
    margin: 6px 0;
  }

  margin: 10px;
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 31.9px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0 0 8px 8px;

  font-family: "Montserrat";
  font-weight: 600;
  font-size: 0.87rem;
  color: var(--color-white);

  background-color: var(--color-primary);

  svg {
    margin: 0 12px;
  }

  :hover {
    background-color: var(--color-primary-50);
  }
`;
