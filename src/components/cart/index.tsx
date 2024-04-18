"use client"

import * as S from './style';
import CarrinhoIcon from "../../../public/icons/carrinho";
import { useCart } from '@/hooks/useCart';
import Modal from './modal';

const Cart: React.FC = () => {
  const { products, isCartActive, setCartActive } = useCart();

  return (
    <>
      <S.OpenModal onClick={() => setCartActive(!isCartActive)}>
        <CarrinhoIcon />
        <p style={{ fontWeight: 700}}>{products.length | 0}</p>
      </S.OpenModal>
      { isCartActive && 
        <Modal />
      }
    </>
  );
};

export default Cart;