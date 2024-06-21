import { createElement } from "react";
import styled from "styled-components";

export const DynamicTypography = styled(({ tag, children, ...props }: any) =>
  createElement(tag, props, children),
)`
    /* your default css */
`