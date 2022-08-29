import NextLink from "next/link";
import { ReactNode } from "react";

interface ILinkProps {
  href: string;
  title: string;
  target?: "blank" | "self" | "parent" | "top";
  children?: ReactNode | ReactNode[];
}

const Link = ({ href, title, target = "self", children }: ILinkProps) => {
  return (
    <NextLink href={href}>
      <a title={title} target={`_${target}`}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
