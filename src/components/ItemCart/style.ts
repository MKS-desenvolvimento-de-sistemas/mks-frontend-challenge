/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const ItemCartStyle = styled.div`
    background: white;
    display: flex;
    align-items: center;
    position: relative;
    max-width: 379px;
    justify-content: space-between;
    border-radius:8px;
    padding: 20px;
    margin-bottom: 22px;

    img {
        height: 57px;
    }

    h1 {
        line-height: 17px;
        font-size: 13px;
        color: #2C2C2C;
        max-width: 85px;
        max-height: 33px;
        overflow: hidden;
        display: block; 
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-weight: 400;
    }

    div {
        display: flex;
        flex-direction: column;
        span {
            margin-bottom: 4px;
            font-size: 8px;
        }

        div {
            width: 70px;
            height: 30px;
            border: 0.3px solid #BFBFBF;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            
            span {
                font-size: 12px;
                display: flex;
                margin-bottom: 0; 
                align-items: center;
                justify-content:center;
                width: 33%;
            }

            button {
                font-size: 12px;
                width: 33%;
                display: flex;
                cursor: pointer;
                outline: none;
                border: none;
                background: transparent;
                justify-content: center;
                align-items: center;
                border-right: 0.2px solid #BFBFBF;
            }

            
        }

        button:last-child {
            border-right: none;
            border-left: 0.2px solid #BFBFBF;
        }
    }
`;

export const ItemCartButton = styled.button`
        border: none;
        outline: none;
        background: black;
        color: white;
        width: 18px;
        cursor: pointer;
        height: 18px;
        font-size: 16px;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(8px, -8px);
        border-radius: 50%;
`;

export const ItemCartPrice = styled.span`
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
`;
