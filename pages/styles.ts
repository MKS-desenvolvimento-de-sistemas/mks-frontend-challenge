import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  height: 120px;
`;

export const ProductCard = styled.div`
  width: 20%;
  height: 285px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  margin: 15px 10px;
  background: ${props => props.theme.colors.secondary};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`;

export const ProductDescription = styled.div`
  padding: 12px 15px;
`;

export const ProductTitle = styled.div`
  min-height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const ProductName = styled.p`
  line-height: 19px;
`;

export const ProductPrice = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  border-radius: 5px;
  color: ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.quaternary};
  padding: 4px 8px;
  align-self: center;
`;

export const ProductDesc = styled.p`
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
`;

export const ButtonProduct = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;

  margin-left: 10px;
`;

export const ButtonBuy = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 32px;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
  outline: none;
  border: none;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
`;
