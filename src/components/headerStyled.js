import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100vw;
  height: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: #0f52ba;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;
  color: #ffffff;
  padding: 28px 65px;
  span {
    font-weight: 600;
    font-size: 40px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: none;
    width: 90px;
    height: 45px;
    background: #ffffff;
    border-radius: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    cursor: pointer;
  }
`;
