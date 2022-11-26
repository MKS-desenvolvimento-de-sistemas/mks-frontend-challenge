import React from "react";
import { connect } from "react-redux";
import {
  oneLessProduct,
  oneMoreProduct,
  removeItem,
  updateTotalValue,
} from "../redux/actions";

interface Product {
  img: string;
  title: string;
  price: string;
  count: number;
  id: string;
};

interface Props extends Product {
  addProduct: Function;
  removeProduct: Function;
  updateValue: Function;
  removeItemFromCart: Function;
}

// function ProductCardCart({
//   img,
//   title,
//   price,
//   count,
//   id,
//   ...props
// }: Product) {
//   const oneLess = () => {
//     const { removeProduct, updateValue } = props as ReduxProps;
//     removeProduct(id);
//     updateValue(-(Number(price.split(".")[0])));
//   };

//   const oneMore = () => {
//     const { addProduct, updateValue } = props as ReduxProps;
//     addProduct(id);
//     updateValue(Number(price.split(".")[0]));
//   };

//   const remove = () => {
//     const { removeItemFromCart, updateValue } = props as ReduxProps;
//     updateValue(-(Number(price.split(".")[0]) * count));
//     removeItemFromCart(id)
//   }

//   return (
//     <div className="product-card-cart">
//       <img src={img} alt={title} />
//       <p className="title">{title}</p>
//       <div className="counter">
//         qtd
//         <div>
//           <button onClick={oneLess}>-</button>
//           <p>{count}</p>
//           <button onClick={oneMore}>+</button>
//         </div>
//       </div>
//       <p className="price">{`R$${
//         (price.split(".")[0] as unknown as number) * count
//         }`}</p>
//       <button onClick={remove} className="remove-item">X</button>
//     </div>
//   );
// }

class ProductCardCart extends React.Component<Props> {

  oneLess = () => {
    const { id, price } = this.props;
    const { removeProduct, updateValue } = this.props;
    removeProduct(id);
    updateValue(-(Number(price.split(".")[0])));
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
    removeItemFromCart(id)
  }
  render() {
    const { img, title, count, price, id } = this.props;
    return (
      <div data-testid={`product-cart-${id}`} className="product-card-cart">
        <img src={img} alt={title} />
        <p className="title">{title}</p>
        <div className="counter">
          qtd
          <div>
            <button data-testid={`less-button-product-${id}`} onClick={this.oneLess}>-</button>
            <p data-testid={`product-cart-count-${id}`}>{count}</p>
            <button data-testid={`more-button-product-${id}`} onClick={this.oneMore}>+</button>
          </div>
        </div>
        <p data-testid={`product-cart-price-${id}`} className="price">{`R$${
          (price.split(".")[0] as unknown as number) * count
          }`}</p>
        <button data-testid={`remove-item-${id}`} onClick={this.remove} className="remove-item">X</button>
      </div>
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
