import { count } from "console";
import React from "react";
import { connect } from "react-redux";
import Product from "../interfaces";
import ProductCardCart from "./ProductCardCart";

type Props = {
  products: Product[];
  cart: ProductCart[];
  value: number;
};

type ProductCart = { productId: string; count: number };

type CartType = { products: ProductCart; value: number };

class Cart extends React.Component {
  render() {
    const { products, cart, value } = this.props as Props;
    return (
      <aside>
        <div className="cart-header">
          <p>Carrinho de Compras</p>
          <button type="button">X</button>
        </div>
        <div className="products">
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
        </div>
        <div className="footer">
          <div className="total">
          <p>Total:</p>
          <p>R${`${value}`}</p>
          </div>
          <button>Finalizar Compra</button>
        </div>
      </aside>
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
});

export default connect(mapStateToProps)(Cart);
