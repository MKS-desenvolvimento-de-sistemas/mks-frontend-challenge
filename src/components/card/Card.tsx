import * as S from "./styles";

import Icon from "../../../assets/shopping-bag.png";

import Image from "next/image";

import { CardProps } from "@/interface/interface";
import { useShopping } from "@/context/shopping/useShopping";
import { useAnimation, motion } from "framer-motion";

const Card = ({ image, name, price, description, id }: CardProps) => {
  const { buyProduct } = useShopping();

  // Cria uma instância de controle de animação
  const animeScale = useAnimation();
  return (
    <S.Container>
      <S.ProductImg whileHover={{ scale: 1.1 }} src={image} alt={`Image of product: ${name}`} />
      <S.TitleAndPrice>
        <S.Title>{name}</S.Title>

        <S.BgPrice>
          <S.Price>R${price.split(".")[0]}</S.Price>
        </S.BgPrice>
      </S.TitleAndPrice>

      <S.Description>{description}</S.Description>

      <S.Buy
        onHoverStart={() => animeScale.start({ scale: 0.9, color: "#eee" })}
        onHoverEnd={() => animeScale.start({ scale: 1.0, color: "#fff" })}
        onClick={() => buyProduct(id)}
      >
        <motion.div animate={animeScale}>
          <Image src={Icon} alt="Icon of a bag" width={12} height={13} />
        </motion.div>

        <S.Purchase animate={animeScale}>COMPRAR</S.Purchase>
      </S.Buy>
    </S.Container>
  );
};

export default Card;
