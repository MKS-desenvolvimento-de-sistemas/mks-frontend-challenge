import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  width: 52px;
  height: 26px;
`;

const Counter = styled.span`
  font-weight: 700;
  font-size: 12px;
`;

const CartButton = () => {
  return (
    <Container>
      <FaShoppingCart />
      <Counter>0</Counter>
    </Container>
  );
};

export default CartButton;
