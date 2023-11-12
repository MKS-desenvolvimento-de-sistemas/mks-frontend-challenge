import { FC } from 'react';
import { StyledButton, StyledCard, StyledLogo, StyledText } from '../styles/headerStyles';

const Header: FC = () => {
  return (
    <StyledCard>
      <StyledLogo>
        <h1>MKS</h1>
        <StyledText>Sistemas</StyledText>
      </StyledLogo>
      <StyledButton type="button">
        🛒
        {' '}
        <strong style={ { marginLeft: '0.5rem' } }>0</strong>
      </StyledButton>
    </StyledCard>
  );
};
export default Header;
