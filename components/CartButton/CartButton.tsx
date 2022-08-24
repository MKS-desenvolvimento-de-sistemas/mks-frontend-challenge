import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  width: 52px;
  height: 26px;
  border: 0;
`;

const Counter = styled.span`
  font-weight: 700;
  font-size: 12px;
`;

export interface CartButtonProps {
  onClick?: () => void;
}

const CartButton = ({ onClick }: CartButtonProps) => {
  return (
    <Container onClick={onClick}>
      <FaShoppingCart />
      <Counter>0</Counter>
    </Container>
  );
};

export default CartButton;
