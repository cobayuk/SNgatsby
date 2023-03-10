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
  Grid,
  Button,
  Container,
  Typography
} from '@material-ui/core';
import { COLORS, FONT_SIZE, FONT_FAMILY } from "@styles/constants";

export const HeadingPrice = styled(Typography)`
  && {
    font-weight: bold;
    font-family: ${FONT_FAMILY.oxygen};
    margin-left: 10px;
  }
`;

export const HeadingPriceSeparator = styled(Typography)`
  && {
    position: relative;
    top: -32px;
    bottom: 0;
    font-weight: bold;
    font-size: ${FONT_SIZE.font24};
    color: ${COLORS.black};
  }

`;

export const  HeadingPricing = styled(Typography)`
  && {
    font-size: 40px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
    font-family: Oxygen;
    margin-bottom: 30px;
    font-weight: bold;
  }
`;

export const HeadingPricingSuffix = styled(Typography)`
  && {
    font-size: ${FONT_SIZE.font24};
    color: ${COLORS.black};
  }
`;

export const BoxDiscount = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }
`;

export const HeadingDiscountPrice = styled(Typography)`
  && {
    font-size: ${FONT_SIZE.font20};
    color: ${COLORS.mediumGray};
    text-decoration: line-through;
  }
`;

export const PinkBox = styled(Typography)`
  && {
    width: auto;
    height: 24px;
    background: ${COLORS.pinky};
    border-radius: 16px;
    color: ${COLORS.white};
    text-align: center;
    padding: 3px 11px 26px 15px;
  }
`;

export const GreyBox = styled(Typography)`
  && {
    width: auto;
    height: 24px;
    background: ${COLORS.softlyGray};
    border-radius: 16px;
    color: ${COLORS.softlyBlack};
    text-align: center;
    padding: 3px 11px 26px 15px;
  }
`;

export const CardsContentArea = styled.div`
  width: 100%;
  height: ${props => props.title === 'Platinum' ? '600px' : '530px'};
  ${props => props.title === 'Platinum' ? 'margin-top: -3em' : ''};
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 3%), 0px 1px 13px 0px rgb(0 0 0 / 4%), 0px 1px 3px 0px rgb(0 0 0 / 47%);
`;

export const CardsContentAreaMobile = styled.div`
  width: 100%;
  height: ${props => props.title === 'Platinum' ? '600px' : '550px'};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border: 1px solid rgb(0 0 0 / 5%);
`;

export const CardHeaderTier = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  padding-top: ${props => props.title === 'Platinum' ? '80px' : '40px'};
`;

export const CardHeaderTierMobile = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  padding-top: 40px;
`;

export const HeadingTierPackages = styled(Typography)`
  && {
    font-size: 36px;
    font-style: normal;
    font-weight: bold;
    line-height: 42px;
  }
`;

export const CardPricing = styled(Box)`
  && {
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-bottom: 15px;
  }
`;

export const ChecklistWrapper = styled.div`
  margin-right: 8px;
  display: inline-flex;
`;

export const ListPricingOrder = styled.ul`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const WrapperPricing = styled(Box)`
  && {
    margin-top: 5em;
    margin-bottom: 5em;
    padding-top: 50px;
  }
`;

export const BoxOuterPricing = styled(Container)`
  && {
    margin-top: 10em;
    @media (max-width: 768px) {
      margin-top: 1em;
    }
  }
`;

export const HeadingFirstTitle = styled(Typography)`
  && {
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
  }
`;

export const CaptionPricing = styled(Typography)`
  && {
    font-size: 15px;
    font-family: ${FONT_FAMILY.oxygen};
    margin-bottom: 30px;
  }
`;

export const ButtonActionPricing = styled(Button)`
  && {
    background-color: ${COLORS.golden};
    border: 0;
    color: ${COLORS.white};
  }
`;

export const BoxDiscountPrice = styled(Box)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerSliderGrid = styled(Grid)`
  && {
    display: flex;
    @media (min-width: 320px) and (max-width: 768px) {
      display: inline-flex;
    }
  }
`;
