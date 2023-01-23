import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {

        --header-height: 48px;
        --footer-height: 34px;
        --global-padding: 20px;
        
        /* ==== COLORS ==== */
            --primary-color-100: ${(props) => props.theme.primary["100"]};
            --primary-color-200: ${(props) => props.theme.primary["200"]};
            --secondary-color-100: ${(props) => props.theme.secondary["100"]};
            --secondary-color-200: ${(props) => props.theme.secondary["200"]};
            --secondary-color-300: ${(props) =>
              props.theme.secondary["300"]};   
            --terciary-color: ${(props) => props.theme.terciary};  
                
            --shadow-color: ${(props) => props.theme.shadow};   
            
        /* ==== Z-INDEX ==== */
            --z-cart: 100;
            --z-fixed: 10;
    }

    @media screen and (min-width: 760px) {
        :root {
            --global-padding: 40px;
            --header-height: 70px;
        }
    }

    @media screen and (min-width: 1240px) {
       :root {
            --global-padding: 65px;
            --header-height: 101px;
       }
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

    main {
        width: 100%;
        margin-top: var(--header-height);
        margin-bottom: var(--footer-height);

        min-height: calc(100vh - var(--header-height) - var(--footer-height));

        display: flex;
        justify-content: center;
        align-items: center;
    }

`;

export default GlobalStyle;
