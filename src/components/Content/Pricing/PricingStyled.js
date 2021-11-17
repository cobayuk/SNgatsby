/*
| ===========================================================
|    This file contains all styles Pricing.
| ===========================================================
|
| Table Of Contents
| - Cara Pricing
|
| Author  : Sungnikah Corporation's.
| Date    : 2 Februari 2020
| Develop : Dimas Prasetyo, Arie Aditya Nugraha (Frontend Dev).
*/

import styled from 'styled-components';
import  {
  Box,
  Card,
  Button,
  Container,
  CardHeader,
  Typography,
} from '@material-ui/core';
import { COLORS, FONT_SIZE, FONT_FAMILY } from "@styles/constants";

export const HeadingPrice = styled(Typography)`
  font-weight: bold;
  font-family: ${FONT_FAMILY.oxygen};
  margin-left: 10px;
`;

export const HeadingPriceSeparator = styled(Typography)`
  position: relative;
  top: -32px;
  bottom: 0;
  font-weight: bold;
  font-size: ${FONT_SIZE.font24};
  color: ${COLORS.black};
`;

export const  HeadingPricing = styled(Typography)`
  font-size: 40px;
  font-family: Oxygen;
  margin-bottom: 30px;
  font-weight: bold;
`;

export const HeadingPricingSuffix = styled(Typography)`
  font-size: ${FONT_SIZE.font24};
  color: ${COLORS.black};
`;

export const BoxDiscount = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const HeadingDiscountPrice = styled(Typography)`
  font-size: ${FONT_SIZE.font20};
  color: ${COLORS.mediumGray};
  text-decoration: line-through;
`;

export const ButtonBoxDiscountGold = styled(Typography)`
  width: auto;
  height: 24px;
  background: ${COLORS.pinky};
  border-radius: 16px;
  color: ${COLORS.white};
  text-align: center;
  padding: 3px 11px 26px 15px;
`;

export const ButtonBoxDiscount = styled(Typography)`
  width: auto;
  height: 24px;
  background: ${COLORS.softlyGray};
  border-radius: 16px;
  color: ${COLORS.softlyBlack};
  text-align: center;
  padding: 3px 11px 26px 15px;
`;

export const WrapperCards = styled(Card)`
  width: 100%;
  height: 600px;
  max-height: 600px;
`;

export const WrapperCardsGold = styled(Card)`
  width: 100%;
  height: 600px;
`;

export const CardHeaderTier = styled(CardHeader)`
  font-weight: bold;
`;

export const CardPricing = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 15px;
`;

export const ListPricingOrder = styled.ul`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const WrapperPricing = styled(Box)`
  margin-top: 5em;
  margin-bottom: 5em;
  padding-top: 50px;
`;

export const BoxOuterPricing = styled(Container)`
  margin-top: 2em;
`;

export const HeadingFirstTitle = styled(Typography)`
  font-size: 20px;
  font-family: ${FONT_FAMILY.oxygen};
  font-weight: bold;
  color: ${COLORS.brownSugar};
  text-transform: uppercase;
`;

export const CaptionPricing = styled(Typography)`
  font-size: 15px;
  font-family: ${FONT_FAMILY.oxygen};
  margin-bottom: 30px;
`;

export const ButtonActionPricing = styled(Button)`
  background-color: ${COLORS.golden};
  border: 0;
  color: ${COLORS.white};
  /* &:hover: {
    background-color: ${COLORS.golderDark};
    color: ${COLORS.white};
    border: 0; */
  /* } */
`;

export const  BoxDiscountPrice = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
