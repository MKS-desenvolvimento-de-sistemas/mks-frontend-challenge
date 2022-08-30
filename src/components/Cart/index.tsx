import * as Styles from "./styles";

import { getPriceInCart } from "../../utils";
import { IProductCart } from "../../types/api";
import { AiFillCloseCircle } from "react-icons/ai";
import CartCard from "./Card";

interface ICartProps {
  cart: IProductCart[];
  closeCart: () => void;
}

const Cart = ({ cart, closeCart }: ICartProps) => {
  return (
    <Styles.Cart data-testid="cart">
      <Styles.CartHeader>
        <h2>Carrinho de Compras</h2>
        <AiFillCloseCircle
          data-testid="cart-close"
          title="Fechar Carrinho"
          style={{ cursor: "pointer" }}
          onClick={closeCart}
        />
      </Styles.CartHeader>

      <Styles.CartList data-testid="cart-list">
        {cart.map((product) => (
          <CartCard key={`cart-${product.id}`} {...product} />
        ))}
      </Styles.CartList>

      <Styles.CartTotal>
        <span>Total</span>
        <span data-testid="cart-total">{`R$ ${getPriceInCart(cart)}`}</span>
      </Styles.CartTotal>

      <Styles.CartButton type="button" title="Finalizar Compra">
        Finalizar Compra
      </Styles.CartButton>
    </Styles.Cart>
  );
};

export default Cart;
