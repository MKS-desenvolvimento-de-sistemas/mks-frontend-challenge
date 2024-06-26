import React from 'react'
import { Skeleton, ContainerShimmer, Shimme } from './SkeletonElementStyles'


function SkeletonElement() {
  return (
    <>
      <Skeleton>
          <ContainerShimmer>
            <Shimme/>
          </ContainerShimmer>
      </Skeleton>
    </>
    
  )
}

export default SkeletonElement