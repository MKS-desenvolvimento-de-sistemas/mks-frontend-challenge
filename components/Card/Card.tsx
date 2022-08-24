import styled, { css, keyframes } from "styled-components";
import PriceTag from "@/components/PriceTag/PriceTag";
import { FiShoppingBag } from "react-icons/fi";
import { Product } from "@/integrations/mks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 217px;
  height: 320px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  padding: 0 16px;
`;

const ProductImage = styled.img`
  max-height: 138px;
  object-fit: contain;
  margin-top: 18px;
`;

const ProductName = styled.h1`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  word-break: break-word;
`;

const ProductDescription = styled.p`
  margin-top: 8px;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  max-height: 30px;
`;

const ProductDetail = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const AddToCartButton = styled.button`
  background-color: ${(props) => props.theme.main.color.primary};
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  height: 32px;
  border: none;
  border-radius: 0 0 8px 8px;
  text-transform: uppercase;
  margin: 0 -16px;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(130%);
  }
`;

const BagIcon = styled(FiShoppingBag)`
  vertical-align: text-top;
  margin-right: 5px;
`;

const ShimmerKeyframe = keyframes`
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
`;

const shimmerEffect = css`
  background: #f6f7f8
    linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    )
    no-repeat;
  background-size: 800px 800px;
  display: inline-block;
  position: relative;

  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: ${ShimmerKeyframe};
  -webkit-animation-timing-function: linear;

  border-radius: 5px;
`;

const Box = styled.div`
  ${shimmerEffect};
  width: 138px;
  height: 138px;
  margin-bottom: 2rem;
`;

const Text = styled.div`
  ${shimmerEffect};
  width: 100%;
  height: 10px;
`;

const Skeleton = styled(Container)`
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Card = ({ photo, name, price, description }: Product) => (
  <Container>
    <ProductImage src={photo} alt={name} />
    <ProductDetail>
      <ProductName>{name}</ProductName>
      <PriceTag style={{ height: 30 }} price={+price} />
    </ProductDetail>
    <ProductDescription>{description}</ProductDescription>
    <div style={{ flex: 1 }}></div>
    <AddToCartButton>
      <BagIcon /> Comprar
    </AddToCartButton>
  </Container>
);

const CardSkeleton = () => {
  return (
    <Skeleton>
      <Box />
      <Text />
      <Text />
      <Text />
    </Skeleton>
  );
};

Card.Skeleton = CardSkeleton;

export default Card;
