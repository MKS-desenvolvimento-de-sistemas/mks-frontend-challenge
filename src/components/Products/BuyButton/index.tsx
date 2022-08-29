import * as Styles from "./styles";
import { FiShoppingBag } from "react-icons/fi";
import { IProduct } from "../../../types/api";

// REDUX IMPORT'S
import { add } from "../../../redux/Cart";
import { useDispatch } from "react-redux";

interface IBuyButtonProps {
  product: IProduct;
}

const BuyButton = ({ product }: IBuyButtonProps) => {
  const dispatch = useDispatch();

  return (
    <Styles.Button
      type="button"
      title="Adicionar ao Carrinho"
      onClick={() => dispatch(add(product))}
    >
      <FiShoppingBag size="16px" />
      Comprar
    </Styles.Button>
  );
};

export default BuyButton;
