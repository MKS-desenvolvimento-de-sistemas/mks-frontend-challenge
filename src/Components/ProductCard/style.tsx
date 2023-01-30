import styled from "styled-components";

export const Card = styled.li`
  width: 217.56px;
  height: 285px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 2px 8px #00000022;
  border-radius: 8px;

  animation: opacity 0.5s ease-in;

	.skeleton {

		@keyframes opacity {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
	}

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

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

    width: 124px;
  }

  .price {
    width: 70px;
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
    font-size: 0.625rem;

    width: 90%;
  }

  img {
    width: 55%;
    heigth: 50%;
    margin: 6px 0;
  }

  margin: 10px;

  @media (max-width: 475px) {
    width: 250.5px;
    height: 328px;

    .price {
      width: 73px;
      height: 29.9px;
    }

    .name {
      width: 142px;
    }
  }
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

  @media (max-width: 475px) {
    height: 36.7px;
  }
`;
