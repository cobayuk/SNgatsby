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
  border-radius: 6px;
  border: 1px solid #E2B013;
  color: #E2B013;
  width: 77px;
  height: 30px;
  text-transform: capitalize;
  font-family: Oxygen;
  font-size: 15px;
  font-weight: bold;
  margin-right: 10px;
  &:hover {
    text-decoration: none;
    background-color: linear-gradient(180deg, #F1D88A 0%, rgba(244, 225, 165, 0.770833) 0.01%, rgba(246, 231, 182, 0.62235) 0.02%, rgba(255, 255, 255, 0) 100%), #E2B013;
    color: #E2B013;
  }
`;

export const ButtonDaftar = styled(Button)`
  background-color: #E2B013;
  color: ${COLORS.white};
  &:hover {
    background: linear-gradient(180deg, #F1D88A 0%, rgba(244, 225, 165, 0.770833) 0.01%, rgba(246, 231, 182, 0.62235) 0.02%, rgba(255, 255, 255, 0) 100%), #E2B013;
    color: ${COLORS.white};
    border: 1px solid #E2B013;
  }
  border-radius: 6px;
  width: 77px;
  height: 30px;
  border: none;
  text-transform: capitalize;
  font-family: Oxygen;
  font-size: 15px;
  font-weight: bold;
`;
