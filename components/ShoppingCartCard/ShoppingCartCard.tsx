import styled from "styled-components";
import PriceTag from "@/components/PriceTag/PriceTag";
import ItemCounter from "@/components/ItemCounter/ItemCounter";
import { addItem, CountedProduct, reduceItem } from "../../store/store";
import { useAppDispatch } from "../../hooks/redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 220px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  margin: 13px 0;
  gap: 15px;
`;

const ProductName = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #2c2c2c;
`;

const Image = styled.img`
  width: 80px;
  height: 95.1px;
`;

export interface ShoppingCartCardProps {
  product: CountedProduct;
}

const ShoppingCartCard = ({ product }: ShoppingCartCardProps) => {
  const dispatch = useAppDispatch();

  const decrement = () => {
    if (product.quantity > 1) {
      dispatch(reduceItem(product));
    }
  };

  return (
    <Container>
      <Image src={product.photo} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <ItemCounter
          quantity={product.quantity}
          onAdd={() => dispatch(addItem(product))}
          onSub={decrement}
        ></ItemCounter>
        <PriceTag style={{ height: 35 }} price={+product.price} />
      </div>
    </Container>
  );
};

export default ShoppingCartCard;
