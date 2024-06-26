import styled from "styled-components";


export const Skeleton = styled.div`
    min-width: 217.56px;
    max-width: 217.56px;
    height: 285px;
    background: #ddd;
    display: flex;
    position: relative;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`;


export const ContainerShimmer = styled.div`
    position: relative;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: loading 1.5s infinite;
`;

export const Shimme = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255,255,255,0.8);
    transform: skewX(200deg);
    box-shadow: 0 0 30px 30px rgba(255,255,255,0.05);
    overflow: hidden;
`;
