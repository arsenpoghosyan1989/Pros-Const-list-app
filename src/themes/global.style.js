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
    font-family: 'Avenir', serif !important;
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    color: ${thirdDark};
  }
`;

export default GlobalStyle;
