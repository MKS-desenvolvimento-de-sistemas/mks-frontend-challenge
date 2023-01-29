import { CartCard, CloseButton, Quantity } from "./style";
import { IProduct } from "../../store/modules/Products";

const CartProduct = ({photo, name, price}: IProduct) => {
  return (
    <>
      <CartCard className="product">
        <img src={photo} alt={name} />
        <p className="product-name">{name}</p>

        <Quantity>
          <div className="quantity-buttons">
            <button className="quantity sub">-</button>
            <span className="split"></span>
            <p className="quantity">1</p>
            <span className="split"></span>
            <button className="quantity add">+</button>
          </div>
        </Quantity>

        <p className="price">{`R$${price.split(".")[0]}`}</p>

        <CloseButton close="card" dimension="small" font="small">X</CloseButton>
      </CartCard>
    </>
  );
};

export default CartProduct;
