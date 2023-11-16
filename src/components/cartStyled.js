import styled from "styled-components";

export const CartStyled = styled.aside`
  position: fixed;
  right: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 486px;
  height: 100vh;
  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`;

export const HeaderCart = styled.div`
  width: 486px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
  color: #ffffff;
  margin-bottom: 70px;
  padding-left: 47px;
  margin-top: 37px;
  p {
    width: 180px;
    height: 56px;
  }
  button {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #000000;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 15px;
    /* or 54% */
    color: #ffffff;
    margin-right: 22px;
    cursor: pointer;
  }
`;

export const ProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  row-gap: 28px;
  flex-grow: 1;
`;

export const CartFooterStyled = styled.div`
  width: 421px;
  width: 486px;
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    /* identical to box height, or 54% */
    color: #ffffff;
  }
  button {
    height: 97px;
    width: 486px;
    background: #000000;
    border: none;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    /* identical to box height, or 54% */
    color: #ffffff;
    margin-top: 42px;
    cursor: pointer;
  }
`;
