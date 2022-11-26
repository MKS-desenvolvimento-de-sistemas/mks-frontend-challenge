import React from "react";
import { connect } from "react-redux";
import {
  oneLessProduct,
  oneMoreProduct,
  removeItem,
  updateTotalValue,
} from "../redux/actions";
import { PriceStyled, ProductCardCartStyled } from "./productCardCartStyled";

interface Product {
  img: string;
  title: string;
  price: string;
  count: number;
  id: string;
}

interface Props extends Product {
  addProduct: Function;
  removeProduct: Function;
  updateValue: Function;
  removeItemFromCart: Function;
}

class ProductCardCart extends React.Component<Props> {
  oneLess = () => {
    const { id, price } = this.props;
    const { removeProduct, updateValue } = this.props;
    removeProduct(id);
    updateValue(-Number(price.split(".")[0]));
  };

  oneMore = () => {
    const { id, price } = this.props;
    const { addProduct, updateValue } = this.props;
    addProduct(id);
    updateValue(Number(price.split(".")[0]));
  };

  remove = () => {
    const { price, id, count } = this.props as Product;
    const { removeItemFromCart, updateValue } = this.props;
    updateValue(-(Number(price.split(".")[0]) * count));
    removeItemFromCart(id);
  };
  render() {
    const { img, title, count, price, id } = this.props;
    return (
      <ProductCardCartStyled
        data-testid={`product-cart-${id}`}
        className="product-card-cart"
      >
        <img src={img} alt={title} />
        <p className="title">{title}</p>
        <div className="counter">
          qtd
          <div>
            <button
              data-testid={`less-button-product-${id}`}
              onClick={this.oneLess}
            >
              -
            </button>
            <p data-testid={`product-cart-count-${id}`}>{count}</p>
            <button
              data-testid={`more-button-product-${id}`}
              onClick={this.oneMore}
            >
              +
            </button>
          </div>
        </div>
        <PriceStyled>
          <p data-testid={`product-cart-price-${id}`}>{`R$${
            (price.split(".")[0] as unknown as number) * count
          }`}</p>
        </PriceStyled>
        <button
          data-testid={`remove-item-${id}`}
          onClick={this.remove}
          className="remove-item"
        >
          X
        </button>
      </ProductCardCartStyled>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  addProduct: (id: string) => dispatch(oneMoreProduct(id)),
  removeProduct: (id: string) => dispatch(oneLessProduct(id)),
  updateValue: (value: number) => dispatch(updateTotalValue(value)),
  removeItemFromCart: (id: string) => dispatch(removeItem(id)),
});

export default connect(null, mapDispatchToProps)(ProductCardCart);
