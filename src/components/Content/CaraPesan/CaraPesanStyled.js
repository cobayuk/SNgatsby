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
  display: inline-flex;
  margin-top: 350px;
  padding: 0 10px 0 10px;
  padding-top: 50px;
  background: none;
  @media (min-width: 320px) and (max-width: 768px) {
    margin-top: 0;
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
  line-height: 24px;
  color: ${COLORS.brownSugar};
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const TaglineCaption = styled.p`
  font-family: ${FONT_FAMILY.oxygen};
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  color: ${COLORS.graySoftly};
  display: flex;
  margin-bottom: 15px;
  color: rgba(0, 0, 0, 0.54);
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ImageTagOrnaments = styled.img`
  width: auto;
  height: 155px;
  margin: 0 auto;
  display: block;
  margin-bottom: 12px;
`;

export const WrapperHeadings = styled(Box)`
  padding-right: 160px;
  @media (min-width: 320px) and (max-width: 768px) {
    padding-right: 0;
  }
  background: none !important;
  @media (min-width: 1024px) {
    text-align: left;
    padding: 0;
  }

`;

export const WrapperButtonCaraPesan = styled.div`
  display: flex;
  @media (min-width: 320px) and (max-width: 768px) {
    margin: 0 auto;
    justify-content: center;
    margin-top: 11em;
  }
  margin-top: 2em;
`;
