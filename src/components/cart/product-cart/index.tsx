import ProductProps from '@/components/product/type';
import * as S from './style';
import Image from 'next/image';
import Typography from '@/components/typography';
import formatMoney from '@/utils/formatMoney';
import { useCart } from '@/hooks/useCart';
import QuantityComponent from './quantity';
import { toast } from 'react-toastify';

const ProductCartItem: React.FC<ProductProps> = (product) => {
  const { setProducts } = useCart();

  const updateProductQuantity = (delta: any) => {
    setProducts(currentProducts =>
      currentProducts.map(p => {
        if (p.id === product.id) {
          const newQuantity = p.quantity + delta;
          if (newQuantity < 1) {
            toast.warning('Não foi possível remover: quantidade mínima de 1.');
            return p;
          } else {
            toast.success(delta > 0 ? `Produto adicionado!` : 'Produto removido!');
            return {...p, quantity: newQuantity};
          }
        }
        return p;
      })
    );
  };

  const handleIncrement = () => updateProductQuantity(1);
  const handleDecrement = () => updateProductQuantity(-1);

  const handleRemoveProduct = () => {
    setProducts(currentProducts => 
      currentProducts.filter(p => p.id !== product.id)
    );
    toast.warning(`${product.name} removido do carrinho!`);
  };

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
      <div>
        <Typography 
          tag='p'
          width={60}
          className='truncate'
          marginBottom={4}
        >
          {product.brand}
        </Typography>
        <Typography 
          tag='p'
          width={60}
          className='truncate'
        >
          {product.name}
        </Typography>
      </div>
      <QuantityComponent 
        quantity={product.quantity} 
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
      />
      <Typography tag='p' fontWeight={800} fontSize={18} marginTop={6}>
        {formatMoney(product.price)}
      </Typography>
      <S.RemoveProduct onClick={handleRemoveProduct}>
        X
      </S.RemoveProduct>
    </S.ProductItem>
  );
};

export default ProductCartItem;