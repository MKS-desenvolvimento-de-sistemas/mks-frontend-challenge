import { CardCart } from "../Cards/CardCart";
import { Sidebar } from "../Sidebar";
import { CartContainer } from "./style";

export const Cart = ({ active }: any) => {
  return (
    <CartContainer>
      <Sidebar active={active} className="cart_container">
        <section className="cart_container-title">
          <h2>Carrinho de compras</h2>
        </section>
        <section className="cart_container-prod">
          <CardCart />
        </section>
        <section className="cart_container-bottom">
          <section className="cart_container-total">
            <h2>Total:</h2>
            <h2 className="cart_container-total-price">R$798</h2>
          </section>
          <button className="cart_container-button">Finalizar Compra</button>
        </section>
      </Sidebar>
    </CartContainer>
  );
};
