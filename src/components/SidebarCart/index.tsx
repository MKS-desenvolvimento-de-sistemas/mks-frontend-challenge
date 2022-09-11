import React from 'react'

import { numberToPrice } from '../../helpers/priceFormat';
import { useCart } from '../../hooks/cart';
import { useAppSelector } from '../../hooks/store';
import If from '../If';
import ProductCart from '../ProductCart';

import {
  Container,
  Cards,
  Total,
  CloseButton,
  SubmitButton,
  Footer,
} from './styles'

const SidebarCart = () => {
  const { cartIsOpen, toggleSidebarCart } = useCart()
  const products = useAppSelector(state => state.products)

  const subtotal = products.reduce((acc, product) => {
    return Number(product.price) * Number(product.amount) + acc
  }, 0)

  return (
    <Container isOpen={cartIsOpen}>
      <h2>
        Carrinho
        <br />
        de compras
      </h2>

      <Cards>
        {
          products.map(product => (
            <ProductCart key={product.id} product={product} />
          ))
        }

        <If condition={products.length === 0}>
          <span>
            Nenhum produto no carrinho
          </span>
        </If>
      </Cards>

      <Footer>
        <Total>
          <p>Total: </p>
          <p data-testid="subtotal">{numberToPrice(subtotal)}</p>
        </Total>

        <SubmitButton
          disabled={products.length === 0}
        >Finalizar Compra</SubmitButton>
      </Footer>

      <CloseButton onClick={toggleSidebarCart}>X</CloseButton>
    </Container>
  )
}

export default SidebarCart
