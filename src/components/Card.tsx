import { FC } from 'react';
import styled from 'styled-components';
import { ProductList } from '../models/requestAPI';
import bag from '../assets/shopping-bag.svg';

const StyledCard = styled.div`
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    width: 60%;
    margin: 1rem auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-top: 0.5rem;
    
`;

const StyledNamePrice = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1rem 0;
    align-items: center;
    width: 100%;
`;

const StyledName = styled.div`
    font-size: 1.3rem;
    width: 40%;
`;

const StyledPrice = styled.div`
    font-size: 1.2rem;
    background-color: #000;
    color: #fff;
    padding: 0.5rem;
    border-radius: 0.5rem;

`;

const StyledDescription = styled.div`
    font-size: 0.9rem;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 1rem;
`;

const StyledImg = styled.img`
    width: 80%;
    margin: 0 auto;
`;

const StyledButton = styled.button`
    color: #fff;
    padding: 0.7rem;
    background-color: #0F52BA;
    border: none;
    border-radius: 0 0 0.9rem 0.9rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    
`;

const Card: FC<ProductList> = ({ products }) => {
  const product = products[0];
  return (
    <StyledCard>
      <StyledImg src={ product.photo } alt="" />
      <StyledNamePrice>
        <StyledName>{product.name}</StyledName>
        <StyledPrice>
          R$
          {product.price}
        </StyledPrice>
      </StyledNamePrice>
      <StyledDescription>{product.description}</StyledDescription>
      <StyledButton type="button">
        <img src={ bag } alt="shopping bag" />
        {' '}
        <div>COMPRAR</div>
      </StyledButton>
    </StyledCard>
  );
};

export default Card;
