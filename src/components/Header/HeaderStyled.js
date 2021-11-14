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
  AppBar,
  Toolbar,
  Typography
}
from '@material-ui/core';
import { COLORS } from "@styles/constants";

export const HeaderToolbarTitle = styled(Typography)`
  flex-grow: 1;
`;

export const HeaderAppBar = styled(AppBar)`
  margin-top: 50px;
  background-color: ${COLORS.white};
`;

export const HeaderToolbar = styled(Toolbar)`
  padding: 0;
  flex-wrap: wrap;
`;

export const Logobrand = styled.img`
  width: auto;
  height: 35px;
  display: flex;
  align-items: align-start;
`;
