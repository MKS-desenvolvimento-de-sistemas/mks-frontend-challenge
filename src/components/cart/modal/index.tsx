import Typography from '@/components/typography';
import * as S from './style';
import { useCart } from '@/hooks/useCart';
import ProductCartItem from '../product-cart';
import formatMoney from '@/utils/formatMoney';

const Modal = () => {
  const { products, setCartActive, getTotal } = useCart();

  const handleCloseCart = () => {
    return setCartActive(false);
  }

  const total = getTotal();

  return (
    <>
      <S.Modal>
        <S.Content>
          <S.Header>
            <Typography
              tag='h2'
              fontSize={'28px'}
              maxWidth={'180px'}
            >
              Carrinho de compras
            </Typography>
            <S.CloseModal onClick={handleCloseCart}>X</S.CloseModal>
          </S.Header>
          <S.ListProducts>
            {
              products.map((item, index) => (
                <ProductCartItem
                  id={item.id}
                  name={item.name}
                  brand={item.brand}
                  description={item.description}
                  photo={item.photo}
                  price={item.price}
                  key={index}
                  quantity={item.quantity}
                />
              ))
            }
          </S.ListProducts>
          <S.TotalContainer>
            {total !== 0 ? (
              <>
                <Typography tag='p' fontWeight={700}>Total:</Typography>
                <Typography tag='p' fontWeight={700}>{formatMoney(total.toString())}</Typography>
              </>
            ) : <Typography tag='p' fontWeight={500} fontSize={18}>Não há nenhum produto no seu carrinho.</Typography>}
          </S.TotalContainer>
          <S.FinalizePurchase disabled={total === 0}>
            Finalizar Compra
          </S.FinalizePurchase>
        </S.Content>
      </S.Modal>
    </>
  );
};

export default Modal;