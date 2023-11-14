import { FC, useContext } from 'react';
import { StyledButton, StyledCard, StyledLogo, StyledText } from '../styles/headerStyles';
import ShoppingCart from './ShoppingCart';
import CartContext from '../context/cartContext';

const Header: FC = () => {
  const { showCart, setShowCart } = useContext(CartContext);
  const handleClick = () => {
    if (showCart) {
      setShowCart(false);
    }
    setShowCart(true);
  };
  return (
    <StyledCard>
      <StyledLogo>
        <h1>MKS</h1>
        <StyledText>Sistemas</StyledText>
      </StyledLogo>
      <StyledButton type="button" onClick={ handleClick }>
        🛒
        {' '}
        <strong style={ { marginLeft: '0.5rem' } }>0</strong>
      </StyledButton>
      {showCart && <ShoppingCart />}

    </StyledCard>
  );
};
export default Header;
