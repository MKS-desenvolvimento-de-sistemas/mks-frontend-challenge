import * as S from './style';
import ProductComponent from '../product';
import { useProducts } from '@/hooks/useProducts';
import ProductProps from '../product/type';

const ListComponent = () => {
  const { data, isLoading } = useProducts(6);

  return (
    <S.List>
      {
        data?.products.map((product: ProductProps, index: number) => (
          <ProductComponent
            key={index}
            id={product.id}
            name={product.name}
            brand={product.brand}
            description={product.description}
            price={product.price}
            photo={product.photo}
          />
        ))
      }
      {/* Array.from({ length: 6 }).map((_, index) => (
        
      )) */}
    </S.List>
  );
};

export default ListComponent;