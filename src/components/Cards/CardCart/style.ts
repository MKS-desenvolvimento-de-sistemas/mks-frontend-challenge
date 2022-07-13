import styled from "styled-components";

export const CartListContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .card_container {
    list-style: none;
    width: 250px;
    height: 220px;
    background-color: #fff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: var(--border-radius);
    margin-bottom: 13px;
  }

  .card_container figure {
    height: 131px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }

  .card_container img {
    max-height: 110px;
    margin-right: 20px;
  }

  .card_container figcaption {
    display: none;
  }

  .card_container-title {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card_container-title h3 {
    max-width: 85%;
    font-weight: 400;
    font-size: 16px;
    color: var(--grey-1);
    margin: 5px;
  }

  .card_container-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px auto;
    width: 85%;
  }

  .card_container-info-quant {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;
    width: 96px;
    height: 30px;
    justify-content: space-between;
    font-weight: 400;
    font-size: 20px;
  }

  .card_container-info-quant button {
    width: 32px;
    background-color: transparent;
    border: none;
  }

  .card_container-info-quant p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 31.3px;
    border-left: 0.2px solid #bfbfbf;
    border-right: 0.2px solid #bfbfbf;
    margin: 0 auto;
  }

  .card_container-info-price {
    background-color: var(--grey-2);
    border-radius: 5px;
    width: 84px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 15px;
    color: white;
  }

  .card_container-close {
    position: relative;
    top: -40px;
    left: 63%;
    background-color: transparent;
    border: none;
    font-weight: 400;
    font-size: 32px;
  }
`;
