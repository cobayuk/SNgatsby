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
  Toolbar,
  Typography
}
from '@material-ui/core';
import { COLORS } from "@styles/constants";

export const HeaderToolbar = styled(Toolbar)`
  && {
    padding: 0;
    flex-wrap: wrap;
  }
`;

export const HeaderToolbarTitle = styled(Typography)`
  && {
    -webkit-box-flex: 1;
    flex-grow: 1;
  }
`;

export const Logobrand = styled.img`
  && {
    height: 35px;
    display: flex;
    align-items: align-start;
    @media (max-width: 768px) {
      height: 25px;
    }
  }
`;
