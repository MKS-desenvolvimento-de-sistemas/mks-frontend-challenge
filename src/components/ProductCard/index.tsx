import Image from 'next/image';
import React from 'react'
import { BiArchive } from 'react-icons/bi'
import { toast } from 'react-toastify'

import { numberToPrice } from '../../helpers/priceFormat';
import { useAppDispatch } from '../../hooks/store';
import { IProduct } from '../../interfaces/IProduct';
import { addProduct } from '../../store/product.store';

import {
  Container,
  ImageWrapper,
  Info,
  Title,
  Price,
} from './styles'

type Props = {
  product: IProduct;
}

const ProductCard = ({
  product
}: Props) => {
  const dispatch = useAppDispatch()

  function handleAddProduct() {
    dispatch(addProduct({ product }))
    toast.success('Produto adicionado no carrinho!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  return (
    <Container>
      <ImageWrapper>
        {
          product.photo && (
            <Image
              src={product.photo}
              alt={product.name}
              width={218}
              height={120}
              layout='responsive'
              objectFit='contain'
              placeholder='blur'
              blurDataURL={product.photo}
            />
          )
        }
      </ImageWrapper>

      <Info>
        <Title>
          <h2>{product.name}</h2>
          <Price>{numberToPrice(product.price)}</Price>
        </Title>

        <p>{product.description}</p>
      </Info>
      
      <button data-testid="add-product-button" onClick={handleAddProduct}>
        <BiArchive size={20} />
        comprar
      </button>
    </Container>
  )
}

export default ProductCard
