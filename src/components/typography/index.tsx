import { CSSProperties } from 'styled-components';
import * as S from './style';
import TypographyProps from './type';

const Typography = ({ tag = 'p', children, className, ...props }: TypographyProps 
& CSSProperties) => (
  <S.DynamicTypography className={className} tag={tag} style={{ ...props }}>
    {children}
  </S.DynamicTypography>
)

export default Typography;