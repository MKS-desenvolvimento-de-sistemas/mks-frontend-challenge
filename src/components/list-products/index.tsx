import * as S from './style';
import ProductComponent from '../product';
import { useProducts } from '@/hooks/useProducts';
import ProductProps from '../product/type';
import { motion } from 'framer-motion';
import ButtonComponent from '../button';
import { useEffect, useState } from 'react';
import { ProductSkeleton } from '../product/skeleton/style';

const ListComponent = () => {
  const [limit, setLimit] = useState<number>(6);

  const { data, isLoading, refetch } = useProducts(limit);

  useEffect(() => {
    refetch();
  }, [limit, refetch]);

  const handleLoadMore = () => {
    setLimit(currentLimit => currentLimit + 3);
  };

  return (
    <S.List
      as={motion.ul}
      initial="hidden"
      animate="visible"
    >
      {
        !isLoading ?
          data?.products.map((product: ProductProps, index: number) => (
            <ProductComponent
              key={index}
              id={product.id}
              name={product.name}
              brand={product.brand}
              description={product.description}
              price={product.price}
              photo={product.photo}
              quantity={product.quantity}
            />
          )) : (
            Array.from({ length: limit}).map((item: any, index: number) => (
              <ProductSkeleton />
            ))
          )
      }
      <div>
        <ButtonComponent
          variant='primary'
          onClick={handleLoadMore}
        >
          Carregar Mais Produtos
        </ButtonComponent>
      </div>
    </S.List>
  );
};

export default ListComponent;