import React, { useContext } from 'react'
import { MyContext } from "../../ProdutosContext";
import ProductsList from '../ProductCartList/CartProducts';


import { 
    ContainerHeader,
    ContainerLogoPah,
    Logo,
    P,
    ButtonCartHeader,
    AmountItems,
} from './HeaderStyled'


const cart = require('../../imgs/Cart.png')

const Header: React.FC = () => {

  const context = useContext(MyContext)

  return (
    <ContainerHeader>
        <ContainerLogoPah>
            <Logo>MKS</Logo> 
            <P>Sistemas</P>
        </ContainerLogoPah>
       <ButtonCartHeader onClick={context?.toggleFunction}>
            <img style={{width:'19px', height: '18px'}} src={cart} alt="" />
            <AmountItems style={{}}>{context?.itemsTocart.length}</AmountItems>
       </ButtonCartHeader>
        {context?.toggle && <ProductsList/>}
    </ContainerHeader>
  )
}

export default Header