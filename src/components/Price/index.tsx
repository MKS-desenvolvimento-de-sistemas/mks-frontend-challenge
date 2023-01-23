import * as Styles from "./styles";

interface IPriceProps {
  price: number;
  type: "product" | "cart";
}

const Price = ({ price, type = "product" }: IPriceProps) => {
  return (
    <Styles.Price data-testid="price" type={type}>{`R$${price}`}</Styles.Price>
  );
};

export default Price;
