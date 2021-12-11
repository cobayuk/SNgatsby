/*
| ===========================================================
|    This file contains all styles cara pesan.
| ===========================================================
|
| Table Of Contents
| - Cara Pesan
|
| Author  : Sungnikah Corporation's.
| Date    : 2 Februari 2020
| Develop : Dimas Prasetyo, Arie Aditya Nugraha (Frontend Dev).
*/

import styled from 'styled-components';
import  {
  Box,
  Grid,
  Typography,
} from '@material-ui/core';
import { COLORS, FONT_FAMILY } from "@styles/constants";

export const ContentGridCaraPesan = styled(Grid)`
  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const BoxHowItWorks = styled(Box)`
  display: flex;
  margin-top: 350px;
  padding: 0 10px 0 10px;
  padding-top: 50px;
  @media (min-width: 320px) and (max-width: 768px) {
    margin-top: 0;
  }
  @media (min-width: 1280px) {
    margin-top: 400px;
  }
`;

export const HeadingItWork = styled(Typography)`
  font-family: ${FONT_FAMILY.oxygen};
  font-style: normal;
  font-Weight: bold;
  font-size: 30px;
  line-height: 1.4;
  margin: 2px 0 3px 0;
  @media (max-width: 320px) {
    font-size: 20px;
    max-width: 203px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 25px;
  }
  @media (min-width: 375px) and (max-width: 768px) {
    font-size: 20px;
    max-width: 223px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 25px;
  }
`;

export const HeadingHowToOrder = styled(Typography)`
  font-family: ${FONT_FAMILY.oxygen};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: ${COLORS.brownSugar};
  text-transform: uppercase;
  @media (min-width: 320px) and (max-width: 768px) {
    text-align: center;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const TaglineCaption = styled(Typography)`
  font-family: ${FONT_FAMILY.oxygen};
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  color: ${COLORS.graySoftly};
  display: flex;
  margin-bottom: 15px;
`;

export const ImageTagOrnaments = styled.img`
  width: auto;
  height: 155px;
`;

export const WrapperHeadings = styled(Box)`
  padding-right: 160px;
  @media (min-width: 320px) and (max-width: 768px) {
    padding-right: 0;
  }
`;

export const WrapperButtonCaraPesan = styled(Box)`
  display: flex;
  @media (min-width: 320px) and (max-width: 768px) {
    margin: 0 auto;
    justify-content: center;
  }
`;

export const SpacerOrnamentsMobile = styled(Box)`
  @media (min-width: 320px) and (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 30px;
  }
`;
