import {
    BoxCart,
    CartNumber,
    HeaderApp,
    Logo,
    LogoTextPrimary,
    LogoTextSecondary,

} from '@/components/Header/styles'

import ImgCart from '@/assets/Vector.png'
import Image from 'next/image'
import React from 'react'

import useCombinedCart from '@/Hooks/useCombinedCart'
import { useCart } from '@/Context/CartContext'



const Header: React.FC = () => {
    const { contextState } = useCombinedCart();

    const totalProductCart = contextState.items.reduce((total, product) => total + product.quantity, 0);




    const { dispatch } = useCart();

    const handleCartVisibility = () => {
        dispatch({ type: 'TOGGLE_CART' });

    }
    return (
        <HeaderApp>
            <Logo>

                <LogoTextPrimary>MKS</LogoTextPrimary>
                <LogoTextSecondary>Sistemas</LogoTextSecondary>
            </Logo>

            <BoxCart onClick={handleCartVisibility}>

                <Image src={ImgCart} width='19.008' height='18' alt='CartImage' />
                <CartNumber>{totalProductCart}</CartNumber>

            </BoxCart>
        </HeaderApp>
    )
}

export default Header;