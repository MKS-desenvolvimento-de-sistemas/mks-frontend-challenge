import { connect } from "react-redux";
import React from "react";
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
      <div className="product-card">
        <img src={img} alt={title} />
        <div className="price-name">
          <p>{title}</p>
          <p data-testid={`product-price-${id}`} className="price">
            R${price.split(".")[0]}
          </p>
        </div>
        <p className="description">{description}</p>
        <button
          data-testid={`buy-${id}`}
          className="comprar"
          id={`${id}`}
          onClick={this.addProductToCart}
          type="button"
        >
          <img src={shopping} />
          Comprar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  addProduct: (id: number): void => dispatch(addProduct(id)),
  updateValue: (value: number) => dispatch(updateTotalValue(value)),
});

export default connect(null, mapDispatchToProps)(ProductCard);
