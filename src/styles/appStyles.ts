import { styled } from 'styled-components';

export const StyledHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;  
`;

export const StyledCardResponsive = styled.div`
    @media (min-width: 768px) {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: stretch;
      flex-wrap: wrap;     
    }
    @media (min-width: 1440px) {
      width: 70%;
      margin: 50px auto; 
      
}
`;

export const StyledFooter = styled.footer`
  background-color: #EEEEEE;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
