import * as Styles from "./styles";
import { useState } from "react";

// REDUX IMPORT'S
import { useDispatch } from "react-redux";
import { add, removeOne, removeAll } from "../../../redux/Cart";

import { IProductCart } from "../../../types/api";
import { AiOutlineClose } from "react-icons/ai";
import QuantityControl from "../QuantityControl";
import { Price } from "../../";

const CartCard = (props: IProductCart) => {
  const { id, name, price, photo, quantity } = props;
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(add(props));
  };

  const decrement = () => {
    dispatch(removeOne(id));
  };

  const remove = () => {
    dispatch(removeAll(id));
  };

  return (
    <Styles.Card>
      <Styles.CardRemove
        type="button"
        title="Remover do Carrinho"
        onClick={remove}
      >
        <AiOutlineClose />
      </Styles.CardRemove>
      <Styles.CardImage imageUrl={photo} />
      <Styles.CardInfo>
        <h4>{name}</h4>
        <QuantityControl
          quantity={quantity}
          increment={increment}
          decrement={decrement}
        />
        <Price price={Number(price)} type="cart" />
      </Styles.CardInfo>
    </Styles.Card>
  );
};

export default CartCard;
