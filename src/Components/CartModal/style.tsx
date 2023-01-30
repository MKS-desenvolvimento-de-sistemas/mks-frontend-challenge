import styled, { keyframes } from "styled-components";

interface IButtonProps {
  close: string;
  dimension: string;
  font: string;
}

interface IShowModal {
  action: boolean;
}

const showModal = keyframes`
	from {
			transform: translateX(100%);
	}
	
	to {
      transform: translateX(0);
	}
`;

const hideModal = keyframes`
	from {
		transform: translateX(0);
	}
	
	to {
		transform: translateX(100%);
	}
`;

export const Modal = styled.div<IShowModal>`
  height: 100vh;
  width: 486px;

  font-family: "Montserrat";
  color: var(--color-white);
  font-weight: 700;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  right: 0;
  top: 0;
  
	background-color: var(--color-primary);

	animation: ${(props) =>props.action === true ? showModal : hideModal} 0.5s;

  .modal-header {
    margin-top: 36px;

    p {
      width: 180px;
      font-size: 1.68rem;
    }
  }

  .cart-list {
    height: 60%;
    width: 82%;

    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
      background-color: var(--color-primary-50);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--color-gray-50);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: var(--color-gray-100);
    }
  }

  .total-cart {
    font-size: 1.75rem;
  }

  .flex-items {
    width: 85%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .checkout {
    width: 100%;
    height: 97px;

    background-color: var(--color-black);

    color: var(--color-white);
    font-weight: 700;
    font-size: 1.75rem;
  }

  .quantity-price {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 35%;
  }

  button {
    :hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 1200px) {
    width: 45%;
  }

  @media (max-width: 900px) {
    .cart-list {
      width: 90%;
      min-width: 330px;
    }
  }

  @media (max-width: 800px) {
    .flex-items {
      width: 90%;
      font-size: 1.75rem;
      justify-content: space-around;
    }

    .checkout {
      height: 65px;
      font-size: 1.25rem;
    }

    .close-button {
      color: var(--color-primary);
    }
  }

  @media (max-width: 650px) {
    min-width: 330px;
  }
`;

export const CartCard = styled.li`
  width: 95%;
  height: 95px;
  margin: 12px 0;

  border-radius: 8px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);

  font-family: "Montserrat";
  font-weight: 400;
  font-size: 0.81rem;
  color: var(--color-black);

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-evenly;

  position: relative;

  background-color: var(--color-white);

  animation: opacity 0.2s ease-in;

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  img {
    width: 60px;
  }

  .product-name {
    width: 113px;
  }

  .quanity-price {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 35%;
  }

  .price {
    font-weight: 700;
    font-size: 0.87rem;
  }

  @media (max-width: 900px) {
    .product-name {
      width: 100px;
    }
  }

  @media (max-width: 800px) {
    width: 250px;
    height: 220px;
    flex-direction: column;
    margin: 12px auto;

    .product-name {
      width: 95%;

      text-align: center;
      font-size: 1rem;
    }

    img {
      width: 80px;
    }

    .quantity-price {
      width: 90%;
    }

    .price {
      width: 84px;
      border-radius: 5px;

      font-size: 0.93rem;
      text-align: center;
      line-height: 34px;
      color: var(--color-white);

      background-color: var(--color-gray-100);
    }

    .remove-cart-button {
      top: 0px;
      right: 19px;

      background-color: transparent;

      font-size: 2.6rem;
      color: var(--color-black);
    }
  }
`;

export const Quantity = styled.section`
  position: relative;

  ::before {
    content: "Qtd:";
    font-size: 0.31rem;
    position: absolute;
    top: -8px;
  }

  .quantity-buttons {
    width: 50px;
    height: 19px;
    border: 0.3px solid var(--color-gray-50);
    border-radius: 4px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;

    .split {
      height: 11.5px;
      width: 1px;
      background-color: var(--color-gray-50);
    }
  }

  .quantity {
    width: calc(100% / 3);
    height: 100%;

    text-align: center;
    background-color: var(--color-white);
  }
  .add {
    border-radius: 0 4px 4px 0;
  }
  .sub {
    border-radius: 4px 0 0 4px;
  }

  @media (max-width: 800px) {
    ::before {
      content: "";
    }

    .quantity-buttons {
      width: 97px;
      height: 34px;
      .split {
        height: 26px;
      }
    }

    .add,
    .sub {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.25rem;
      padding-top: 3px;
    }
  }
`;

export const CloseButton = styled.button<IButtonProps>`
  width: ${(props) => (props.dimension === "small" ? "18px" : "38px")};
  height: ${(props) => (props.dimension === "small" ? "18px" : "38px")};
  border-radius: 100%;

  position: ${(props) => (props.close === "card" ? "absolute" : "relative")};
  top: -7px;
  right: -7px;

  background-color: var(--color-black);

  font-family: "Montserrat";
  font-weight: 400;
  font-size: ${(props) => (props.font === "small" ? "0.87rem" : "1.75rem")};
  color: var(--color-white);
`;
