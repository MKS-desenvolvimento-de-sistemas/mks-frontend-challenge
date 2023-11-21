import { useEffect, useState } from "react";

import * as S from "./styles";

import { ProductProps } from "@/interface/interface";
import { useShopping } from "@/context/shopping/useShopping";

const CardOfShopping = ({ product }: { product: ProductProps }) => {
  const [count, setCount] = useState(1);

  const { deleteProduct, setTotal } = useShopping();

  const increase = () => {
    if (count < 99) {
      setCount((count) => count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };

  useEffect(() => {
    // Calcula o novo total
    const newTotal = Number(product.price) * count;

    // Atualiza o total do produto atual
    setTotal((prevTotal) => ({
      ...prevTotal,
      [product.id]: newTotal,
    }));
  }, [count, product.id, product.price, setTotal]);

  return (
    <S.ContainerProduct>
      <S.ImgProduct
        src={product.photo}
        alt={"Imagem do produto: " + product.name}
      />
      <S.TitleProduct>{product.name}</S.TitleProduct>
      <div>
        <S.QuantityText>Qtd:</S.QuantityText>
        <S.Quantity>
          <S.DecreaseAndIncrease onClick={decrease} data-testid="decrease">-</S.DecreaseAndIncrease>
          <S.Number data-testid="count">{count}</S.Number>
          <S.DecreaseAndIncrease onClick={increase} data-testid="increase">+</S.DecreaseAndIncrease>
        </S.Quantity>
      </div>

      <S.Price>R${product.price.split(".")[0]}</S.Price>

      <S.MiniCLose
        onClick={() => deleteProduct(product.id)}
        data-testid="deleteProduct"
      >
        x
      </S.MiniCLose>
    </S.ContainerProduct>
  );
};

export default CardOfShopping;
