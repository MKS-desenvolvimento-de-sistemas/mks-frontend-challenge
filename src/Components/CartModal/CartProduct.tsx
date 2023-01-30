import { useDispatch } from "react-redux";

import { addToCart, decrease, removeFromCart } from "../../store/modules/Cart";
import { CartCard, CloseButton, Quantity } from "./style";
import { IProduct } from "../../store/modules/Products";

const CartProduct = ({ id, photo, name, price, quantity }: IProduct) => {
  const dispatch = useDispatch();

  return (
    <>
      <CartCard>
        <img src={photo} alt={name} />
        <p className="product-name">{name}</p>

        <section className="quantity-price">
          <Quantity>
            <div className="quantity-buttons">
              <button
                onClick={() => dispatch(decrease({ id }))}
                className="quantity sub"
              >
                -
              </button>
              <span className="split"></span>
              <p className="quantity">{quantity}</p>
              <span className="split"></span>
              <button
                onClick={() => dispatch(addToCart({ id }))}
                className="quantity add"
              >
                +
              </button>
            </div>
          </Quantity>

          <p className="price">{`R$${price.split(".")[0]}`}</p>
        </section>

        <CloseButton className="close-button"
          onClick={() => dispatch(removeFromCart({ id }))}
          close="card"
          dimension="small"
          font="small"
        >
          X
        </CloseButton>
      </CartCard>
    </>
  );
};

export default CartProduct;
