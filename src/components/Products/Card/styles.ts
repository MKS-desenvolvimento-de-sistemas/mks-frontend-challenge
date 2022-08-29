import styled from "styled-components";

export const Card = styled.li`
  width: 250.5px;
  background: var(--primary-color-100);
  box-shadow: 0px 2px 8px var(--shadow-color);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1240px) {
    width: 217.56px;
  }
`;

export const CardDetails = styled.div`
  width: 100%;
  padding: 20.72px 13.31px 13.81px 16.12px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 1240px) {
    padding: 18px 11.56px 12px 14px;
  }
`;

interface ICardImageProps {
  imageUrl: string;
}

export const CardImage = styled.div<ICardImageProps>`
  width: 127.8px;
  height: 158.82px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

  margin-bottom: 16.11px;

  @media (min-width: 760px) {
    width: 111px;
    height: 138px;
    margin-bottom: 14px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4.61px;

  h4 {
    height: 54px;
    max-width: 110px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: var(--secondary-color-200);
  }

  p {
    width: 100%;
    max-height: 25px;
    overflow-y: hidden;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    color: var(--secondary-color-200);

    margin-top: 4.6px;
  }

  @media (min-width: 760px) {
    gap: 4px;
    p {
      margin-top: 4px;
    }
  }
`;
