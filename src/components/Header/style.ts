/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  height: 101px;
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderHome = styled.header`
  background: #0F52BA;
`;

export const CartButton = styled.header`
  align-items: center;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 45px;
  width: 90px;
  
  img {
    margin-right: 16px;
  }

  span {
    font-size: 18px;
    font-weight: 700;
  }
`;
