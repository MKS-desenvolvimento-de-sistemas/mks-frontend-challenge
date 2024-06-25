import React, { useState } from 'react';
import { CartProvider } from './CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';
import './App.css';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <div className="app">
        <Header toggleCart={toggleCart} />
        <ProductList />
        <CartSidebar isOpen={isCartOpen} toggleCart={toggleCart} />
      </div>
    </CartProvider>
  );
};

export default App;