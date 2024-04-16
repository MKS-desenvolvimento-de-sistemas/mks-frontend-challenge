import BuyIcon from "../../../public/icons/comprar";
import StyledButton from "./style";
import ButtonProps from "./type";

const ButtonComponent: React.FC<ButtonProps> = ({ children, variant, icon }) => {
  return (
    <StyledButton
      variant={variant}
    >
      {icon && <BuyIcon />}
      { children }
    </StyledButton>
  )
};

export default ButtonComponent;