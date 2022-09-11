import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 34px;

  position: relative;
  right: 0px;
  left: 0px;
  bottom: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #eee;

  & > p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0.9375rem;
    color: #000000;
  }
`
