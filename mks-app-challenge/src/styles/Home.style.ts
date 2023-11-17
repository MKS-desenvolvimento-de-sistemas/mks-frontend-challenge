import styled from "styled-components";

const headerHeight = 101;
const footerHeight = 34;

export const BoxMain = styled.main`
display: flex;
flex-direction: column;
min-height: calc(100vh - ${headerHeight}px - ${footerHeight}px);

background: #F9F9F9;
font-family: "Montserrat";
font-size: 30px;
`

export const BoxCards = styled.main`

display: flex;
justify-content: center;
flex-wrap: wrap;
max-width: 1115px;


gap: 10px;

margin: 40px auto;

@media (max-width: 600px) {
 max-width: 50%;
 gap: 10px;

margin: 20px auto;
}

`

export const CardsProducts = styled.main`
display: flex;
flex-direction: column;

width: 218px;
height: 285px;
justify-content: center;
align-items: center;
gap: 10px;

border-radius: 8px;
background: #FFF;
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

white-space: pre-line;



`

export const ImageCard = styled.div`
position: absolute;
margin: 18px 54px 129px 53px;
`

export const ProductBox = styled.div`
display: flex;

flex-direction: column;
margin-top: 120px;
margin-left: 10px;
margin-right: 10px;
gap: 4px;


`

export const ProductInfo = styled.span`
width: 124px;
height: 38px;

color: #2C2C2C;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 19px;

overflow: hidden;
white-space: wrap;
text-overflow: ellipsis;
padding: 0px 0px 0px 10px ;


  

`

export const ProductPrice = styled.div`
text-align: center;
padding: 4px 7px;
width: 41%;
height: 20px;
color: #FFF;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: 15px;

border-radius: 5px;
background: #373737;
padding: 3px 3px 3px 3px;
margin-right: 10px;





`

export const BoxNamePrice = styled.div`
display: flex;



`

export const ProductDescription = styled.div`

width: 192px;
height: 25px;
overflow: hidden;
white-space: wrap;
text-overflow: ellipsis;

color: #2C2C2C;
font-size: 10px;
font-style: normal;
font-weight: 300;
line-height: 12px;

margin-left: 14px;
margin-right: 11.56px;

 
  

`
export const BuyButton = styled.button`
position: absolute;
display: flex;
justify-content: center;
gap: 14px;
align-items: center;
width: 218px;
height: 31.907px;

border-radius: 0px 0px 8px 8px;
background: #0F52BA;
border: none;
margin-top: 253px;

font-family: "Montserrat";
color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px; 
cursor: pointer;

transition: background-color 0.3s ease;

&:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    
}

`

export const SkeletonBox = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
max-width: 1115px;


gap: 10px;

margin: 40px auto;

`



