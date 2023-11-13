import { styled } from 'styled-components';

export const StyledCard = styled.div`
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    width: 60%;
    margin: 1rem auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-top: 0.5rem;
    justify-content: space-between;

    @media (min-width: 768px) {
        width: 40%;
    }

    @media (min-width: 1024px) {
        width: 30%;
    }

    @media (min-width: 1440px) {
        width: 20%;
        margin: 1rem;s

    }
`;

export const StyledNamePrice = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0.5rem 0;
    align-items: center;
    width: 100%;
`;

export const StyledName = styled.div`
    font-size: 1.3rem;
    width: 50%;
`;

export const StyledPrice = styled.div`
    font-size: 1.2rem;
    background-color: #000;
    color: #fff;
    padding: 0.5rem;
    border-radius: 0.5rem;

`;

export const StyledDescription = styled.div`
    font-size: 0.9rem;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 1rem;
`;

export const StyledImg = styled.img`
    min-width: 100px;
    margin: auto;
    
`;

export const StyledButton = styled.button`
    color: #fff;
    padding: 0.7rem;
    background-color: #0F52BA;
    border: none;
    border-radius: 0 0 0.9rem 0.9rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    
`;
