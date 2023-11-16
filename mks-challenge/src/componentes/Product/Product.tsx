import React, {useContext} from 'react'
import { MyContext } from "../../ProdutosContext";
import { useProductsQuery } from '../../services/ProductApi'
import { Skeleton } from '../Skeleton/SkeletonElementStyles';





import { 
    ContainerProduct,
    ImgProduct,
    ContainerNamePrice,
    Price,
    Name,
    Description,
    ButtonBuy,
} from './ProductStyled'

const Product: React.FC =() => {
    const context =  useContext(MyContext);
    
    const bag = require('../../imgs/shopping-bag.png')

    const {data, isLoading} = useProductsQuery()


    if (context === undefined) {
      throw new Error("Context não foi fornecido");
    }

  return (

    <>
    
        {data?.products.map((item:{name:string, photo:string, id:string, price: number, description: string, brand: string, count: number })=>{
            return(
              <>
              
                <ContainerProduct key={item.id}>
                  
                    <ImgProduct src={item.photo}></ImgProduct>
                    <ContainerNamePrice>
                    <Name>{item.name}</Name>
                    <Price>R${Math.trunc(item.price)}</Price>
                    </ContainerNamePrice>
                    <Description>{item.description}</Description>
                    <ButtonBuy style={{cursor: 'pointer'}} data-testid='buy-button' onClick={() => context.handleShopping(item)}><img src={bag}></img> COMPRAR</ButtonBuy>
                </ContainerProduct>
                
              </>
              
            )
          })}

          
    </>
  )
}

export default Product