import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICartItem } from "./pages/Cart";
import { cartActions } from "./store";

const CartItemStyles = styled.div`
  position: relative;
  border-bottom: 1px solid black;
  height: 5rem;
  background-color: white;
  border-radius: 0.5rem;
  /* justify-content: space-between; */
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  z-index: 3;
  height: 3.5rem;
  & img {
    height: 3.5rem;
  }

  & .item-name {
    font-family: Geneva, Verdana, sans-serif;
    font-weight: 100;
    width: 4rem;
    font-size: smaller;
  }
  & .price {
    position: relative;
    font-size: 1.2rem;
    background-color: #3f3f3f;
    border-radius: 0.3rem;
    padding: 0.4rem;
    font-weight: 600;
    /* right: 3px; */
    color: white;
    /* top: 235px; */
  }

  & .item-quantity {
    display: flex;
    & button {
      font-size: 0.5rem;
    }
  }

  & .delete-btn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center ;
    top: -15px;
    right: -15px;
    background-color: #3f3f3f;
    color: white;
    width: 0.5rem;
    /* height: 0.5rem; */
    border-radius: 50rem;
  }
`;

type Props = {
  item: ICartItem;
};

const CartItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  const [exists, setExists] = useState(true);
  const items = useSelector((state) => state.items);

  useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <CartItemStyles>
      <img src={item.photo} alt="" />
      <label className="item-name">{item.name}</label>
      <div className="item-quantity">
        <button
          onClick={() => {
            dispatch(cartActions.decreaseItem(item));
            console.log(items);
          }}
        >
          -
        </button>
        {item.quantity}
        <button onClick={() => dispatch(cartActions.addAdditional(item))}>
          +
        </button>
      </div>
      <label className="price">{item.price}</label>

      <button
        className="delete-btn"
        onClick={() => dispatch(cartActions.deleteItem(item))}
      >
        X
      </button>
    </CartItemStyles>
  );
};

export default CartItem;
