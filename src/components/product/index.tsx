import ProductProps from "./type";
import * as S from "./style";
import ButtonComponent from "../button";
import Image from "next/image";
import Typography from "../typography";

const ProductComponent: React.FC<ProductProps> = (props) => {
  return (
    <S.Container>
      <S.Content>
        <S.ContainerImage>
          <Image
            alt="Apple Watch"
            src={'/images/iphone.png'}
            width={190}
            height={160}
          />
        </S.ContainerImage>
        <S.Informations>
          <S.Header>
            <Typography tag="h2">{props.name}</Typography>
            <S.Price>
              {props.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </S.Price>
          </S.Header>
          <Typography tag="p" fontWeight={100}>
            {props.description}
          </Typography>
        </S.Informations>
      </S.Content>
      <ButtonComponent
        variant="primary"
        icon={true}
      >
        comprar
      </ButtonComponent>
    </S.Container>
  );
};

export default ProductComponent;