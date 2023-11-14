import { styled } from 'styled-components';

export const StyledCart = styled.div`
    text-align: center;
    color: white;
    background-color: #0F52BA;
    height: 100vh;
    width: 70vw;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    transition: 0.5s;
    border-left: 1px solid black;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    
    @media (min-width: 768px) {
        width: 40%;
    }

    @media (min-width: 1024px) {
        width: 30%;
    }

    @media (min-width: 1440px) {
        width: 20%;
    }
`;

export const StyledHeaderCart = styled.div`
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  `;
export const StyledProductCard = styled.div`
    background-color: white;
    color: black;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    width: 80%;
    margin: 1rem auto;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-top: 0.5rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    @media (min-width: 1024px) {
        width: 30%;
    }

    @media (min-width: 1440px) {
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;

    }
`;
export const StyledCloseCart = styled.button`
  background-color: black;
  border: none;
  border-radius: 100%;
  color: #0F52BA;
  width: 2.5rem;
  font-size: 2rem;
  padding: 0.1rem;
`;

export const StyledDelete = styled.button`
  border: none;
  font-size: 1.5rem;
  transform: translateX(7rem);
  right: 4rem;
  z-index: 1;
  @media (min-width: 1440px) {
    width: 2rem;
    background-color: black;
    color: white;
    border-radius: 100%;
    font-size: 1rem;
    transform: translateX(20rem) translateY(-3rem);
    
}
  `;

export const StyledImg = styled.img`
    width: 80%;
    height: 80%;
    @media (min-width: 1440px) {
        width: 20%;
        display: flex;
        flex-direction: row;
    }
    `;

export const StyledAddProduct = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 1rem;
  @media (min-width: 1440px) {
    justify-content: center;
    gap: 1rem;
}
`;

export const StyledAddRemove = styled.div`
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 5px 5px 2rem 1px rgba(0, 0, 0, 0.3);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 0.5rem;
`;

export const StyledButtonAddRemove = styled.button`
  border: none;
  background-color: transparent;
`;

export const StyledTotalPrice = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 5rem;
    margin-top: 4rem;
    font-size: 1.5rem;
    font-weight: bold;
    
  `;

export const StyledPrice = styled.div`
  background-color: black;
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const StyledButtonFinalizar = styled.button`
    background-color: black;
    color: white;
    border: none;
    position: absolute;
    bottom: 4%;
    left: 0px;
    right: -10px;
    padding: 1.5rem;
    font-size: 1rem;

`;
