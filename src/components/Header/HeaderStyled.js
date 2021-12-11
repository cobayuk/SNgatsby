/*
| ===========================================================
|    This file contains all styles Header.
| ===========================================================
|
| Table Of Contents
| - Header
|
| Author  : Sungnikah Corporation's.
| Date    : 2 Februari 2020
| Develop : Dimas Prasetyo, Arie Aditya Nugraha (Frontend Dev).
*/

import styled from 'styled-components';
import {
  // AppBar,
  Toolbar
}
from '@material-ui/core';
import { COLORS } from "@styles/constants";

export const NavbarContainer = styled.div`
  right: 0;
  position: fixed;
`;

// export const HeaderAppBar = styled(AppBar)`
//   position: fixed;
//   left: 0;
//   top: 0;
//   background-color: ${COLORS.white};
//   @media (max-width: 768px) {
//     margin-top: 10px;
//   }
// `;

export const HeaderToolbar = styled(Toolbar)`
  padding: 0;
  flex-wrap: wrap;
`;

export const Logobrand = styled.img`
  width: 100%;
  height: 35px;
  margin-left: 20px;
  display: flex;
  align-items: align-start;
  @media (max-width: 768px) {
    height: 25px;
  }
`;
