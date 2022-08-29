import * as Styles from "./styles";

interface IPriceProps {
  price: number;
  type: "product" | "cart";
}

const Price = ({ price, type = "product" }: IPriceProps) => {
  return <Styles.Price type={type}>{`R$${price}`}</Styles.Price>;
};

export default Price;
