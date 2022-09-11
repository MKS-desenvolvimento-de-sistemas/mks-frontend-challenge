import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #FFFFFF;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  position: relative;

  & > h3 {
    width: 100%;
    max-width: 100px;
    margin-right: 5px;

    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 0.8125rem;
    line-height: 1.0625rem;
    color: #2C2C2C;
  
    @media (max-width: 768px) {
      width: 100%;
      max-width: 100%;
      text-align: center;
    }
  }

  & > div > p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.0625rem;
    color: #000000;

    @media (max-width: 768px) {
      padding: 5px 8px;

      background: #373737;
      border-radius: 5px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 0.9375rem;
      line-height: 0.9375rem;
      color: #FFFFFF;
    }
  }

  & > div.responsive-wrapper {
    width: 100%;
    margin-top: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  
  @media (max-width: 768px) {
    padding: 20px;

    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const DeleteProduct = styled.button`
  width: 18px;
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -6px;
  right: -6px;

  cursor: pointer;
  border-radius: 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 0rem;
  color: #FFFFFF;
  background: #000000;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 768px) {
    top: 9px;
    right: 14px;

    font-size: 2.625rem;
    font-size: 2.7rem;
    color: #000;
    background: #fff;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 60px;
  max-height: 60px;

  display: flex;
  align-items: center;
  margin-right: 20px;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  & > p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 6px;
    color: #000000;
  
    @media (max-width: 768px) {
      display: none;
    }
  }
`

export const Controls = styled.div`
  display: flex;
  align-items: center;

  background: #FFFFFF;
  border: 0.3px solid #BFBFBF;
  border-radius: 4px;
  
  & > button {
    width: 25px;
    height: 30px;

    cursor: pointer;
    border: none;
    background: #FFFFFF;

    &.is-disabled {
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
      line-height: 1.6px;
    }
  }

  & > p {
    width: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: default;
    border-right: 0.2px solid #BFBFBF;
    border-left: 0.2px solid #BFBFBF;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 0.625rem;
    color: #000000;
  
    @media (max-width: 768px) {
      width: 25px;

      font-size: 1.25rem;
      line-height: 1.3px;
    }
  }
`
