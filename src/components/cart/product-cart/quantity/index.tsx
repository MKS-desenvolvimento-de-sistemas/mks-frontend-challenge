import Typography from "@/components/typography";
import * as S from "./style";
import theme from "@/styles/theme";

type QuantityComponentProps = {
  quantity: number,
  onIncrement: () => void;
  onDecrement: () => void;
};

const QuantityComponent: React.FC<QuantityComponentProps> = ({quantity, onDecrement, onIncrement}) => {
  return (
    <S.Container>
      <Typography tag="p" fontSize={8}>Qntd.</Typography>
      <S.Content>
        <S.Button onClick={onDecrement}>-</S.Button>
        <Typography 
          tag="p" 
          color={theme.colors.text.black}
          fontSize={10}
          padding='5px'
        >
          {quantity}
        </Typography>
        <S.Button onClick={onIncrement}>-</S.Button>
      </S.Content>
    </S.Container>
  );
};

export default QuantityComponent;