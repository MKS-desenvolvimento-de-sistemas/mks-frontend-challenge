import { FC } from 'react';
import styled from 'styled-components';
import { ProductList } from '../models/requestAPI';

const StyledCard = styled.div`
    border: 1px solid black;
    width: 50%;
    margin: 0 auto;
    height: 500px;
`;

const StyledButton = styled.button``;
const StyledImg = styled.img``;
const StyledName = styled.div``;
const StyledPrice = styled.div``;
const StyledDescription = styled.div``;

const Card: FC<ProductList> = ({ products }) => {
  const product = products[0];
  return (
    <StyledCard>
      <img src={ product.photo } alt="" />
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div>{product.description}</div>
      <button type="button">COMPRAR</button>
    </StyledCard>
  );
};

export default Card;
