import { useProductsData } from "@/context/data/useProductData";
import Card from "../card/Card";
import * as S from "./styles";

const Main = () => {
  const { data } = useProductsData();
  return (
    <S.Container>
      <S.GridOfProducts>
        {data?.products.map((product) => (
          <Card
            key={product.id}
            description={product.description}
            image={product.photo}
            name={product.name}
            price={product.price}
          />
        ))}
      </S.GridOfProducts>
    </S.Container>
  );
};

export default Main;
