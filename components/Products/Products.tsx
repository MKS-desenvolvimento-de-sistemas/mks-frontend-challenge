import Card from "@/components/Card/Card";
import styled from "styled-components";
import { Product } from "@/integrations/mks";

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 18px auto 50px auto;
  max-width: 1200px;
  gap: 18px;
`;

export interface ProductsProps {
  products: Product[];
  loading: boolean;
  skeletonsCount?: number;
}

const Products = ({ products, loading, skeletonsCount = 8 }: ProductsProps) => {
  return (
    <Container>
      {loading
        ? Array.from({ length: skeletonsCount }).map((_, i) => (
            <Card.Skeleton key={i} />
          ))
        : products.map((product) => (
            <li key={product.id}>
              <Card {...product}></Card>
            </li>
          ))}
    </Container>
  );
};

export default Products;
