import React from 'react';
import {CheckOutBox,
        BoxCart,
        CheckOutTitle, 
        Flex, 
        CheckOutCard,
        CheckOutCardDetails,
        CheckOutCardAmount,
        CheckOutButton,
        CheckOutCardClose,
        CounterBox, 
        CounterButton,
        CheckOutTotal
        } from '../../../styles'
import { useSelector } from "react-redux";
import { CloseIcon } from './CloseIcon';
import { MathNumber} from '../tools/math/MathNumber';
import Img from '../image/Image';
import { SpacingIcon } from './SpacingIcon';
import { Bye, Delete, Reduce } from '../tools/reduce/Reduce';
// import { ShowHide } from '../tools/math/ShowHide';

export function Cart(props: { isOpen: any; toggleMenu: React.MouseEventHandler<HTMLDivElement> | undefined; }) {
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
            {CartData.map((CartDataList: any, index: number) => {            
                return (
                    <CheckOutCard key={index}>
                        <CheckOutCardClose onClick={() => Delete(CartData, CartDataList)}>
                            <CloseIcon />
                        </CheckOutCardClose>                           
                        <CheckOutCardDetails>
                            <Img src={CartDataList?.photo} width={61} height={50} ></Img>
                            <h1>{CartDataList?.name}</h1>
                            <CheckOutCardAmount>
                                <h2>
                                    Qtd:
                                </h2>
                                <CounterBox>
                                    <CounterButton>
                                        <h5>
                                            -
                                        </h5>
                                    </CounterButton>
                                    <SpacingIcon />
                                    <h3>
                                        {CartDataList?.counter}                                    
                                    </h3>
                                    <SpacingIcon />
                                    <CounterButton>
                                        <h6>
                                            +
                                        </h6>
                                    </CounterButton>
                                </CounterBox>                               
                            </CheckOutCardAmount>
                            <h4>
                                {MathNumber(CartDataList?.price)}
                            </h4>      
                        </CheckOutCardDetails>                        
                    </CheckOutCard>
                )
            })} 
        </BoxCart>
        <CheckOutTotal>
            <div className="total">
                Total
            </div>
            <div>
                {MathNumber(Reduce(CartData))}
            </div>            
        </CheckOutTotal>        
        <CheckOutButton onClick={() => Bye()}>
            <h1>
                Finalizar Compra
            </h1>
        </CheckOutButton>
    </CheckOutBox>
  );
}
