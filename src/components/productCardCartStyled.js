import styled from "styled-components";

export const ProductCardCartStyled = styled.div`
  width: 379px;
  height: 95px;
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  img {
    height: 57px;
    margin-left: 23px;
  }
  & > p {
    height: 33px;
    width: 113px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
    color: #2c2c2c;
    margin-left: 21px;
  }
  & > div {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 6px;
    margin-left: 9px;
    & > div {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      width: 50px;
      height: 19px;
      justify-content: space-around;
      color: #000000;
      background: #ffffff;
      border: 0.3px solid #bfbfbf;
      border-radius: 4px;
      margin-top: 4px;
      & > button {
        width: 5px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        border: none;
        background-color: #fff;
        color: #000000;
        cursor: pointer;
      }
    }
  }
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    background: #000000;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
    border-radius: 50%;
    align-self: flex-start;
    position: relative;
    left: 5px;
    top: -5px;
    cursor: pointer;
  }
`;

export const PriceStyled = styled.div`
  & > p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    margin-left: 35px;
  }
`;
