import React from 'react'
import { MdShoppingCart } from 'react-icons/md'

import { useAppSelector } from '../../hooks/store'
import { useCart } from '../../hooks/cart'
import {
  Container,
  Logo,
  CartWrapper,
  Wrapper,
} from './styles'

const Header = () => {
  const { toggleSidebarCart } = useCart()
  const products = useAppSelector(state => state.products)

  const productAmount = products.reduce((acc, product) => {
    return product.amount * 1 + acc
  }, 0)

  return (
    <Container>
      <Wrapper>
        <Logo>
          <h1 data-testid="title">MKS</h1>
          <p>Sistemas</p>
        </Logo>

        <CartWrapper onClick={toggleSidebarCart}>
          <MdShoppingCart size={20} />
          <span data-testid="cart-size">{productAmount}</span>
        </CartWrapper>
      </Wrapper>
    </Container>
  )
}

export default Header
