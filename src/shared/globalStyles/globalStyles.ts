import { createGlobalStyle } from "styled-components";
import { colors, sizes } from "./globalValues";
export const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&family=Roboto:wght@100;300;400&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: calc(100% - ${sizes.navbar});
  }

  body {
    font-family: 'Cabin', sans-serif;
    background-color: ${colors.background};
  }
`;