import styled from "styled-components";




export const FooterApp = styled.footer`
display: flex;
width: 100%;
height: 34px;
background-color: ${({ theme }) => theme.colors.background.footer};
justify-content: center;
align-items: center;

color: ${({ theme }) => theme.colors.text.tertiary};
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;

`