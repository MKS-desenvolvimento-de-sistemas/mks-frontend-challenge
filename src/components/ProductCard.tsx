import { connect } from "react-redux";
import React from "react";
import {
  ProductCardStyled,
  PriceStyled,
  TitleStyled,
  DescriptionStyled,
  ShoppingBagStyled,
  ProductImage,
} from "./productCardStyled";
import { addProduct, updateTotalValue } from "../redux/actions";
import shopping from "../images/shopping-bag.svg";

interface Product {
  img: string;
  title: string;
  description: string;
  price: string;
  id: number;
}

interface Props extends Product {
  addProduct: Function;
  updateValue: Function;
}

interface Props {}

class ProductCard extends React.Component<Props> {
  addProductToCart = ({ target }: { target: any }): void => {
    const { id, price } = this.props;
    const { addProduct, updateValue } = this.props;
    addProduct(`${id}`);
    updateValue(Number(price.split(".")[0]));
  };
  render() {
    const { img, title, description, price, id } = this.props as Product;
    return (
      <ProductCardStyled>
        <ProductImage src={img} alt={title} />
        <div>
          <TitleStyled>{title}</TitleStyled>
          <PriceStyled data-testid={`product-price-${id}`}>
            R${price.split(".")[0]}
          </PriceStyled>
        </div>
        <DescriptionStyled>{description}</DescriptionStyled>
        <button
          data-testid={`buy-${id}`}
          id={`${id}`}
          onClick={this.addProductToCart}
          type="button"
        >
          <ShoppingBagStyled src={shopping} />
          Comprar
        </button>
      </ProductCardStyled>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  addProduct: (id: number): void => dispatch(addProduct(id)),
  updateValue: (value: number) => dispatch(updateTotalValue(value)),
});

export default connect(null, mapDispatchToProps)(ProductCard);
