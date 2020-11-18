/**
 * @file
 * Contains global styles.
 */
import { createGlobalStyle } from 'styled-components';
import { thirdDark } from "./defaultTheme";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: serif !important;
    font-size: 25px;
    font-style: normal;
    font-weight: normal;
    color: ${thirdDark};
  };
  * {
    box-sizing: border-box;
  }

  &::-webkit-scrollbar {
    width: 0.4em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3c5967;
    outline: 1px solid #d9d8dddb;
  }
`;

export default GlobalStyle;
