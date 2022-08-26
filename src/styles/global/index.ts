import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {

        --header-height: 48px;
        --global-padding: 20px;
        
        /* ==== COLORS ==== */
            --primary-color-100: ${(props) => props.theme.primary["100"]};
            --primary-color-200: ${(props) => props.theme.primary["200"]};
            --secondary-color-100: ${(props) => props.theme.secondary["100"]};
            --secondary-color-200: ${(props) => props.theme.secondary["200"]};
            --secondary-color-300: ${(props) =>
              props.theme.secondary["300"]};   
            --terciary-color: ${(props) =>
              props.theme
                .terciary};                                                            
        /* ==== Z-INDEX ==== */
            --z-cart: 100;
            --z-fixed: 10;
    }

    @media screen and (min-width: 760px) {
        --global-padding: 40px;
    }

    @media screen and (min-width: 1440px) {
        --global-padding: 65px;
    }

    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;

        font-family: 'Montserrat', sans-serif;
    }

    body {
        font-size: 1rem;
        background-color: var(--primary-color-100);
        color: var(--secondary-color-200);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    input:focus, textarea:focus {
        outline: none;
    }

    button, a {
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

`;

export default GlobalStyle;
