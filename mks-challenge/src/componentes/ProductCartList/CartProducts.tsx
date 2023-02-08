import React, {useContext} from 'react'
import { MyContext } from "../../ProdutosContext";
import {
  ContainerCartList,
  ContainerTitleCart, 
  TitleCart,
  ButtonX, 
  ContainerItems,
  ContainerItem, 
  ContainerTotalPrice,
  Total,
  TotalPrice,
  ButtonBuy,
  ImgItem,
  NameItemCart,
  ContainerQuantity,
  Qtd,
  ContainerAmountItem,
  PraiceItem,
  AmountItem,
  ButtonItemX
} from './ProductsListStyled'

const ProductsList: React.FC = () => {

  const context =  useContext(MyContext);

  if (context === undefined) {
    throw new Error("Context não foi fornecido");
  }

  return (
    <ContainerCartList>
      <ContainerTitleCart>
          <TitleCart>Carrinho de compras</TitleCart>
          <ButtonX style={{cursor: 'pointer'}} onClick={context?.toggleFunction}>X</ButtonX>
      </ContainerTitleCart>

      <ContainerItems>
          {context.itemsTocart.map((item) =>{
            return(
              <ContainerItem key={item.id}>
                <ButtonItemX onClick={() =>context.DeleteItemFromCart(item)} style={{cursor: 'pointer', position: 'absolute'}}>X</ButtonItemX>
                <ImgItem src={item.photo}/>
                <NameItemCart>{item.name}</NameItemCart>
                <ContainerQuantity>
                  <Qtd>Qtd:</Qtd>
                  <ContainerAmountItem>
                      <p onClick={() => context.handleCountLess(item)} style={{cursor: 'pointer'}}>-</p>
                      <AmountItem>{item.count}</AmountItem>
                      <p onClick={() =>context.handleCountPlus(item)} style={{cursor: 'pointer'}}>+</p>
                  </ContainerAmountItem>
                </ContainerQuantity>
                <PraiceItem>R${Math.trunc(item.price*item.count)}</PraiceItem>
              </ContainerItem>
            )
          })}
      </ContainerItems>
      <ContainerTotalPrice>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Total>Total</Total>
          <TotalPrice>R${context.total}</TotalPrice>
        </div>
        <ButtonBuy style={{cursor: 'pointer'}}>Finalizar Compra</ButtonBuy>
      </ContainerTotalPrice>
    </ContainerCartList>
  )
}

export default ProductsList

