/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const CartStyleContainer = styled.div`
    width: 485px;
    height: 100vh;
    background: #0F52BA;
    position: absolute;
    overflow: auto;
    top: 0;
    right: 0;

    @media screen and (max-width: 500px) {
        width: 330px;
        
    }
`;

export const Container = styled.div`
    padding: 42px;
    background: #0F52BA;

    .paddingLast:last-child {
        padding-bottom: 97px;
    }
`;

export const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;

    h1 {
        max-width: 166px;
        font-size: 28px;
        font-weight: 700;
        color: white;
    }

    button {
        width: 38px;
        height: 38px;
        background-color: black;
        color: white;
        outline: none;
        border: 0;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
    }
`;

export const CartList = styled.div`
    margin-bottom: 64px;
`;

export const CartTotalPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    padding-left: 42px;
    padding-right: 42px;
    bottom: 97px;
    height: 97px;
    right: 0;
    width: 485px;
    background: #0F52BA;
    
    h1 {
        font-size: 28px;
        font-weight: 700;
        color: white;
        line-height: 15px;
    }

    @media screen and (max-width: 500px) {
        width: 330px;
        
    }
`;

export const CartFinality = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 97px;
    position: absolute;
    bottom: 0;
    cursor: pointer;
    right: 0;
    width: 485px;
    background: black;
    
    h1 {
        font-size: 28px;
        font-weight: 700;
        color: white;
        line-height: 15px;
    }
    @media screen and (max-width: 500px) {
        width: 330px;
        
    }
`;

