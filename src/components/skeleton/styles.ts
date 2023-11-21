import styled, { keyframes } from 'styled-components';

const SkeletonPulse = keyframes`
  0% { background-position: 100% 50%; }
  100% { background-position: -100% 50%; }
`;

export const Skeleton = styled.div`
  animation: ${SkeletonPulse} 1.5s ease-in-out infinite;
  background: linear-gradient(90deg, #f0f0f0 0px, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 200%;
  border-radius: 4px;
  width: 220px;
  height: 285px;
`;