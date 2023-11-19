import styled from "styled-components";
import Image from "next/image";

interface ContainerCartProps {
    isOpen: boolean;
}

export const ContainerCart = styled.div<ContainerCartProps>`
display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
position: fixed;
flex-direction: column;
width: 486px;
height: 100%;
background-color: #0F52BA;
box-shadow: rgba(0, 0, 0, 0.13) -5px 0px 6px;
top: 0px;
right: 0px;
z-index: 1;

@media (max-width: 600px) {
    width: 330px;
}

`

export const TopCart = styled.div`
display: flex;
align-items: center;
width: 100%;
max-height: 56px;

margin-left: 47px;
margin-right: 22px;

gap: 200px;

margin-top: 36px;

@media (max-width: 600px) {
    gap: 45px;
}


`

export const TextCart = styled.h1`

width: 180px;
height: 56px;
flex-shrink: 0;

color: #FFF;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;


`

export const CloseCart = styled.button`
width: 38px;
height: 38px;
color: #FFF;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 15px;
background-color: #000;
border-radius: 50%;
border: none;
cursor: pointer;

@media (max-width: 600px) {
    color: #0F52BA;
    
}

`

export const CartBox = styled.ul`

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 21px;

margin-top: 61px;
width: 100%;
padding: 10px 46px 10px 34px;
flex: 2 1 0%;
overflow-y: scroll;

&::-webkit-scrollbar {
    width: 6px;
}

&::-webkit-scrollbar-thumb {
    background-color: #FFF;
    border-radius: 10px;

}

@media(max-width: 600px) {
    padding: 0;
}

`

export const CartItems = styled.li`
display: flex;
width: 379px;
height: 95px;

padding: 22.38px 23px 21.45px 16px;

align-items: center;
position: relative;
background-color: #FFF;
box-shadow: 0px 2px 8px ;
border-radius: 8px;
gap: 21px;

@media (max-width: 600px) {
    width: 250px;
    height: 220px;
    flex-direction: column;
}

`

export const ImageItem = styled(Image)`

@media(max-width: 600px) {
    width: 80px;
height: 95.105px;
}



`

export const CartProductName = styled.span`
width: 113px;
height: 33px;
color: #2C2C2C;

font-family: "Montserrat";
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 17px;

@media(max-width: 600px) {
display: flex;
justify-content: center;
align-items: center;
width: 211px;
height: 21.445px;
flex-shrink: 0;
color: #2C2C2C;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 19px;
}

`
export const CartQty = styled.div`
display: flex;
justify-content: center;
align-content: center;
align-items: center;
width: 50px;
height: 19px;
flex-wrap: wrap;
flex: 2 1 0%;
position: relative;
background:  #FFF;


border-radius: 4px;
border: 0.3px solid #BFBFBF;

@media(max-width: 600px ) {
    display: none;
}

`
export const CartQtyMobile = styled.div`
display: none;
align-content: center;
align-items: center;
width: 100%;
height: 19px;
flex: 2 1 0%;
position: relative;
background:  #FFF;
gap: 20px;


@media(max-width: 600px) {
display: flex;
}

`
export const BoxMobile = styled.div`
display: none;
width: 50%;
height: 34.50px;
justify-content: center;
align-items: center;

border-radius: 4px;
border: 0.3px solid #BFBFBF;

@media(max-width: 600px) {
display: flex;
}


`
export const TextQty = styled.small`
display: block;
position: absolute;
top: -11px;
left: 0px;
width: 100%;
font-size: 6px;
color: #000;
`
export const ButtonDecrease = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 33%;
height: 100%;

border: none;
border-right: 0.3px solid #BFBFBF;


background: #FFF;

color: #000;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer;

@media(max-width: 600px) {
    height: 90%;
    font-size: 24px;
}

`
export const InputQty = styled.span`
display: flex;
justify-content: center;
align-items: center;
width:33% ;
font-size: 10px;

@media(max-width: 600px) {
    
    font-size: 20px;
}



`
export const ButtonIncrease = styled.button`
display: flex;
justify-content: center;
align-items: center;

width:33% ;
height: 100%;

border: none;
border-left: 0.3px solid #BFBFBF;

background: #FFF;

color: #000;

font-family: "Montserrat";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer;

@media(max-width: 600px) {
    height: 90%;
    font-size: 24px;
}



`


export const CartAmount = styled.h4`
display: flex;
color: #000;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 17px;

@media(max-width: 600px) {
    display: none;
}

`

export const CartAmountMobile = styled.h4`
display: none;
justify-content: center;
align-items: center;
color: #000;
width: 50%;
height: 23.265px;

color: #FFF;

font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: 15px;

border-radius: 5px;
background: #373737;

padding: 8px 17px;

@media(max-width: 600px) {
    display: flex;
}

`

export const CloseCartItem = styled.button`
position: absolute;
width: 18px;
height: 18px;
color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 15px;
background-color: #000;
border-radius: 50%;
border: none;
top: -8px;
right: -8px;
cursor: pointer;

@media(max-width: 600px)  {
    color: #000;
    font-size: 42px;
    background-color: transparent;
    top: 24px;
    right: 28px;
}

`

export const CartAmountOrder = styled.div`

display: flex;
align-items: center;
width: 100%;
max-height: 56px;

margin-left: 47px;
margin-right: 22px;

gap: 90px;

margin-top: 36px;

@media(max-width: 600px) {
    gap: 1px;
    margin-left: 10px;
}


`

export const TextAmount = styled.h1`

width: 180px;
height: 56px;
flex-shrink: 0;

color: #FFF;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;

`

export const TextSum = styled.h1`

width: 180px;
height: 56px;
flex-shrink: 0;

color: #FFF;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;

`

export const OrderFinal = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 486px;
height: 97px;
flex-shrink: 0;

background: #000;

cursor: pointer;

transition: background-color 0.3s ease;

&:hover {
    background-color: rgba(128, 128, 128, 0.7);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    
}

@media(max-width: 600px) {
width: 330px;
height: 65.864px;
flex-shrink: 0;



}

`

export const TextOrderFinal = styled.h1`
color: #FFF;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 15px;



@media(max-width: 600px) {
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 15px;
}

`

