import React from 'react';
import { Box, Logo, Text, CartBox} from '../../../styles';
import { useSelector } from "react-redux";
import { CartIcon } from './CartIcon';


export function Navbar(props) {
  const CartData = useSelector((state: any) => state?.products?.cart);
  
  return (
    <Box>           
      <Logo>
        MKS
      </Logo>
      <Text>
        Sistemas
      </Text>
      <CartBox onClick={props?.toggleMenu}>
        <CartIcon /> 
        <p>{CartData.length}</p>
      </CartBox>
    </Box>
  );
}
