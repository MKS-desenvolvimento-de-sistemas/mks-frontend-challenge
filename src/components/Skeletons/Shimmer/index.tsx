import React, { ReactNode } from 'react'

import { Container } from './styles'

type Props = {
  children?: ReactNode;
}

const Shimmer = ({
  children
}: Props) => {
  return (
    <Container>
      <div className="shimmer">
        {children}
      </div>
    </Container>
  )
}

export default Shimmer
