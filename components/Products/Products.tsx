import Card, { Product } from "@/components/Card/Card";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 18px;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
`;

export interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <Container>
      {products.map((product) => (
        <li key={product.id}>
          <Card {...product}></Card>
        </li>
      ))}
    </Container>
  );
};

export default Products;
