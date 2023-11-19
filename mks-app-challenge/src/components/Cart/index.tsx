import React from 'react'
import {
    CartAmountOrder,
    CartAmount,
    CartBox,
    CartItems,
    CartProductName,
    CartQty,
    CloseCart,
    ContainerCart,
    ImageItem,
    TextCart,
    TopCart,
    ButtonDecrease,
    InputQty,
    ButtonIncrease,
    TextQty,
    CloseCartItem,
    TextAmount,
    TextSum,
    OrderFinal,
    TextOrderFinal,
    CartQtyMobile,
    CartAmountMobile,
    BoxMobile
} from './styles'


import { useCart } from '@/Context/CartContext';
import useCombinedCart from '@/Hooks/useCombinedCart';
import { CartItem } from '@/@types/CartItem';


const CartProducts = () => {
    const { contextState, addToCartCombined } = useCombinedCart()

    const totalAmount = contextState.items.reduce((total, product) => {
        return total + parseFloat(product.price) * product.quantity;
    }, 0);

    const { state, dispatch } = useCart();

    const handleIncrease = (product: CartItem) => {



        addToCartCombined(product)

    }

    const handleDecrease = (productId: number) => {

        const existingProduct = contextState.items.find(item => item.id === productId);

        if (existingProduct) {

            if (existingProduct.quantity > 1) {

                dispatch({ type: 'DECREASE_QUANTITY', payload: productId })
            } else {
                dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
            }

        }


    }

    const handleCloseCartItem = (productId: number) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    }

    const handleCartVisibility = () => {
        dispatch({ type: 'TOGGLE_CART' });
    }
    return (
        <ContainerCart isOpen={state.isOpen}>
            <TopCart>
                <TextCart>
                    Carinnho de Compras
                </TextCart>

                <CloseCart onClick={handleCartVisibility}>
                    X
                </CloseCart>
            </TopCart>

            <CartBox>
                {Array.isArray(contextState.items) && contextState.items.length > 0
                    && contextState.items.map((product: CartItem) => (


                        <CartItems key={product.id}>
                            <ImageItem src={product.photo} alt={product.name} width={46} height={57} />


                            <CartProductName>
                                {product.name}
                            </CartProductName>

                            <CartQty>
                                <TextQty>Qntd:</TextQty>
                                <ButtonDecrease onClick={() => handleDecrease(product.id)}>-</ButtonDecrease>
                                <InputQty>{product.quantity}</InputQty>
                                <ButtonIncrease onClick={() => handleIncrease(product)}>+</ButtonIncrease>
                            </CartQty>

                            <CartQtyMobile>
                                <BoxMobile>
                                    <ButtonDecrease onClick={() => handleDecrease(product.id)}>-</ButtonDecrease>
                                    <InputQty>{product.quantity}</InputQty>
                                    <ButtonIncrease onClick={() => handleIncrease(product)}>+</ButtonIncrease>
                                </BoxMobile>

                                <CartAmountMobile>
                                    R${product.quantity * parseInt(product.price, 10)}
                                </CartAmountMobile>


                            </CartQtyMobile>

                            <CartAmount>
                                R${product.quantity * parseInt(product.price, 10)}
                            </CartAmount>

                            <CloseCartItem onClick={() => handleCloseCartItem(product.id)}>X</CloseCartItem>


                        </CartItems>

                    ))}




            </CartBox>

            <CartAmountOrder>
                <TextAmount>
                    Total:
                </TextAmount>

                <TextSum>
                    {`R$ ${totalAmount}`}
                </TextSum>
            </CartAmountOrder>

            <OrderFinal>
                <TextOrderFinal>Finalizar Compra</TextOrderFinal>
            </OrderFinal>




        </ContainerCart>
    )
}

export default CartProducts;