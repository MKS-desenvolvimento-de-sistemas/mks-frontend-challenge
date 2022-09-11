import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  height: 100px;

  top: 0px;
  position: sticky;
  z-index: 9;

  background: #0F52BA;

  @media (max-width: 768px) {
    height: 50px;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1420px;
  height: 100%;
  margin: 0 auto;
  padding: 0px 65px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;

  cursor: default;

  & > h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 2.52rem;
    color: #FFFFFF;
    
    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 1.6rem;
    }
  }

  & > p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.8rem;
    color: #FFFFFF;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.25rem;
    }
  }
`

export const CartWrapper = styled.div`
  width: 90px;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  border-radius: 8px;
  background: #fff;

  cursor: pointer;
  
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }

  & > svg {
    @media (max-width: 768px) {
      width: 15px;
      height: 15px;
    }
  }

  & > span {
    width: 15px;

    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: #000000;

    @media (max-width: 768px) {
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 52px;
    height: 26px;
    
    gap: 8px;
  }
`
