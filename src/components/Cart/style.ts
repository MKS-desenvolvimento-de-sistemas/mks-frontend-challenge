import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .cart_container-title {
    background-color: var(--color-primary);
    position: fixed;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
  }

  .cart_container-title h2 {
    width: 250px;
    margin: 25px 0 20px 40px;
    font-weight: 700;
    font-size: 27px;
    color: white;
  }

  .cart_container-prod {
    margin-top: 130px;
    height: 50%;
    overflow: auto;
  }

  .cart_container-bottom {
    width: 100%;
    bottom: 0;
    background-color: var(--color-primary);
    position: fixed;
    overflow: hidden;
  }

  .cart_container-total {
    width: 87%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 10px 0 34px 40px;
  }

  .cart_container-total h2 {
    width: 87%;
    color: white;
    font-weight: 700;
    font-size: 28px;
  }

  .cart_container-button {
    width: 87%;
    height: 66px;
    background-color: black;
    color: white;
    border: none;
    font-weight: 700;
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    .cart_container-total {
      width: 486px;
    }

    .cart_container-total h2 {
    }

    .cart_container-total-price {
      margin-left: 140px;
    }

    .cart_container-button {
      width: 486px;
    }
  }
`;
