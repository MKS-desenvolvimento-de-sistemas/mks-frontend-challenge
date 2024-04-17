"use client";

import * as S from "./style";
import Typography from "../typography";
import Cart from "../cart";

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Container>
        <Typography
          tag="h1"
          fontSize='40px'
          fontWeight={600}
        >
          MKS
        </Typography>
        <Typography 
          tag="h2" 
          fontSize='20px'
          fontWeight={300}
        >
          Sistemas
        </Typography>
      </S.Container>
      
      <Cart />
    </S.Navbar>
  );
};

export default Navbar;