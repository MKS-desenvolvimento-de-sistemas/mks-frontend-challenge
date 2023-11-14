import { useContext, useEffect, useReducer, useState } from 'react';
import { styled } from 'styled-components';
import CartContext from '../context/cartContext';

const StyledCart = styled.div`
    background-color: white;
    height: 100vh;
    width: 50vw;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    transition: 0.5s;
    border-left: 1px solid black;

`;

type Total = {
  [productId: number]: {
    count: number;
    price: number;
  };
};

export default function ShoppingCart() {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState({} as Total);

  const add = (productId: number, price: number) => {
    setTotal((prevCounts) => {
      const updatedCount = (prevCounts[productId]?.count || 0) + 1;
      const updatedPrice = price * updatedCount;

      return {
        ...prevCounts,
        [productId]: {
          count: updatedCount,
          price: updatedPrice,
        },
      };
    });
  };

  const remove = () => {
    // if (count === 1) {
    //   return;
    // }
    // setTotal(count - 1);
  };
  return (
    <StyledCart>
      shoppingCart
      <div>Carrinho de compras</div>
      <button>X</button>
      <div>
        {cart.products.map((product) => (
          <div key={ product.id }>
            <img src={ product.photo } alt="" />
            <div>{product.name}</div>
            <div>{product.price}</div>
            <button
              type="button"
              onClick={ () => add(product.id, product.price) }
            >
              +
            </button>
            <span id="count">{total[product.id]?.count || 0}</span>
            <button type="button" onClick={ remove }>-</button>
          </div>
        ))}
      </div>
      <div>TOTAL</div>
      <div>
        R$
        {Object.values(total).reduce((acc, curr) => acc + curr.price, 0)}
      </div>
      <button>FINALIZAR COMPRA</button>
    </StyledCart>
  );
}
