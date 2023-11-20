import IconCart from "../../../assets/shopping-cart.png";

import Image from "next/image";

import * as S from "./styles";

import { useState } from "react";

import FinishShopping from "../finishShopping/FinishShopping";
import { useShopping } from "@/context/shopping/useShopping";

const Header = () => {
  const [open, setOpen] = useState(false); // Controla a abertura e o fechamento da aba de compras

  const openShopping = () => setOpen(true);
  const closeShopping = () => setOpen(false);

  const { shopping } = useShopping();

  return (
    <S.Container>
      <S.Logo>
        <S.Title>MKS</S.Title>
        <S.SubTitle>Sistemas</S.SubTitle>
      </S.Logo>

      <S.Shopping onClick={openShopping}>
        <Image src={IconCart} alt="shopping cart" width={19} height={18} />

        <S.QuantityOfProducts>{shopping.length}</S.QuantityOfProducts>
      </S.Shopping>
      {open && <FinishShopping closeShopping={closeShopping} />}
    </S.Container>
  );
};

export default Header;
