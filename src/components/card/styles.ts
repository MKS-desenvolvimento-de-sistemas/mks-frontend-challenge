import styled from "styled-components";

export const Container = styled.div`
  width: 220px;
  height: 285px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 138px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TitleAndPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.875rem;
  padding: 0 11px 0 14px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.card.text};
  font-size: 1rem;
  font-weight: 400;
  line-height: 19px;
`;

export const BgPrice = styled.div`
  border-radius: 5px;
  background: ${(props) => props.theme.colors.card.bgPrice};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.h2`
  color: #fff;
  padding: 4px 7px;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.card.text};
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  padding: 0 11px 0 14px;
`;

export const Buy = styled.div`
  width: 100%;
  padding: 9px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;
  border-radius: 0px 0px 8px 8px;
  background-color: ${(props) => props.theme.colors.blue01};
  cursor: pointer;
`;

export const Purchase = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 18px;
`;
