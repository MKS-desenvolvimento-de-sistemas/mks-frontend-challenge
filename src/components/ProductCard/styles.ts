import styled from 'styled-components'

export const Container = styled.div`
  width: 218px;
  height: 285px;

  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > button {
    width: 100%;
    height: 100%;
    max-height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.125rem;
    text-transform: uppercase;
    color: #FFFFFF;
    background: #0F52BA;
    border: none;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
  
  @media (max-width: 768px) {
    width: 250.5px;
    height: 328px;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 135px;

  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

`

export const Info = styled.div`
  padding: 14px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;

  & > p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 0.625rem;
    line-height: 0.75rem;
    color: #2C2C2C;
  }
`

export const Title = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #2C2C2C;
  }
`

export const Price = styled.div`
  padding: 4px 6px;

  background: #373737;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 0.9375rem;
  color: #FFFFFF;
`
