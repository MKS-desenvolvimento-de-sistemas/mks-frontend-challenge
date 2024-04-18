import ProductProps from "./type";
import * as S from "./style";
import ButtonComponent from "../button";
import Image from "next/image";
import Typography from "../typography";
import { useCart } from "@/hooks/useCart";
import formatMoney from "@/utils/formatMoney";
import { toast } from "react-toastify";

const ProductComponent: React.FC<ProductProps> = (product) => {
  const { products, setProducts } = useCart();

  const handleAddToCart = () => {
    
    setProducts(currentProducts => {
      const existingProductIndex = currentProducts.findIndex(p => p.id === product.id);
      if (existingProductIndex !== -1) {
        return currentProducts.map((p, index) => 
        index === existingProductIndex ? {...p, quantity: p.quantity + 1} : p
        );
      } else {
        return [...currentProducts, {...product, quantity: 1}];
      }
    });

    toast.success(`${product.name} adicionado ao carrinho!`, { theme: "colored" });
  };

  return (
    <S.Container>
      <S.Content>
        <S.ContainerImage>
          <Image
            alt="Product Image"
            src={product.photo}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '50%', height: 'auto' }}
          />
        </S.ContainerImage>
        <S.Informations>
          <S.Header>
            <Typography tag="h2" fontWeight={300} fontSize={'20px'}>{product.brand} {product.name}</Typography>
            <S.Price>
              {formatMoney(product.price)}
            </S.Price>
          </S.Header>
          <Typography
            tag="p"
            fontWeight={100}
            fontSize={'12px'}
            color="#2C2C2C"
            opacity={0.6}
          >
            {product.description}
          </Typography>
        </S.Informations>
      </S.Content>
      <ButtonComponent
        variant="primary"
        icon={true}
        onClick={handleAddToCart}
      >
        comprar
      </ButtonComponent>
    </S.Container>
  );
};

export default ProductComponent;