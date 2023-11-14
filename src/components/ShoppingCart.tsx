import { useContext, useState } from 'react';
import CartContext from '../context/cartContext';
import { StyledAddProduct,
  StyledAddRemove,
  StyledButtonAddRemove,
  StyledButtonFinalizar,
  StyledCart, StyledCloseCart, StyledDelete, StyledHeaderCart, StyledImg, StyledPrice,
  StyledTotalPrice, StyledProductCard } from '../styles/cartStyles';

type Total = {
  [productId: number]: {
    count: number;
    price: number;
  };
};

export default function ShoppingCart() {
  const { cart, upDateCart, setShowCart } = useContext(CartContext);
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

  const remove = (productId: number, price: number) => {
    console.log(total[productId]?.count);

    if (total[productId]?.count >= 1) {
      setTotal((prevCounts) => {
        const updatedCount = (prevCounts[productId]?.count || 0) - 1;
        const updatedPrice = price * updatedCount;

        return {
          ...prevCounts,
          [productId]: {
            count: updatedCount,
            price: updatedPrice,
          },
        };
      });
    }
  };
  const sum = () => {
    return Object.values(total).reduce((acc, curr) => acc + curr.price, 0);
  };

  const handleDelete = (id: number) => {
    const prod = cart.products.find((product) => product.id === id);
    if (prod) {
      remove(prod.id, prod.price);
    }
    upDateCart(id);
  };

  const handleClick = () => {
    setShowCart(false);
    console.log('clicou');
  };
  return (
    <StyledCart>
      <StyledHeaderCart>
        <div>Carrinho de compras</div>
        <StyledCloseCart onClick={ handleClick }>X</StyledCloseCart>
      </StyledHeaderCart>

      <div style={ { overflow: 'auto', height: '73%' } }>
        {cart.products.map((product) => (
          <div key={ product.id }>
            <StyledProductCard>
              <StyledDelete onClick={ () => handleDelete(product.id) }>X</StyledDelete>
              <StyledImg src={ product.photo } alt="" />
              <div>{product.name}</div>
              <StyledAddProduct>

                <StyledAddRemove>
                  <StyledButtonAddRemove
                    type="button"
                    onClick={ () => remove(product.id, product.price) }
                  >
                    -

                  </StyledButtonAddRemove>
                  <span id="count">{total[product.id]?.count || 0}</span>
                  <StyledButtonAddRemove
                    type="button"
                    onClick={ () => add(product.id, product.price) }
                  >
                    +
                  </StyledButtonAddRemove>

                </StyledAddRemove>
                <StyledPrice>{product.price}</StyledPrice>
              </StyledAddProduct>
            </StyledProductCard>
          </div>
        ))}
      </div>
      <StyledTotalPrice>
        <div>TOTAL</div>
        <div>
          R$
          {sum()}
        </div>
      </StyledTotalPrice>
      <StyledButtonFinalizar>FINALIZAR COMPRA</StyledButtonFinalizar>
    </StyledCart>
  );
}
