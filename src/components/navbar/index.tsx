"use client";

import * as S from "./style";
import Typography from "../typography";
import Cart from "../cart";

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Container>
        <S.ContainerLeft>
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
            fontWeight={100}
            marginBottom={7}
          >
            Sistemas
          </Typography>
        </S.ContainerLeft>

        <Cart />
      </S.Container>
    </S.Navbar>
  );
};

export default Navbar;