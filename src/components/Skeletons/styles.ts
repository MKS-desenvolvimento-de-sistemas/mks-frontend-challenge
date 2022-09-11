import styled from 'styled-components'

interface BoxProps {
  width: string;
  height: string;
  margin?: string;
  borderRadius?: string;
}

export const Box = styled.div<BoxProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin ? margin : '0'};
  
  background: #ddd;
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '0'};
`
