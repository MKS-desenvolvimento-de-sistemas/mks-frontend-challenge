import React, { useState, useEffect } from 'react'
import Image from 'next/image';

import { numberToPrice } from '../../helpers/priceFormat';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { decrementProductAmount, incrementProductAmount, removeProduct } from '../../store/product.store';

import {
  Container,
  DeleteProduct,
  ImageWrapper,
  ControlsWrapper,
  Controls,
} from './styles'

type Props = {
  product: any;
}

const ProductCart = ({
  product
}: Props) => {
  const products = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()
  const [amount, setAmount] = useState(1)

  useEffect(() => {
    setAmount(products.find(p => p.id === product.id)?.amount || 1)
  }, [products])

  const handleIncrementAmount = () => {
    setAmount(state => state + 1)
    dispatch(incrementProductAmount({ id: product.id }))
  }

  const handleDecrementAmount = () => {
    if (amount === 1) return
    setAmount(state => state - 1)
    dispatch(decrementProductAmount({ id: product.id }))
  }

  return (
    <Container>
      <ImageWrapper>
        {
          product.photo && (
            <Image
              src={product.photo}
              alt={product.name}
              width={60}
              height={60}
              layout='intrinsic'
              objectFit='contain'
              placeholder='blur'
              blurDataURL={product.photo}
            />
          )
        }
      </ImageWrapper>

      <h3>{product.name}</h3>

      <div className="responsive-wrapper">
        <ControlsWrapper>
          <p>Qtd:</p>
          <Controls>
            <button
              className={`${amount === 1 ? 'is-disabled' : ''}`}
              onClick={handleDecrementAmount}
              disabled={amount === 1}
              data-testid="decrement-product"
            >
              -
            </button>
            <p data-testid="product-amount">{amount}</p>
            <button
              onClick={handleIncrementAmount}
              data-testid="increment-product"
            >+</button>
          </Controls>
        </ControlsWrapper>

        <p>{numberToPrice(product.price)}</p>
      </div>

      <DeleteProduct
        data-testid="remove-cart-product"
        onClick={() => dispatch(removeProduct({ id: product.id }))}
      >x</DeleteProduct>
    </Container>
  )
}

export default ProductCart
