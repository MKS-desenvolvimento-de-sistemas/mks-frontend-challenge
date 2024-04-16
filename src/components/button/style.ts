import styled from "styled-components";
import ButtonProps from "./type";
import theme from "@/styles/theme";

const helper = (variant: 'primary' | 'secondary') => {
  const variants = {
    primary: {
      color: '#FFF',
      backgroundColor: theme.colors.primary,
    },
    secondary: {
      color: '#000',
      backgroundColor: theme.colors.secondary
    }
  };

  // fallback para 'primary' se variant for um valor não encontrado.
  return variants[variant] || variants['primary'];
};

const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;

  &:hover {
    filter: contrast(150%);
  }

  ${({ variant }) => helper(variant)}
`;

export default StyledButton;