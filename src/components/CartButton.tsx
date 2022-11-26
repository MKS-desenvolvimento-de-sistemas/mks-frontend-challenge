import React from "react";
import { connect } from "react-redux";
import Product from "../interfaces";
import { showCart } from "../redux/actions";
import cart from "../images/cart.svg";
import { CartType } from "./Cart";

type Props = {
  updateVisibility: Function;
  cartItems: Product[];
};

class CartButton extends React.Component {
  changeCart = () => {
    const { updateVisibility } = this.props as Props;
    updateVisibility();
  };

  render() {
    const { cartItems } = this.props as Props;
    const countItems = cartItems.length as number;
    return (
      <button
        data-testid="cart-button"
        className="cart-button"
        onClick={this.changeCart}
        type="button"
      >
        <img src={cart} /> {`${countItems}`}
      </button>
    );
  }
}

const mapStateToProps = (store: { cart: CartType }) => ({
  cartItems: store.cart.products,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateVisibility: () => dispatch(showCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);
