import styled from 'styled-components'

interface IContainer {
  isOpen: boolean;
}

export const Container = styled.div<IContainer>`
  height: 100vh;
  width: 100%;
  max-width: ${({ isOpen }) => isOpen ? '486' : '0'}px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  
  overflow: hidden;
  
  background: #0F52BA;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  
  transition: max-width 0.2s;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  & > h2 {
    max-width: 180px;
    margin-top: 36px;
    margin-left: 47px;

    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.6875rem;
    line-height: 2.0625rem;
    color: #FFFFFF;
  }

  @media (max-width: 768px) {
    max-width: ${({ isOpen }) => isOpen ? '330' : '0'}px;
  }
`

export const Cards = styled.div`
  width: 100%;
  height: 50%;
  padding: 47px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  overflow-x: hidden;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.3); 
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #013687; 
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #013687; 
  }

  & > span {
    color: #FFF;
  }

  @media (max-width: 768px) {
    padding: 10px 47px;
  }
`

export const Total = styled.div`
  width: 100%;
  padding: 42px 47px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  & > p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 0.9375rem;
    color: #FFFFFF;
  }
`

export const CloseButton = styled.button`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 39px;
  right: 22px;

  cursor: pointer;
  border-radius: 38px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 0.9375rem;
  color: #FFFFFF;
  background: #000000;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  height: 97px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #000000;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 0.9375rem;
  color: #FFFFFF;
  cursor: pointer;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.3);
  }

  @media (max-width: 768px) {
    height: 70px;

    font-size: 1.25rem;
    line-height: 1.3rem;
  }
`

export const Footer = styled.footer`
  width: 100%;
`
