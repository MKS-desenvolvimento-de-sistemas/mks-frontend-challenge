import styled from "styled-components";

const Container = styled.div`
  background: #ffffff;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  vertical-align: baseline;
`;

const Counter = styled.span`
  display: inline-block;
  font-size: 20px;
  line-height: 24px;
  border: 0.2px solid #bfbfbf;
  border-top: 0;
  border-bottom: 0;
  width: 40px;
  text-align: center;
`;

const Button = styled.button`
  width: 40px;
  font-weight: 400;
  color: #000000;
  background-color: transparent;
  border: 0;
  transition: color 0.1s ease-in-out;

  &:active {
    color: ${(props) => props.theme.main.color.primary};
  }

  &[disabled] {
    cursor: not-allowed;
  }
`;

export interface ItemCounterProps {
  quantity: number;
  onAdd: () => void;
  onSub: () => void;
}

const ItemCounter = ({ onSub, quantity = 1, onAdd }: ItemCounterProps) => {
  return (
    <Container>
      <Button
        disabled={quantity === 1}
        onClick={onSub}
        style={{ fontSize: "24px", lineHeight: "29px" }}
      >
        -
      </Button>
      <Counter>{quantity}</Counter>
      <Button onClick={onAdd} style={{ fontSize: "22px", lineHeight: "27px" }}>
        +
      </Button>
    </Container>
  );
};

export default ItemCounter;
