import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ICartItem } from "./pages/Cart";
import { cartActions } from "./store";

const CardStyles = styled.div`
  position: relative;
  height: fit-content;
  max-height: 30rem;
  width: 250px;
  background-color: white;
  box-shadow: 0 0 4px #00000068;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 100ms ease-in-out;
  & .card-info {
    padding: 1rem;
    /* padding-bottom: 0; */
    gap: 0.7rem;
  }
  &:hover {
    transform: scale(1.01);
  }
  & h1 {
    font-size: 1rem;
  }
  & .image {
    width: 100%;
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
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

  & button {
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: #006eff;
    color: white;
    font-weight: 600;
    bottom: 0;
  }
  & .name {
    font-weight: lighter;
    font-size: 1.2rem;
    width: 60%;
    height: 1rem;
    display: flex;
    align-items: center;
  }

  & p {
    font-size: smaller;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* text-overflow: ellipsis; */
    /* height: min-content; */
    /* white-space: nowrap; */
    /* display: inline-block; */
  }

  & .row-1 {
    display: flex;
    align-items: center;
  }
`;

type Props = {
  produto: ICartItem;
};

const Card = ({ produto }: Props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.items);

  return (
    <CardStyles>
      <div className="card-info">
        <img className="image" src={produto.photo} alt="" />
        <div className="row-1">
          <h1 className="name">{produto?.name}</h1>
          <label className="price">R${produto.price}</label>
        </div>
        <p>{produto?.description}</p>
      </div>
      <button onClick={() => dispatch(cartActions.addToCart(produto))}>
        <i className="fa-solid fa-bag-shopping"></i>COMPRAR
      </button>
    </CardStyles>
  );
};

export default Card;
