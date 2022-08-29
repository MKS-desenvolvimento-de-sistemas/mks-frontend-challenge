import styled from "styled-components";
import { CardImage as Image } from "../../Products/Card/styles";

export const Card = styled.li`
  width: 100%;
  padding: 22.38px 23px 21.45px 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;

  background-color: var(--primary-color-100);
  box-shadow: 0px 2px 8px var(--shadow-color);
  border-radius: 8px;

  @media (min-width: 1240px) {
    padding: 19px 25px 19px 23px;
    flex-direction: row;
    gap: 21px;
  }
`;

export const CardRemove = styled.button`
  background: none;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 9.81px;
  right: 14px;

  font-size: 32px;
  color: var(--secondary-color-300);

  &:hover {
    filter: opacity(0.8);
  }

  @media (min-width: 1240px) {
    font-size: 12px;
    padding: 3px;
    border-radius: 100%;
    background: var(--secondary-color-300);
    color: var(--primary-color-100);

    top: -9px;
    right: -9px;
  }
`;

export const CardImage = styled(Image)`
  width: 80px;
  height: 95.1px;
  margin-bottom: 0;

  @media (min-width: 1240px) {
    width: 46px;
    height: 57px;
  }
`;

export const CardInfo = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 11.19px;

  h4 {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: var(--secondary-color-200);
  }

  @media (min-width: 1240px) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    h4 {
      text-align: left;
      max-width: 100px;
      font-size: 13px;
      line-height: 17px;
    }
  }
`;
