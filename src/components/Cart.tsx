import React from "react";
import { connect } from "react-redux";
import Product from "../interfaces";
import { showCart } from "../redux/actions";
import { CartFooterStyled, CartStyled, HeaderCart, ProductsStyled } from "./cartStyled";
import ProductCardCart from "./ProductCardCart";

type Props = {
  products: Product[];
  cart: ProductCart[];
  value: number;
  visible: boolean;
  updateVisibility: Function;
};

type ProductCart = { productId: string; count: number };

export type CartType = {
  products: ProductCart;
  value: number;
  visible: boolean;
};

class Cart extends React.Component {
  changeCart = () => {
    const { updateVisibility } = this.props as Props;
    updateVisibility();
  };

  render() {
    const { products, cart, value, visible } = this.props as Props;
    if (!visible) {
      return "";
    }

    return (
      <CartStyled>
        <HeaderCart className="cart-header">
          <p>Carrinho de Compras</p>
          <button onClick={this.changeCart} type="button">
            X
          </button>
        </HeaderCart>
        <ProductsStyled className="products">
          {cart.map((item) => {
            const img = products.find(
              (product) => product.id === Number(item.productId)
            )?.photo;
            const title = products.find(
              (product) => product.id === Number(item.productId)
            )?.name;
            const price = products.find(
              (product) => product.id === Number(item.productId)
            )?.price;
            return (
              <ProductCardCart
                key={`${item.productId}-${item.count}`}
                id={item.productId}
                img={img ? img : ""}
                title={title ? title : ""}
                price={price ? price : "0"}
                count={item.count}
              />
            );
          })}
        </ProductsStyled>
        <CartFooterStyled className="footer">
          <div className="total">
            <p>Total:</p>
            <p>R${`${value}`}</p>
          </div>
          <button>Finalizar Compra</button>
        </CartFooterStyled>
      </CartStyled>
    );
  }
}

const mapStateToProps = (store: {
  products: { products: Product[] };
  cart: CartType;
}) => ({
  products: store.products.products,
  cart: store.cart.products,
  value: store.cart.value,
  visible: store.cart.visible,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateVisibility: () => dispatch(showCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
