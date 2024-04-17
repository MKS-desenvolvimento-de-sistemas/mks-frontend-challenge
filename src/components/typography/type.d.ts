import { ReactNode } from "react";

interface TypographyProps {
  tag: 'h1' | 'h2' | 'p' | 'span';
  children: ReactNode;
}

export default TypographyProps;