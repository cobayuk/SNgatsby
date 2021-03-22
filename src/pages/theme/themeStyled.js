/*
| ===========================================================
|    This file contains all styles Themes.
| ===========================================================
|
| Author  : Sungnikah Corporation's.
| Date    : 31 Jan 2021
| Develop : Dimas Prasetyo, Arie Aditya Nugraha (Frontend Dev).
*/

import styled from 'styled-components';
import { COLORS } from '../../styles/constants';
import { Box, Typography, Button } from '@material-ui/core';
// Fonts
import "@fontsource/overlock";
import "@fontsource/oxygen";
import "@fontsource/satisfy";
import "@fontsource/qwigley";
import "@fontsource/dm-serif-display";

export const OrnamentLiquid = styled.img`
  @media(min-width: 320px) {
    position: absolute;
    top: -4em;
    width: 50%;
  }
  @media(min-width: 768px) {
    top: -10em;
  }
  @media(min-width: 1366px) {
    top: -15em;
  }
`;

export const OrnamentLiquidOutline = styled.img`
  @media(min-width: 320px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 36%;
  }
  @media(min-width: 375px) {
    width: 40%;
  }
  @media(min-width: 425px) {
    width: 45%;
  }
  @media (min-width: 768px){
    width: 37%;
  }
  @media(min-width: 1024px) {
    width: 37%;
  }
`;

export const IntroWrapper = styled(Box)`
  padding-top: 6em;
`;

export const Introduction = styled(Box)`
  text-align: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #FCFAF7;
`;

export const Invite = styled(Typography)`
  font-family: "Overclock";
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #C2A38E;
  margin-bottom: 14px;
`;

export const Title = styled(Typography)`
  font-family: "Oxygen";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.43em;
  color: #C2A38E;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const PersonName = styled(Typography)`
  font-family: "Satisfy";
  font-style: normal;
  font-weight: normal;
  font-size: 100px;
  line-height: 130px;
  color: #C2A38E;
`;

export const Ampersand = styled(Typography)`
  font-family: "Satisfy";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 0;
  color: #C2A38E;
  margin: 5px 0px;
`;

export const CountdownContainer = styled(Box)`
  position: relative;
  padding-top: 30px;
`;

export const WeddingCountdown = styled(Typography)`
  font-family: "Overlock";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #C2A38E;
  margin: 8px 0px;
`;

export const InvitationContainer = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #F0F0EF;
`;

export const FlowerContainer = styled(Box)`
  display: inline-flex;
`;

export const FlowerLeft = styled.img`
  width: 100%;
  position: relative;
  left: -1em;
  max-height: 85px;
  overflow: hidden;
  object-fit: cover;
  object-position: 0 100%;
`;

export const FlowerMiddleOne = styled.img`
  transform: rotateY(180deg);
  width: 100%;
  position: relative;
  right: 6em;
  max-height: 85px;
  overflow: hidden;
  object-fit: cover;
  object-position: 0 100%;
`;

export const Greeting = styled(Typography)`
  font-family: "Overlock";
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #58595B;
  padding: 20px 40px;
`;

export const Groom = styled(Typography)`
  font-family: Satisfy;
  font-size: 36px;
  line-height: 52px;
  text-align: center;
  color: #C2A38E;
`;

export const Parents = styled(Typography)`
  font-family: "Overlock";
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #58595B;
  padding: 0px 40px;
`;

export const AmpersandGroom = styled(Typography)`
  font-family: "Qwigley";
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  color: #C2A38E;
`;

export const WeddingDate = styled(Typography)`
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #C2A38E;
`;

export const WeedingTime = styled(Typography)`
  font-family: "Overlock";
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #58595B;
  margin-top: -30px;
`;

export const LineDivider = styled.img`
  margin: 0 auto;
  display: block;
  padding: 10px 0px;
`;

export const OrnamentMiddleContainer = styled(Box)`
  position: relative;
  top: -7em;
  z-index: 1;
`;

export const OrnamentCurved = styled.img`
  position: absolute;
  right: 0;
`;

export const OrnamentAbstract = styled.img`
  position: relative;
  left: 0;
  top: -2em;
`;

export const SeeMap = styled(Button)`
  &.MuiButton-root {
    position: relative;
    margin: 0 auto;
    text-align: center;
    display: block;
    background: #E77F78;
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

export const QuranVerseContainer = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #FCFAF7;
`;

export const QuranVerseText = styled(Typography)`
  font-family: Overlock;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.15em;
  color: #58595B;
  padding: 10px 65px;
`;

export const OrnamentFlowerBottom = styled.img`
  position: absolute;
  right: 0;
  @media(min-width: 425px) {
    width: 30%;
  }
`;

export const OrnamentAbstractBottom = styled.img`
  position: relative;
  left: 0;
  width: 27%;
  top: 4px;
  @media(min-width: 425px) {
    width: 40%;
  }
`;
