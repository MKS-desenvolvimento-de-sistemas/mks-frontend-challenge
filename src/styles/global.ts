import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f9f9f9;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
  }

`
