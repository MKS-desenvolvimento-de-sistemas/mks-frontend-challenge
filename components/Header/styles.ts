import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  padding: 0 65px;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const LogoBig = styled.p`
  font-size: 40px;
  line-height: 19px;
  font-weight: 600;
`;

export const LogoSmall = styled.p`
  margin-left: 10px;

  font-size: 20px;
  line-height: 19px;
  font-weight: 300;
`;

export const CartWrapper = styled.div`
  display: flex;
  background: ${props => props.theme.colors.secondary};
  border-radius: 8px;
  padding: 10px 20px;
`;

export const CartNumber = styled.p`
  color: #000;
  margin-left: 10px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
`;
