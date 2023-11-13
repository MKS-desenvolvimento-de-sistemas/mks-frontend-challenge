import { FC } from 'react';
import { Product } from '../models/requestAPI';
import bag from '../assets/shopping-bag.svg';
import { StyledButton, StyledCard, StyledDescription,
  StyledImg, StyledName, StyledNamePrice, StyledPrice } from '../styles/cardStyles';

const Card: FC<{ product: Product }> = ({ product }) => {
  return (
    <StyledCard>
      <StyledImg src={ product.photo } alt={ product.name } />
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
