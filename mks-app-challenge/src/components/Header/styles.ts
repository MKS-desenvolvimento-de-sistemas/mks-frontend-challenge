import styled from "styled-components";


export const HeaderApp = styled.header`
display: flex;
width: 100%;
height: 101px;
background-color: ${({ theme }) => theme.colors.background.header};
font-size: 30px;
justify-content: space-between;

`

export const Logo = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin: 29px 28px 29px;

`
export const LogoTextPrimary = styled.span`
color: ${({ theme }) => theme.colors.text.primary};

font-family: ${({ theme }) => theme.colors.fonts.primary};
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: 19px;


`
export const LogoTextSecondary = styled.span`
color: ${({ theme }) => theme.colors.text.primary};

font-family: ${({ theme }) => theme.colors.fonts.primary};
font-size: 20px;
font-style: normal;
font-weight: 300;
line-height: 19px;

`

export const BoxCart = styled.div`

display: flex;
align-items: center;
justify-content: center;
gap: 10px;

background-color: ${({ theme }) => theme.colors.background.cartHeader};

width: 90px;
height: 45px;

border-radius: 8px;

margin: 29px 88px 27px;


`

export const CartNumber = styled.span`
color: #000;

font-family: ${({ theme }) => theme.colors.fonts.primary};
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;

 `





