import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: var(--footer-height);

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--primary-color-200);

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);

  h5 {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: var(--secondary-color-300);
  }
`;
