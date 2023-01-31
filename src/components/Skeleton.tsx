import styled from "styled-components";

const SkeletonStyles = styled.div`
  background-image: linear-gradient(
    -90deg,
    #121212 0%,
    #262626 50%,
    #121212 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

type Props = {
  width: number | string;
  height: number | string;
};

const Skeleton = ({ width, height }: Props) => {
  return <SkeletonStyles style={{ width, height }}></SkeletonStyles>;
};

export default Skeleton;
