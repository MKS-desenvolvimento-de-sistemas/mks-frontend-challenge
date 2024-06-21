import BuyIcon from "../../../public/icons/comprar";
import * as S from "./style";
import ButtonProps from "./type";

const ButtonComponent: React.FC<ButtonProps> = ({ children, variant, icon, onClick }) => {
  return (
    <S.Button
      variant={variant}
      onClick={onClick}
    >
      {icon && <BuyIcon />}
      { children }
    </S.Button>
  )
};

export default ButtonComponent;