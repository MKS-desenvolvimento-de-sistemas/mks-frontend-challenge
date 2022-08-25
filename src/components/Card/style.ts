/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const CardStyle = styled.div`
    width: 218px;
    height: 254px;
    padding: 16px;
    border-radius: 8px;
    background-color: white;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
    div {
      display: flex;
      align-items: start;
      justify-content: space-between;
      margin-bottom: 8px;
      h1 {
        font-size: 16px;
        font-weight: 400;
        color: #2C2C2C;
        display: block; 
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-width: 108px;
        max-height: 38px;
        line-height: 19px;
        overflow: hidden;
      }
      span {
        background-color: #373737;
        padding: 4px;
        color: white;
        font-size: 15px;
        border-radius: 5px;
        font-weight: 700;
      }
    }
    
    p {
      font-weight: 300;
      font-size: 10px;
      line-height: 12px;
      display: block; 
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      max-width: 192px;
      overflow: hidden;
      max-height: 25px;
      color: #2C2C2C;
    }
`;

export const CardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  margin-bottom: 14px;
  img {
    height: 138px;
  }
`;

export const CardBotao = styled.div`
  background: #0F52BA;
  width: 218px;
  display: flex;
  height: 32px;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  font-weight: 600;
  border-radius: 0 0 8px 8px;
  color: white;
  font-size: 14px;
  line-height: 18px;

  img {
    margin-right: 14px;
  }
`;
