import { CSSProperties } from 'styled-components';
import * as S from './style';
import TypographyProps from './type';

const Typography = ({ tag = 'default', children, ...props }: TypographyProps 
& CSSProperties) => (
  <S.DynamicTypography tag={tag} style={{ ...props }}>
    {children}
  </S.DynamicTypography>
)

export default Typography;