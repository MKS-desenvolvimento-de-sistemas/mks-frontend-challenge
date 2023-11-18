import styled from 'styled-components';

// General Style

export const Main = styled.div` 
  padding: 116px 0 172.09px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #E5E5E5;
`;

// Navbar styles

export const Box = styled.div`  
  /* width: 100vw; */
  height: 101px;
  background: #0F52BA;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  font-family: 'Montserrat 600',  sans-serif;
  font-style: normal;
  font-size: 40px;
  color: #FFFFFF;
  padding: 28px 0 29px 65px;
`;

export const Text = styled.div`
  font-family: 'Montserrat 300',  sans-serif;
  font-style: normal;
  font-size: 20px;
  color: #FFFFFF;
  margin: 25px 0 12px 5px;
`;

export const CartBox = styled.div`
  width: 90px;
  height: 45px;
  background: #FFFFFF;
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  right: 88px;
  position: absolute;
  cursor:pointer;

  & svg{
    width: 19.01px;
    height: 18px;
  }

  & p{
    font-weight: 700;
    font-size: 18px;
    font-family: 'Montserrat 600',  sans-serif;
  }
`;


// Products styles


export const Card = styled.div`
  width: 217.56px;
  height: 285px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat 400', sans-serif;

  & img{
    padding: 18px 0 14px 0;
  }
  & h1{
    margin: 0;
    font-size: 16px;
    min-width: 110px;
    max-width: 120px;
    height: 38px;
    padding: 0 8px 0 14px;
  }

  & h2{
    margin: 0;
    background: #373737;
    border-radius: 5px;
    /* min-width: 64px;
    max-width: 78px; */
    height: 26px;
    font-family: 'Montserrat 100', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #FFFFFF;
    padding: 0px 6px 0px 7px;
    text-align: center;
    display: flex;
    align-items: center;
  }

  & h3{
    margin: 0;
    font-family: 'Montserrat 300', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    color: #2C2C2C;
    margin: 8px 0 12px 14px;
    height: 25px;
  }
`;

export const Grid = styled.div`  
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 22.44px;
    grid-row-gap: 31px; 
`;

export const TitlePrice = styled.div`  
  display: flex;  
  width: 100%;
  height: 38px;
`;

export const Button = styled.div`  
  display: flex;
  align-items: center;
  background: #0F52BA;
  border-radius: 0px 0px 8px 8px; 
  width: 218px;
  height: 31.91px;
  cursor:pointer;

  & svg{
    margin: 0  14px 0 57px;
  }

  & p{
    font-family: 'Montserrat 300', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;    
  }
`;


// Checkout style

export const CheckOutBox = styled.div`         
  background-color: #0F52BA;
  position: absolute;
  width: 486px;
  height: 1024px;
  background: #0F52BA;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  right: 0;
  z-index: 999;
 
  & svg{
    cursor:pointer;
  }
`;

export const BoxCart = styled.div`         
  padding: 36px 22px 0 47px; 
`;

export const Flex = styled.div`         
 display: flex;
 justify-content: space-between;
`;

export const CheckOutTitle = styled.div`         
  color: #FFFFFF;
  font-size: 27px;
  font-family: 'Montserrat 600', sans-serif;
  font-weight: 700;
  width: 180px;
  line-height: 33px;
  margin-bottom: 70px;
`;

export const CheckOutCard = styled.div`         
  color: #2C2C2C;  
  background: #FFFFFF;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  width: 379px;
  height: 95px;
  margin-bottom: 24px;
`;

export const CheckOutCardClose = styled.div`         
  position: absolute;
  right: 54px;
  margin-top: -15px;
  & svg{
    width: 18px;
  }
`;

export const CheckOutCardDetails = styled.div`         
  display: flex;
  padding: 19px 10px 19px 23px;
  font-family: 'Montserrat 300', sans-serif;
  align-items: center;

  & h1 {
    margin: 0;
    margin-left: 5px;
    font-size: 13px;
    font-family: 'Montserrat 300', sans-serif;
    font-weight: 400;
    width: 113px;
    height: 33px;
  }

  & h4{
    font-family: 'Montserrat 600', sans-serif;
    font-weight: 700;
    font-size: 14px;
  }
`;

export const CheckOutCardAmount = styled.div`         
  display: flex;
  flex-direction: column;
  margin-left: 9px;
  width: 50px;
  margin-right: 40px;
  
  & h2 {
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 5px;
    line-height: 6px;
    color: #000000;
    margin-bottom: 4px;
  } 
`;

export const CounterBox = styled.div`         
  background: #FFFFFF;
  border: 0.3px solid #BFBFBF;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 19px;
  & h3{
    margin: 0;
    font-weight: 400;
    font-size: 8px;
  }
  & svg{
    margin: 0 4px 0 4px;
  }  
`;

export const CounterButton = styled.div`   
  font-family: 'Montserrat 300', sans-serif;
  font-weight: 400;
  & h5{
    font-size: 12px; 
    cursor:pointer;   
  }
  & h6{
    font-size: 8px;
    cursor:pointer;
  }  
`;

export const CheckOutButton = styled.div`     
  background: #000000;
  width: 486px;
  height: 97px;
  position: absolute;
  bottom: 0; 
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  cursor:pointer;

  & h1 {
    margin: 0;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: #FFFFFF;  
    font-family: 'Montserrat 600', sans-serif;
  }
`;

export const CheckOutTotal = styled.div`     
  display: flex;
  font-weight: 700;
  font-size: 28px;
  color: #FFFFFF;
  font-family: 'Montserrat 600', sans-serif;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 139px;
  padding: 0 63px 0 47px; 
  & .total{
    margin-right: 204px;
  }
`;

// Footer Style

export const Footer = styled.div`         
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;   
  background: #EEEEEE;
  
  & p{
    font-family: 'Montserrat 300', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #000000;
  }
`;

