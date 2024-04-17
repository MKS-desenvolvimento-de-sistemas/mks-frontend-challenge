import Typography from '@/components/typography';
import * as S from './style';
import { useCart } from '@/hooks/useCart';
import ProductCartItem from '../product';

const Modal = () => {
  const { products, setCartActive } = useCart();

  const handleCloseCart = () => {
    return setCartActive(false);
  }

  return (
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
              />
            ))
          }
        </S.ListProducts>
      </S.Content>
    </S.Modal>
  );
};

export default Modal;