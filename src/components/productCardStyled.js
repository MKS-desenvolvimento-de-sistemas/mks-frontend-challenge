import styled from "styled-components";

export const ShoppingBagStyled = styled.img`
  width: 12px;
  height: 13.5px;
  margin: 0;
`;

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  width: 218px;
  height: 285px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  overflow: hidden;
  justify-content: space-between;

  p {
    font-family: "Montserrat";
    font-style: normal;
  }

  & > div {
    width: 85%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 14px;
  }

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 14px;
    background: #0f52ba;
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 0px 0px 8px 8px;
    margin-top: 12px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const ProductImage = styled.img`
  height: 135px;
  overflow: hidden;
  object-fit: contain;
`;

export const DescriptionStyled = styled.p`
  width: 192px;
  height: 25px;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
  margin-top: 8px;
  color: #2c2c2c;
`;

export const TitleStyled = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #2c2c2c;
  width: 124px;
  height: 38px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
`;

export const PriceStyled = styled.p`
  background: #373737;
  border-radius: 5px;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 64px;
  height: 26px;
`;