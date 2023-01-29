import styled from "styled-components";

interface ButtonProps {
  close: string;
  dimension: string;
  font: string;
}

export const Modal = styled.section`
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

  position: absolute;
  right: 0;
  top: 0;

  background-color: var(--color-primary);

  img {
    width: 60px;
    heitgh: 60px;
  }

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
      background: var(--color-primary-50);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--color-gray-50);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--color-gray-100);
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

  button {
    :hover {
      filter: brightness(0.8);
    }
  }
`;

export const CartCard = styled.li`
  width: 379px;
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

  .product-name {
    width: 113px;
  }

  .price {
    font-weight: 700;
    font-size: 0.87rem;
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

    span {
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
`;

export const CloseButton = styled.button<ButtonProps>`
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
