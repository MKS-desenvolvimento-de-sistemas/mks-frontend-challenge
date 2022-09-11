import React from 'react'

import Shimmer from '../Shimmer'
import { Box } from '../styles'

import {
  Container,
} from './styles'

const ProductCardSkeleton = () => {
  return (
    <Container>
      <Shimmer />
        <div className="content-wrapper">
          <Box width="100%" borderRadius="8px" height="130px" margin="0 0 10px 0" />
          <Box width="60%" borderRadius="8px" height="30px" margin="0 0 3px" />
          <Box width="100%" borderRadius="8px" height="40px" />
        </div>
        <Box width="100%" height="45px" />
    </Container>
  )
}

export default ProductCardSkeleton
