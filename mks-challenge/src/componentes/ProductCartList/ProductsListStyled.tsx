import styled from "styled-components";

export const ContainerCartList = styled.div`
    position: relative;
    position: absolute;
    width: 386px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 1%;
    justify-content: space-between;
    right: 0px;
    top: 0px;
    background: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    
`;

export const ContainerTitleCart = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
`;

export const TitleCart = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
`;

export const ButtonX = styled.button`
    width: 38px;
    aspect-ratio: 1;
    position: absolute;
    right: 1.53%;
    top: 0%;
    background: #000;
    border: none;
    border-radius: 50%;
    color: white;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 15px;
`;

export const ContainerItems = styled.div`
    width: 100%;
    height: 70%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;


export const ContainerItem = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 95px;
    align-items: center;
    justify-content: space-around;
    background: #FFFFFF;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    
`;

export const ContainerQuantity = styled.div`
    width: 50px;
    height: 19px;
    
`;

export const Qtd = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 5px;
    line-height: 10px;
    color: #000;
`;

export const ContainerAmountItem = styled.div`
    width: 100%;
    height: 19px;
    background: #FFFFFF;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #000;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 8px;
    line-height: 10px
`;

export const PraiceItem = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #000;
`;

export const AmountItem = styled.span`
    padding: 2px;
    border-left: solid #BFBFBF 0.2px;
    border-right: solid #BFBFBF 0.2px;
`;

export const ImgItem = styled.img`
    width: 46px;
    height: 57px;
`;

export const ButtonItemX = styled.button`
    width: 18px;
    position: absolute;
    top: 0;
    right: 0;
    aspect-ratio: 1;
    background: #000;
    border: none;
    border-radius: 50%;
    color: white;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
`;

export const NameItemCart = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: #2C2C2C;
`;

export const ContainerTotalPrice = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

export const Total = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px; 

`;

export const TotalPrice = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
`;

export const ButtonBuy = styled.button`
    width: 100%;
    height: 97px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    background: black;
    color: #fff;
    border: none;
    position: absolute;
    bottom: 0;
    left: 0;
`;