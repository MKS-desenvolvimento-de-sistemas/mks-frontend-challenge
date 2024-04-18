import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  * {
    margin: 0;
    padding: 0;
  };

  html, body {
    width: 100%;
    height: 100%;
    font-family: sans-serif;
  };

  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;