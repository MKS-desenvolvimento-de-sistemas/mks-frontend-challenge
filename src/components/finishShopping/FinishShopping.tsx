import { useShopping } from "@/context/shopping/useShopping";
import * as S from "./styles";
import CardOfShopping from "../cardOfShopping/CardOfShopping";

const FinishShopping = ({ closeShopping }: { closeShopping: () => void }) => {
  const { shopping, total } = useShopping();

  const totalSum = Object.values(total).reduce((sum, value) => sum + value, 0); // Soma o valor dos produtos que estão no carrinho

  return (
    <S.Container>
      <S.TitleAndClose>
        <S.Title>Carrinho de compras</S.Title>
        <S.Close onClick={closeShopping}>X</S.Close>
      </S.TitleAndClose>

      <S.Products>
        {shopping.length > 0 ? (
          shopping.map((product) => (
            <CardOfShopping product={product} key={product.id} />
          ))
        ) : (
          <p style={{ color: "#fff", textAlign: "center" }}>
            Seu carrinho está vazio.
          </p>
        )}
      </S.Products>

      <S.TotalAndPrice>
        <S.Total>Total:</S.Total>
        <S.Total>R$ {shopping.length > 0 ? totalSum : 0}</S.Total>
      </S.TotalAndPrice>

      <S.Finish>Finalizar Compra</S.Finish>
    </S.Container>
  );
};

export default FinishShopping;
