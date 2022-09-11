import { ReactNode } from "react";

type Props = {
  condition: boolean;
  children: ReactNode;
}

const If = ({ condition, children }: Props): JSX.Element | null => {
  return condition ? (<>{children}</>) : null
}

export default If
