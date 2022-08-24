import React from 'react';
import * as C from './styles';

import cart from '../../assets/images/cart.png';

const Header = () => {
  return (
    <C.HeaderWrapper>
      <C.Logo>
        <C.LogoBig>MKS</C.LogoBig>
        <C.LogoSmall>Sistemas</C.LogoSmall>
      </C.Logo>
      <C.CartWrapper>
        <img src={cart.src} />
        <C.CartNumber>0</C.CartNumber>
      </C.CartWrapper>
    </C.HeaderWrapper>
  )
};

export default Header;
