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
} from '@material-ui/core';
import { COLORS, FONT_FAMILY } from "@styles/constants";

export const BoxHowItWorks = styled(Box)`
  margin-top: 150px;
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
`;

export const TaglineCaption = styled(Typography)`
  font-size: 40px;
  font-family: ${FONT_FAMILY.oxygen};
  font-weight: bold;
  color: ${COLORS.black};
`;

export const TaglineDescription = styled(Typography)`
  font-size: 15px;
`;

export const HeadingIlustration = styled(Typography)`
  text-align: left;
  @media (min-width: 320px) and (max-width: 425px) {
    text-align: center;
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
`;

export const ImageIlustration = styled.img`
  padding: 100px;
  @media (min-width: 320px) and (max-width: 425px) {
    padding: 0px 55px;
    width: 100%;
    height: auto;
  }
`;
