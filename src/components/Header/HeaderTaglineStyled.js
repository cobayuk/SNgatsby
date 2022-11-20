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

export const BoxHeader = styled.div`
  width: 100%;
  border: 1px solid #f7f7f7;
  height: 600px;
  padding: 56px 50px 0px 48px;
  margin-top: 80px;
  border-radius: 20px;
  background-color: #F1EDEA;
  @media (min-width: 320px) and (max-width: 360px) {
    padding: 48px 15px 0px 15px;
    height: 350px;
    margin-top: 15px;
    margin-bottom: 45px;
  }
  @media (min-width: 325px) and (max-width: 360px) {
    padding: 48px 21px 0px 21px;
  }
  @media (min-width: 375px) and (max-width: 768px) {
    padding: 48px 21px 0px 21px;
    height: 400px;
    margin-bottom: 45px;
  }
`;

export const HeadingTagline = styled.h1`
  && {
    font-size: 48px;
    font-style: normal;
    font-family: Oxygen;
    font-weight: bold;
    line-height: 61px;
    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
`;

export const ParagraphTagline = styled(Typography)`
  && {
    color: #928D97;
    font-size: 20px;
    margin-top: 3em;
    font-weight: normal;
    font-family: Oxygen;
    line-height: 25px;
    margin-bottom: 15px;
    @media (min-width: 320px) and (max-width: 360px) {
      font-size: 10px;
      line-height: 12px;
    }
    @media (min-width: 375px) and (max-width: 768px) {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export const BoxReactangleSmall = styled(Box)`
  && {
    top: 256px;
    left: 28px;
    color: ${COLORS.white};
    width: 250px;
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
  && {
    font-size: 12px;
  }
`;

export const IconCircleLove = styled.img`
  && {
    padding-right: 10px;
  }
`;

export const BoxOrnamentsOne = styled(Box)`
  && {
    top: -12em;
    right: 150px;
    display: flex;
    position: relative;
    justify-content: flex-end;
    @media (min-width: 320px) and (max-width: 360px) {
      top: -2px;
      left: 30px;
      width: auto;
      height: 72%;
      justify-content: flex-end;
    }
    @media (min-width: 375px) and (max-width: 767px) {
      top: -2em;
      left: 38px;
      justify-content: flex-end;
    }
    @media (min-width: 768px) {
      top: -2em;
      left: 0px;
    }
    @media (min-width: 1024px) {
      top: -12em;
      right: 12em;
      left: unset;
    }
  }
`;

export const BoxOrnamentsTwo = styled(Box)`
  && {
    top: -310px;
    left: 140px;
    float: right;
    display: flex;
    position: relative;
  }
`;

export const BoxOrnamentsThree = styled(Box)`
  && {
    top: -5em;
    float: right;
    right: -9em;
    display: flex;
    position: relative;
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

export const BoxOrnamentsFour = styled(Box)`
  && {
    display: flex;
    position: relative;
    right: 16em;
    @media (max-width: 320px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media (min-width: 375px) and (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

