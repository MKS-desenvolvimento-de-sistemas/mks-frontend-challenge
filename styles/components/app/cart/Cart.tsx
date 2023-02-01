import React from 'react';
import {CheckOutBox,
        BoxCart,
        CheckOutTitle, 
        Flex, 
        CheckOutCard,
        CheckOutCardDetails,
        CheckOutCardAmount,
        CheckOutButton
    } from '../../../styles'
import { useSelector } from "react-redux";
import { CloseIcon } from './CloseIcon';
import { MathNumber} from '../tools/math/MathNumber';
import Img from '../image/Image';
// import { ShowHide } from '../tools/math/ShowHide';

export function Cart(props) {
  const CartData = useSelector((state: any) => state?.products?.cart);
  return (
    props?.isOpen && <CheckOutBox id="checkBox">
        <BoxCart>
            <Flex>
                <CheckOutTitle>
                    Carrinho de compras
                </CheckOutTitle> 
                <div onClick={props?.toggleMenu}>
                    <CloseIcon />
                </div>
                 
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
