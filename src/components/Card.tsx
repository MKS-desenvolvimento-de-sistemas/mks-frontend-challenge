import { FC, useContext } from 'react';
import { Product } from '../interface/type';
import CartContext from '../context/cartContext';
import bag from '../assets/shopping-bag.svg';
import { StyledButton, StyledCard, StyledDescription,
  StyledImg, StyledName, StyledNamePrice, StyledPrice } from '../styles/cardStyles';

const Card: FC<{ product: Product }> = ({ product }) => {
  const { cart, addToCart } = useContext(CartContext);

  const handleClick = () => {
    const productExistent = cart.products.find((item) => item.id === product.id);
    if (productExistent) {
      // eslint-disable-next-line no-alert
      return alert('Produto já adicionado');
    }
    addToCart({ ...product, quantity: 1 });
  };
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
      <StyledButton type="button" onClick={ handleClick }>
        <img src={ bag } alt="shopping bag" />
        {' '}
        <div>COMPRAR</div>
      </StyledButton>
    </StyledCard>
  );
};

export default Card;
