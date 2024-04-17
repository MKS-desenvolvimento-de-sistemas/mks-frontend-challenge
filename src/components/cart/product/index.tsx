import ProductProps from '@/components/product/type';
import * as S from './style';

const ProductCartItem: React.FC<ProductProps> = (product) => {
  return (
    <S.ProductItem>
      <p>{product.name}</p>
    </S.ProductItem>
  );
};

export default ProductCartItem;