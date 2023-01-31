import React from 'react';
import {CheckOutBox,
        BoxCart,
        CheckOutTitle, 
        Flex, 
        CheckOutCard,
        CheckOutCardDetails,
        CheckOutCardAmount,
        CheckOutButton
    } from '../../../styles/styles'
import { useSelector } from "react-redux";
import { CloseIcon } from './CloseIcon';
import { MathNumber} from '../tools/math/MathNumber';
import Img from '../image/Image';



export function Cart() {
  const CartData = useSelector((state: any) => state?.products?.cart);
  return (
    <CheckOutBox>
        <BoxCart>
            <Flex>
                <CheckOutTitle>
                    Carrinho de compras
                </CheckOutTitle> 
                <CloseIcon /> 
            </Flex>                         
            {CartData.map((CartDataList: any) => {            
                return (
                    <CheckOutCard>   
                        <CheckOutCardDetails>
                            <Img src={CartDataList?.photo} width={61} height={50} ></Img>
                            <h1>{CartDataList?.name}</h1>
                            <CheckOutCardAmount>
                                <h2>
                                    Qtd:
                                </h2>
                                <h3>
                                    {CartDataList?.counter}                                    
                                </h3>
                            </CheckOutCardAmount>
                            <h4>
                                {MathNumber(CartDataList?.price)}
                            </h4>

                          
                        
                        
                      
                        
                        </CheckOutCardDetails>
                        
                    </CheckOutCard>
                )
            })} 
        </BoxCart>
        
        <CheckOutButton>
            <h1>
                Finalizar Compra
            </h1>
        </CheckOutButton>
    </CheckOutBox>
  );
}
