import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline:0;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        width:100vw;
        height:100vh;
    }

    button {
        cursor: pointer;
    }

    :root {
        --color-primary: #0F52BA;
        --grey-0: #EEEEEE;
        --grey-1: #2C2C2C;
        --grey-2: #373737;
        
        --border-radius: 0.5rem;
        --title: 2rem;
    }
`;
