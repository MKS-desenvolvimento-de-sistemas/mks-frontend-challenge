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
import { useSelector, useDispatch } from "react-redux";
import { CloseIcon } from './CloseIcon';
import { MathNumber} from '../tools/math/MathNumber';
import Img from '../image/Image';
import { SpacingIcon } from './SpacingIcon';
import { Bye, Delete, Reduce } from '../tools/reduce/Reduce';
import { updateQuantity } from '../state/actions/products';
import { lessProductCart, moreProductCart } from '../state/actions/productsReducers';
// import { ShowHide } from '../tools/math/ShowHide';

export function Cart(props: { isOpen: any; toggleMenu: React.MouseEventHandler<HTMLDivElement> | undefined; }) {
  const CartData = useSelector((state: any) => state?.products?.cart);
  const dispatch = useDispatch();
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
            {CartData?.map((CartDataList: any, index: number) => {  
                return (
                    <CheckOutCard key={index}>
                        <CheckOutCardClose onClick={() => Delete(CartData)}>
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
                                    <CounterButton onClick={() =>                                     
                                        dispatch(
                                            lessProductCart({                                          
                                            quantity: CartDataList?.quantity,
                                            id: CartDataList?.id
                                            })                                     
                                        )
                                    }>
                                        <h5>
                                            -
                                        </h5>
                                    </CounterButton>
                                    <SpacingIcon />
                                    <h3>
                                        {CartDataList?.quantity}                                    
                                    </h3>
                                    <SpacingIcon />
                                    <CounterButton onClick={() =>                                     
                                        dispatch(
                                            moreProductCart({                                          
                                            quantity: CartDataList?.quantity,
                                            id: CartDataList?.id
                                            })                                     
                                        )
                                    }>
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
