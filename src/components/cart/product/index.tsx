import ProductProps from '@/components/product/type';
import * as S from './style';
import Image from 'next/image';
import Typography from '@/components/typography';
import formatMoney from '@/utils/formatMoney';

const ProductCartItem: React.FC<ProductProps> = (product) => {
  return (
    <S.ProductItem>
      <div>
        <Image
          src={product.photo}
          width={46}
          height={57}
          alt='Imagem Carrinho'
        />
      </div>
      <Typography tag='p'
      >{product.name}</Typography>
      <div style={{ width: '100px'}}>
        <p>{product.quantity}</p>
      </div>
      <Typography tag='p' fontWeight={700}>{formatMoney(product.price)}</Typography>
      <S.RemoveProduct>X</S.RemoveProduct>
    </S.ProductItem>
  );
};

export default ProductCartItem;