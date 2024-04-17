import * as S from './style';
import CarrinhoIcon from "../../../public/icons/carrinho";

const Cart = () => {
  return (
    <S.Container>
      <CarrinhoIcon />
      <p style={{ fontWeight: 700}}>0</p>
    </S.Container>
  );
};

export default Cart;