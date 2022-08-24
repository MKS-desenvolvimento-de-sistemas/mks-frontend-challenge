import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  height: 34px;
  background: ${props => props.theme.colors.terciary};
  color: #000;
  display: flex;
  align-items: center;
  padding: 0 65px;
  justify-content: center;

  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
`;
