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
        background-color: ${({ theme }) => theme.color.pageBg};
        color: ${({ theme }) => theme.color.textPrimary};
        transition: background-color 0.25s ease, color 0.25s ease;
    }
`;
