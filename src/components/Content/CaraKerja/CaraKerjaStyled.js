/*
| ===========================================================
|    This file contains all styles cara kerja.
| ===========================================================
|
| Table Of Contents
| - Cara Kerja
|
| Author  : Sungnikah Corporation's.
| Date    : 2 Februari 2020
| Develop : Dimas Prasetyo, Arie Aditya Nugraha (Frontend Dev).
*/

import styled from 'styled-components';
import  {
  Typography,
  Box,
  Grid
} from '@material-ui/core';
import { COLORS, FONT_FAMILY } from "@styles/constants";

export const BoxHowItWorks = styled.div`
  margin-top: 100px !important;
  padding-top: 50px;
  @media (min-width: 320px) and (max-width: 425px) {
    margin-top: 15px;
  }
`;

export const HeadingItWork = styled(Typography)`
  font-size: 20px;
  font-family: ${FONT_FAMILY.oxygen};
  font-weight: bold;
  color: ${COLORS.brownSugar};
  text-transform: uppercase;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const TaglineCaption = styled(Typography)`
  font-size: 40px;
  @media (max-width: 768px) {
		font-size: 20px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 30px;
  }
  font-family: ${FONT_FAMILY.oxygen};
  font-weight: bold;
  color: ${COLORS.black};
`;

export const TaglineDescription = styled(Typography)`
  font-size: 15px;
`;

export const HeadingIlustration = styled(Typography)`
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
  }
  color: ${COLORS.black};
  font-weight: bold;
  font-family: ${FONT_FAMILY.oxygen};
  margin-bottom: 10px;
`;

export const DescriptionChooseThemeKece = styled(Typography)`
  font-size: 15px;
  text-align: left;
  font-family: ${FONT_FAMILY.oxygen};
  @media (max-width: 768px) {
    padding: 0px 15px;
    text-align: center;
  }
`;

export const ImageIlustration = styled.img`
  padding: 100px;
  @media (min-width: 320px) and (max-width: 425px) {
    padding: 0px 55px;
    width: 100%;
    height: auto;
  }
  @media (min-width: 768px) {
    padding: 100px;
    margin: 0 auto;
  }
`;

export const WrapperDescription = styled(Grid)`
  @media (min-width: 1024px) {
    align-self: center;
  }
`;
