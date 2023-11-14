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



const Header = () => {
    return (
        <HeaderApp>
            <Logo>
                <LogoTextPrimary>MKS</LogoTextPrimary>
                <LogoTextSecondary>Sistemas</LogoTextSecondary>
            </Logo>

            <BoxCart>

                <Image src={ImgCart} width='19.008' height='18' alt='CartImage' />
                <CartNumber>0</CartNumber>

            </BoxCart>
        </HeaderApp>
    )
}

export default Header;