import * as Styles from "./styles";

interface IQuantityControlProps {
  quantity: number;
  increment: () => void;
  decrement: () => void;
}

const QuantityControl = ({
  quantity,
  increment,
  decrement,
}: IQuantityControlProps) => {
  return (
    <Styles.Container>
      <small>Qtd:</small>
      <Styles.Button
        type="button"
        title="Diminuir Quantidade"
        blocked={quantity <= 1}
        onClick={() => {
          if (quantity > 1) {
            decrement();
          }
        }}
      >
        -
      </Styles.Button>
      <span>{quantity}</span>
      <Styles.Button
        type="button"
        title="Aumentar Quantidade"
        onClick={increment}
      >
        +
      </Styles.Button>
    </Styles.Container>
  );
};

export default QuantityControl;
