import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    button {
        cursor: pointer;
    }  

    body {
        font-family: 'Lato', sans-serif;
        margin: 0 auto;
    }
`;