import * as Styles from "./styles";

// COMPONENTS IMPORT'S
import { Link } from "../";
import { IoCart } from "react-icons/io5";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

// REDUX IMPORT'S
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { getQuantityInCart } from "../../utils";
import { change } from "../../redux/Theme";

interface IHeaderProps {
  openCart: () => void;
}

const Header = ({ openCart }: IHeaderProps) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.products);
  const theme = useSelector((state: RootState) => state.theme.currentValue);

  const themeIsLight = theme === "light";

  return (
    <Styles.Header data-testid="header">
      <Link href="/" title="MKS Sistemas">
        MKS
        <span>Sistemas</span>
      </Link>

      <Styles.Theme
        data-testid="theme-button"
        type="button"
        title={themeIsLight ? "Ativar Modo Escuro" : "Ativar Modo Claro"}
        onClick={() => dispatch(change())}
      >
        {themeIsLight ? <BsFillMoonFill /> : <BsFillSunFill />}
      </Styles.Theme>

      <Styles.Cart
        data-testid="cart-button"
        type="button"
        title="Abrir Carrinho"
        onClick={openCart}
      >
        <i>
          <IoCart />
        </i>
        {getQuantityInCart(cart)}
      </Styles.Cart>
    </Styles.Header>
  );
};

export default Header;
