import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        -webkit-font-smoothing: antialiased;
        background-color: ${({theme}) => theme.colors.base.background};
    }
`;