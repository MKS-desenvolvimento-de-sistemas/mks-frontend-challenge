import { useProductsData } from "@/context/data/useProductData";
import Card from "../card/Card";
import * as S from "./styles";
import Skeleton from "../skeleton/Skeleton";
import { useState, useEffect } from "react";
import { useShopping } from "@/context/shopping/useShopping";
import { motion } from "framer-motion";

const Main = () => {
  const [prevLength, setPrevLength] = useState(0);
  
  const { data, error } = useProductsData();

  const { shopping } = useShopping();

  useEffect(() => {
    if (shopping?.length > prevLength) {
      const timer = setTimeout(() => {
        setPrevLength(shopping?.length); // Controla a notificação de item adicionado no carrinho
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [prevLength, shopping]);

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

      {shopping?.length > prevLength && (
        <S.SucessNotification>
          <motion.div
            initial={{ x: "10vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            Item adicionado ao carrinho!
          </motion.div>
        </S.SucessNotification>
      )}
    </S.Container>
  );
};

export default Main;
