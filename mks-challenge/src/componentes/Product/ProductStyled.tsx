import styled from "styled-components";


export const ContainerProduct = styled.div`
    min-width: 217.56px;
    max-width: 217.56px;
    height: 285px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    
`;

export const ImgProduct = styled.img`
    width: 111px;
    height: 138px;

`;

export const ContainerNamePrice = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 100%;
    height: 10%;
    padding: .1rem;
    
`;

export const Price = styled.span`
    width: 30%;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #373737;
    border-radius: 5px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    color: #FFF;
    
`;

export const Name = styled.p`
    width: 60%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2C2C2C;
   
`;

export const Description = styled.p`
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    color: #2C2C2C;
    padding: 0 1rem 0 1rem;
`;

export const ButtonBuy = styled.button`
    width: 100%;
    height: 31.91px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background: #0F52BA;
    border: none;
    border-radius: 0px 0px 8px 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #FFF;
    
`;