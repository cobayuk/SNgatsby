/*
| ===========================================================
|    This file contains all styles footer.
| ===========================================================
|
| Table Of Contents
| - Footer
|
| Author  : Sungnikah Corporation's.
| Date    : 2 Februari 2020
| Develop : Dimas Prasetyo, Arie Aditya Nugraha (Frontend Dev).
*/

import { createGlobalStyle } from 'styled-components';
import { COLORS } from "@styles/constants";
import OxygenBold from '@assets/fonts/Oxygen-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${COLORS.white};
  }
  @font-face {
    font-family: 'Oxygen';
    src: url(${OxygenBold}) format('ttf');
    font-weight: 300;
    font-style: normal;
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyle
