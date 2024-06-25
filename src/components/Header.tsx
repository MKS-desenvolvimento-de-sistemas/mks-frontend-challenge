import React, { useContext } from 'react';
import './Header.css';
import { CartContext } from '../CartContext';

interface HeaderProps {
  toggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleCart }) => {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;
  const { cartItems } = cartContext;
  const itemCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <header className="header">
      <div className="logo">
        MKS <span className="sistemas">Sistemas</span>
      </div>
      <div className="cart-icon" onClick={toggleCart}>
        <img src="cart-icon.png" alt="Cart" />
        <span>{itemCount}</span>
      </div>
    </header>
  );
};

export default Header;
