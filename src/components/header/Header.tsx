import IconCart from "../../../assets/shopping-cart.png";

import Image from "next/image";

import * as S from "./styles";

const Header = () => {
  return (
    <S.Container>
      <S.Logo>
        <S.Title>MKS</S.Title>
        <S.SubTitle>Sistemas</S.SubTitle>
      </S.Logo>

      <S.Shopping>
        <Image src={IconCart} alt="shopping cart" width={19} height={18} />

        <S.QuantityOfProducts>0</S.QuantityOfProducts>
      </S.Shopping>
    </S.Container>
  );
};

export default Header;
