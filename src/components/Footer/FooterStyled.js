/*
| ===========================================================
|    This file contains all styles footer.
| ===========================================================
|
| Table Of Contents
| - Footer
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
}
from '@material-ui/core';
import { FONT_SIZE, FONT_FAMILY, COLORS } from '@styles/constants';

export const MainFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;
  background-color: #E2B62E;
  bottom: 0;
  width: 100%;
  height: 193px;
  margin-top: 150px;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const HeadingWeLoveBuild = styled(Typography)`
  &.MuiTypography-body1 {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Oxygen'
  }
`;

export const HeadingTaglineBrand = styled(Typography)`
  &.MuiTypography-root {
    color: ${COLORS.white};
    font-size: 13px;
    padding-top: 55px;
    display: flex;
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    line-height: 16px;
  }
`;

export const HeadingPaymentDigital = styled(Typography)`
  &.MuiTypography-body1 {
    text-align: center;
    margin-bottom: 10px;
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
  }
`;

export const HeadingPaymentConvention = styled(Typography)`
  &.MuiTypography-body1 {
    text-align: center;
    margin-bottom: 10px;
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
  }
`;

export const HeadingCopyright = styled(Typography)`
  &.MuiTypography-root {
    display: flex;
    font-size: 14px;
    color: ${COLORS.grayLigter};
    margin: 0;
    padding-top: 22px;
    padding-bottom: 20px;
  }
`;

export const ContainerDigitalPayment = styled(Grid)`
  & {
    text-align: center;
  }
`;

export const ContainerDigitalConventional = styled(Grid)`
   & {
    text-align: center;
  }
`;

export const GridCenter = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperInline = styled(Box)`
  display: table-cell;
  color: ${COLORS.white};
  padding-top: 25px;
  p.MuiTypography-root {
    margin-top: 10px;
    font-size: 12px;
  }
`;

export const WrapperMediaSocial = styled(Box)`
  & div {
    color: ${COLORS.white};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 28px;
  }
`;

export const BoxMediaSocial = styled(Box)`
  padding-left: 15px;
  display: flex;
`;

export const HeadingBanner = styled(Typography)`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  font-family: ${FONT_FAMILY.oxygen};
  color: ${COLORS.white};
  @media (max-width: 768px) {
    font-size: 19px;
  }
`;

export const InnerFooter = styled(Box)`
  display: flex;
`;

export const SubFooter = styled(Box)`
  display: flex;
  flex-direction: colum;
  width: 100%;
  justify-content: center;
  align-item: center;
  margin-top: 25px;
  border-top: 1px solid ${COLORS.softlyGray};
`;

export const ImageBrandFooter = styled.img`
  width: 139px;
  height: 28px;
  display: block;
`;

export const HeadingInnerFooter = styled(Typography)`
  font-family: ${FONT_FAMILY.oxygen};
  font-style: normal;
  font-weight: bold;
  font-size: ${FONT_SIZE.font20};
  line-height: 25px;
  color: ${COLORS.grayLigter}; 
  margin-bottom: 15px;                                                                                                                                           
`;

export const NavList = styled.li`
  font-family: ${FONT_FAMILY.oxygen};
  font-style: normal;
  font-weight: normal;
  font-size: ${FONT_SIZE.font13};
  line-height: 28px;
`;
