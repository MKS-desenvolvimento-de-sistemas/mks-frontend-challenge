import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
`;

export const ProductSkeleton = styled.div`
  width: 300px;
  height: 318px;
  border-radius: 10px;
  box-shadow: 0px 2px 8px 0px #00000022;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;