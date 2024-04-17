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
            alt="Product Image"
            src={props.photo}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </S.ContainerImage>
        <S.Informations>
          <S.Header>
            <Typography tag="h2" fontWeight={300}>{props.brand} {props.name}</Typography>
            <S.Price>
              {parseFloat(props.price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
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