import { ReactNode } from "react";

interface TypographyProps {
  tag: 'h1' | 'h2' | 'body' | 'default';
  children: ReactNode;
}

export default TypographyProps;