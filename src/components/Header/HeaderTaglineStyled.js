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
  Box,
  Typography
}
from '@material-ui/core';
import { COLORS } from "@styles/constants";

export const BoxHeader = styled(Box)`
  width: 100%;
  border: 1px solid #f7f7f7;
  height: 600px;
  padding: 56px 50px 0px 48px;
  margin-top: 72px;
  border-radius: 20px;
  background-color: #F1EDEA;
`;

export const HeadingTagline = styled.h1`
  font-size: 48px;
  font-style: normal;
  font-family: Oxygen;
  font-weight: bold;
  line-height: 61px;
`;

export const ParagraphTagline = styled(Typography)`
  &.MuiTypography-body1 {
    color: #928D97;
    font-size: 20px;
    margin-top: 3em;
    font-weight: normal;
    font-family: Oxygen;
    line-height: 25px;
    margin-bottom: 15px;
  }
`;

export const BoxReactangleSmall = styled(Box)`
  &.MuiBox-root {
    top: 256px;
    left: 28px;
    color: ${COLORS.white};
    width: 230px;
    height: 57px;
    display: flex;
    padding: 10px;
    z-index: 10;
    position: relative;
    border-radius: 15px;
    background-color: #EE6E53;
  }
`;

export const HeadingLove = styled(Typography)`
  &.MuiTypography-body1 {
    font-size: 12px;
  }
`;

export const IconCircleLove = styled.img`
  padding-right: 10px;
`;

export const BoxOrnamentsOne = styled(Box)`
  &.MuiBox-root {
    top: -12em;
    float: left;
    right: -12em;
    display: flex;
    position: relative;
  }
`;

export const BoxOrnamentsTwo = styled(Box)`
  &.MuiBox-root {
    top: 0;
    left: 50px;
    float: right;
    display: flex;
    position: relative;
  }
`;

export const BoxOrnamentsThree = styled(Box)`
  &.MuiBox-root {
    top: -5em;
    float: right;
    right: -2em;
    display: flex;
    position: relative;
  }
`;

export const BoxOrnamentsFour = styled(Box)`
  &.MuiBox-root {
    top: -35em;
    float: left;
    right: 16em;
    display: flex;
    position: relative;
  }
`;
