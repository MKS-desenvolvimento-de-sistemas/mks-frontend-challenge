import Product from '../Product/Product'
import { useProductsQuery } from '../../services/ProductApi'
import { ContainerMain } from './MainStyled'
import SkeletonElement from '../Skeleton/SkeletonElement'

function Main() {

  const {error, isLoading, isSuccess} = useProductsQuery()

  return (
    <ContainerMain>
        {isLoading && [1,2,3,4,5,6,7,8].map((n) => <SkeletonElement key={n}/>)}
        {error && <h2>something went wrong</h2>}
        {isSuccess && <Product/>}
    </ContainerMain>
  )
}

export default Main