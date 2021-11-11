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
  Button,
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

export const Links = styled(Button)`
  margin: 10px;
  font-size: 14px;
  text-decoration: none;
  color: #000;
  font-family: Oxygen, sans-serif;
  font-weight: 600;
  text-transform: capitalize;
`;

export const ButtonLogin = styled(Button)`
  background: linear-gradient(180deg, #F1D88A 0%, rgba(244, 225, 165, 0.770833) 0.01%, rgba(246, 231, 182, 0.62235) 0.02%, rgba(255, 255, 255, 0) 100%), #E2B013;
  border-radius: 10px;
  color: ${COLORS.white};
  width: 104px;
  height: 36px;
  border: none;
  text-transform: capitalize;
  font-family: Oxygen;
  font-size: 15px;
  font-weight: bold;
`;
