import * as S from './style';
import ProductComponent from '../product';
import { useProducts } from '@/hooks/useProducts';
import ProductProps from '../product/type';
import { motion } from 'framer-motion';

const containerTransition = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const ListComponent = () => {
  const { data, isLoading } = useProducts(6);

  return (
    <S.List 
      as={motion.ul} 
      variants={containerTransition}
      initial="hidden"
      animate="visible"
    >
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
            quantity={product.quantity}
          />
        ))
      }
      {/* Array.from({ length: 6 }).map((_, index) => (
        
      )) */}
    </S.List>
  );
};

export default ListComponent;