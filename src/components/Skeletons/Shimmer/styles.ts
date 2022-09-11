import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  0% { transform: translateX(-150%) }
  50% { transform: translateX(-60%) }
  100% { transform: translateX(150%) }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  animation: ${loading} 1.5s infinite;

  & > div.shimmer {
    width: 50%;
    height: 100%;

    background: rgba(255,255,255,0.2);
    transform: skewX(-20deg);
  }
`
