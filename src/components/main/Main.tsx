import { useProductsData } from "@/context/data/useProductData";
import Card from "../card/Card";
import * as S from "./styles";
import Skeleton from "../skeleton/Skeleton";

const Main = () => {
  const { data, error } = useProductsData();

  if (error)
    return (
      <S.Container>
        <p>
          Ops... Ocorreu um erro inesperado. <strong>{error.message}</strong>
        </p>
      </S.Container>
    );

  return (
    <S.Container>
      <S.GridOfProducts>
        {data
          ? data.products.map((product) => (
              <Card
                key={product.id}
                description={product.description}
                image={product.photo}
                name={product.name}
                price={product.price}
                id={product.id}
              />
            ))
          : Array.from({ length: 8 }, (_, i) => <Skeleton key={i} />)}
        {/* Exibe 8 telas de carregamentos Skeleton */}
      </S.GridOfProducts>
    </S.Container>
  );
};

export default Main;
