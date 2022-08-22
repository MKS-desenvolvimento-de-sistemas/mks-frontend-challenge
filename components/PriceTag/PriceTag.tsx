import styled from "styled-components";

export interface PriceTagProps {
  price: number;
}

const Container = styled.span`
  display: inline-block;
  width: fit-content;
  height: fit-content;
  border-radius: 5px;
  background-color: #373737;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  padding: 4px 6px;
`;

const formatBrlCurrency = (value: number) =>
  value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

const PriceTag = ({ price }: PriceTagProps) => {
  return <Container>{formatBrlCurrency(price)}</Container>;
};

export default PriceTag;
