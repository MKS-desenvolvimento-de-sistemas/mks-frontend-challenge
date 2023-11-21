import * as S from "./styles";

import Icon from "../../../assets/shopping-bag.png";

import Image from "next/image";

import { CardProps } from "@/interface/interface";
import { useShopping } from "@/context/shopping/useShopping";

const Card = ({ image, name, price, description, id }: CardProps) => {
  const { buyProduct } = useShopping();
  return (
    <S.Container>
      <S.ProductImg src={image} />
      <S.TitleAndPrice>
        <S.Title>{name}</S.Title>

        <S.BgPrice>
          <S.Price>R${price.split(".")[0]}</S.Price>
        </S.BgPrice>
      </S.TitleAndPrice>

      <S.Description>{description}</S.Description>

      <S.Buy onClick={() => buyProduct(id)}>
        <Image src={Icon} alt="Icon of a bag" width={12} height={13} />

        <S.Purchase>COMPRAR</S.Purchase>
      </S.Buy>
    </S.Container>
  );
};

export default Card;
