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
import { Link } from "gatsby";
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
  margin: 20px;
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
  @media (min-width: 1024px) {
    margin-left: 30px;
  }
`;

export const HeadingInnerFooter = styled(Typography)`
  font-family: ${FONT_FAMILY.oxygen};
  font-style: normal;
  font-weight: bold;
  font-size: ${FONT_SIZE.font20};
  line-height: 25px;
  @media (min-width: 1024px) {
    font-size: 16px;
  }
  color: ${COLORS.grayLigter};
  margin-bottom: 15px;
`;

export const NavList = styled(Link)`
  font-family: ${FONT_FAMILY.oxygen};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
  cursor: pointer;
`;

export const NavListButton = styled.button`
  font-family: ${FONT_FAMILY.oxygen};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
  cursor: pointer;
  border: none;
  background: none;
`;

export const InnerContainer = styled.div`
  padding-top: 32px;
`;

export const AccountList = styled.img`
  transform: scale(0.7);
  right: 55px;
  top: -15px;
  position: relative;
  @media (min-width: 1280px) {
    transform: scale(0.9);
    right: 30px;
  }
`;

export const OrderContainer = styled.div`
  text-align: center;
  margin-top: 35px;
`;

export const OuterOrderButton = styled.div`
  border: 1px solid white;
  width: 173px;
  height: 62px;
  border-radius: 30px;
  margin: 0 auto;
  &:hover, &:focus {
    box-shadow: 0px 5px 20px -4px rgb(0 0 0 / 25%);
  }
`;

export const OrderNow = styled.a`
  font-family: Oxygen;
  font-style: normal;
  font-weight: bold;
  background: #FFFFFF;
  border-radius: 30px;
  color: #E2B62E;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  top: 20px;
  position: relative;
  cursor: pointer;
  text-decoration: none;
`;

export const CenterGrid = styled(Grid)`
  text-align: center;
`;

export const LeftGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    justify-content: left;
  }
`;

export const RightGrid = styled(Grid)`
  text-align: right;
`;

export const SocialMediaContainer = styled.div`
  @media (min-width: 1024px) {
    margin-top: 40px;
  }
`;
