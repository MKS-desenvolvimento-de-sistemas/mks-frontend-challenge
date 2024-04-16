import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  color?: string;
  variant: 'primary' | 'secondary';
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: JSX;
};

export default ButtonProps;