import styled from "styled-components";
import { Product } from "@/integrations/mks";
import PriceTag from "@/components/PriceTag/PriceTag";
import ItemCounter from "@/components/ItemCounter/ItemCounter";
import { useState } from "react";

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
  product: Product;
  onRemove: () => void;
}

const ShoppingCartCard = ({
  product: { photo, name },
  onRemove,
}: ShoppingCartCardProps) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((counter) => counter + 1);
  };

  const decrement = () => {
    if (quantity === 1) {
      return onRemove();
    }

    setQuantity((counter) => Math.max(counter - 1, 1));
  };

  return (
    <Container>
      <Image src={photo} alt="" />
      <ProductName>{name}</ProductName>
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
          quantity={quantity}
          onAdd={increment}
          onSub={decrement}
        ></ItemCounter>
        <PriceTag style={{ height: 35 }} price={5000} />
      </div>
    </Container>
  );
};

export default ShoppingCartCard;
