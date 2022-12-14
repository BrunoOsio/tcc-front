import { createGlobalStyle } from "styled-components";
import { colors, sizes } from "./globalValues";
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* background-color: rgba(230, 0, 0, 0.1); */
  }

  html, body, #root {
    height: calc(100% - ${sizes.navbar});
  }

  ::-webkit-calendar-picker-indicator {
    text-align: center;
    color: white;
    background-color: ${colors.white};
    padding: 5px;
    border-radius: 3px;
    position: relative;
    left: 3.5px;
    top: 0.5px;
    transition: all .3s ease-in-out;
  }

  ::-webkit-calendar-picker-indicator:hover {
    cursor: pointer;
    transform: scale(1.25);
  }

  ::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: ${colors.lightBlue};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.greyLighter};
    border-radius: 999px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.greyDarker};
    cursor: pointer;
  }

  body {
    background-color: ${colors.white};
  }
`;