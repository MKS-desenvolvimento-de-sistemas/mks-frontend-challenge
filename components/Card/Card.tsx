import styled from "styled-components";
import PriceTag from "@/components/PriceTag/PriceTag";
import {FiShoppingBag} from "react-icons/fi";

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
  cursor: pointer;
  transition: all 0.3s ease-in-out;

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

export interface Product {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updatedAt: string;
}

const Card = (props: Product) => (
    <Container>
        <ProductImage src={props.photo} alt="asjkl"/>
        <ProductDetail>
            <ProductName>{props.name}</ProductName>
            <PriceTag price={+props.price}/>
        </ProductDetail>
        <ProductDescription>{props.description}</ProductDescription>
        <div style={{flex: 1}}></div>
        <AddToCartButton>
            <BagIcon/> Comprar
        </AddToCartButton>
    </Container>
);

export default Card;
