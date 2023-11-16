import styled from "styled-components"


export const ContainerHeader = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 15vh;
    padding: 0 10% 0 10%;
    color: #FFF;
    align-items: center;
    font-family: 'Montserrat';
    background:#0F52BA;
`;

export const ContainerLogoPah = styled.div`
    display: flex;
    gap: .5rem;
`;

export const Logo = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 19px;
`;

export const P = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
`;


export const ButtonCartHeader = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 90px;
    height: 45px;
    left: 1262px;
    top: 29px;
    background: #FFFFFF;
    border-radius: 8px;
    border: none;

`;

export const AmountItems = styled.span`
    Width: 13px;
    Height: 22px;
    font-weight: 700;
    font-size: 18px;
    line-height: 21.94px;
`;