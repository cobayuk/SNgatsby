/*
| ===========================================================
|    This file contains all styles for Themes 2.
| ===========================================================
|
| Author  : Sungnikah Corporation's.
| Date    : 1 Apr 2021
| Develop : Dimas Prasetyo, Arie Aditya Nugraha (Frontend Dev).
*/

import styled, { keyframes } from 'styled-components';
import { Box, Typography, Button } from '@material-ui/core';

import { breakpoints } from '../../components/media';
// Fonts
import "@fontsource/oxygen";
import "@fontsource/great-vibes";
import "@fontsource/open-sans";
import "@fontsource/dm-serif-display";
import "@fontsource/overlock";


export const CountDown = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Overlock";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #5B5B5F;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 50px;
  }
`;

export const Header = styled(Box)`
  min-height: 100vh;
`;

export const FlowerTopLeft = styled.img`
  @media (min-width: ${breakpoints.mobileMin}) {
    width: 70%;
    position: absolute;
  }

`;

export const FlowerMiddle = styled.img`
    width: 90%;
    margin: 0 auto;
    display: block;
    position: absolute;
    top: 10em;
    left: 5%;
`;

export const InvitedPerson = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: 300;
    font-size: 9px;
    line-height: 11px;
    color: #5B5B5F;
    position: relative;
    margin: 0 auto;
    display: table;
    top: -10em;
    letter-spacing: 0.3em;
  }
`;

export const WeddingTitle = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    line-height: 11px;
    color: #5B5B5F;
    position: relative;
    margin: 0 auto;
    display: table;
    letter-spacing: 0.3em;
    top: 2em;
  }
`;

export const Grooms = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Great Vibes";
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 90px;
    color: #5B5B5F;
    position: relative;
    margin: 0 auto;
    display: table;
    top: 35px;
  }
`;

export const Ampersand = styled.img`
    width: 30%;
    position: relative;
    margin: 0 auto;
    display: grid;
    top: 30px;
`;

export const Bride = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Great Vibes";
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 90px;
    color: #5B5B5F;
    position: relative;
    margin: 0 auto;
    display: table;
    top: 35px;
  }
`;

export const WeddingDate = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 9px;
    line-height: 12px;
    color: #5B5B5F;
    text-align: center;
    top: 50px;
    position: relative;
  }
`;

export const FlowerBottomRight = styled.img`
  position: absolute;
  width: 60%;
  bottom: 0;
  right: 0;
  @media (min-width: ${breakpoints.mobileMin}) {
    width: 70%;
  }
`;

export const WeddingInfoContainer = styled(Box)`
  min-height: 100vh;
  position: relative;
`;

export const Greetings = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #58595B;
    padding: 100px 30px 30px 30px;
  }
`;

export const SecondFlowerTop = styled.img`
  position: absolute;
  width: 60%;
  top: 0;
  right: 0;
`;

export const GroomFull = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Great Vibes";
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 60px;
    text-align: center;
    color: #5B5B5F;
  }
`;

export const Parents = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #58595B;
    padding: 10px 30px 30px 30px;
  }
`
export const AmpersandBride = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Great Vibes";
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 60px;
    text-align: center;
    color: #5B5B5F;
    margin-bottom: 20px;
  }
`;

export const WeddingDateSecond = styled(Typography)`
  &.MuiTypography-root {
    font-family: "DM Serif Display";
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 40px;
    text-align: center;
    color: #5B5B5F;
  }
`;

export const WeddingCeremony = styled(Typography)`
  &.MuiTypography-root {
    font-family: "DM Serif Display";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #5B5B5F;
  }
`;

export const WeddingTime = styled(Typography)`
  &.MuiTypography-root {
    font-family: Overlock;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #58595B;
  }
`;

export const LineDivider = styled.img`
  height: 100%;
  margin: 0 auto;
  display: block;
  padding: 15px;
`;

export const WeddingLocation = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #58595B;
    padding: 30px 30px 200px 30px;
  }
`;

export const SecondFlowerBottom = styled.img`
  position: absolute;
  width: 70%;
  bottom: 0;
  left: 0;
`;

export const LocationTitle = styled(Typography)`
  &.MuiTypography-root {
    font-family: "DM Serif Display";
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    color: #5B5B5F;
    margin-top: 15px;
  }
`;

export const WeddingLocationContainer = styled(Box)`
  min-height: 50vh;
  position: relative;
`;

export const MapContainer = styled(Box)`
  width: 95%;
  padding: 10px;
`;

export const SeeMap = styled(Button)`
  &.MuiButton-root {
    position: relative;
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 30px;
    text-align: center;
    display: block;
    background: #E6B772;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    width: 134px;
    height: 45px;
    z-index: 10;
    .MuiButton-label {
      font-family: "Overlock";
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #FFFFFF;
    }
  }
`;

export const VerseContainer = styled(Box)`
  min-height: 100vh;
  position: relative;
`;

export const ThirdFlowerTop = styled.img`
  position: absolute;
  width: 70%;
  top: 0;
  left: 0;
`;

export const VerseText = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Overlock";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.15em;
    color: #58595B;
    padding: 70px;
    position: relative;
    top: 10em;
  }
`;

export const ThirdFlowerBottom = styled.img`
  position: absolute;
  width: 70%;
  bottom: 0;
  right: 0;
`;

export const Watermark = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Overlock";
    font-style: normal;
    font-weight: bold;
    font-size: 9px;
    line-height: 11px;
    color: #000000;
    position: absolute;
    bottom: 15px;
    left: 25px;

  }
`;
