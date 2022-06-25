import styled from 'styled-components';
import { Box, Typography, Button } from '@material-ui/core';
import { breakpoints } from '@components/media';
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
  width: 100vw;
  height: 100vh;
  position: relative;
  text-align: center;
`;

export const FlowerTopLeft = styled.img`
  position: absolute;
  left: 0;
  @media (min-width: ${breakpoints.mobileMin}) {
    width: 70%;
  }
  @media (min-width: ${breakpoints.tabletSmall}) {
    width: 50%;
  }
  @media (min-width: ${breakpoints.tabletMin}) {
    width: 40%;
  }
  @media (min-width: ${breakpoints.desktopMin}) {
    width: 30%;
  }
`;

export const FlowerMiddle = styled.img`
    width: 90%;
    margin: 0 auto;
    display: block;
    position: absolute;
    top: 10em;
    left: 5%;
    @media (max-width: ${breakpoints.mobileSmall}) {
      top: 9em;
    }
    @media (min-width: ${breakpoints.mobileLarge}) {
      width: 85%;
      left: 8%;
    }
    @media (min-width: 425px) {
      width: 75%;
      top: 11em;
      left: 13%;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      width: 60%;
      top: 14em;
      left: 21%;
    }
    @media (min-width: ${breakpoints.tabletMin}) {
      width: 45%;
      top: 11em;
      left: 28%;
    }
    @media (min-width: ${breakpoints.desktopMin}) {
      width: 35%;
      top: 8em;
      left: 30%;
    }
    @media (min-width: ${breakpoints.desktopMax}) {
      top: 15em;
    }
`;

export const WrapperInvite = styled.div`
  overflow-x: unset;
  position: relative;
  top: 13em;
  @media (min-width: 360px) {
    top: 13em;
  }
  @media (min-width: 768px) {
    top: 21em;
  }
  @media (min-width: ${breakpoints.tabletMin}) {
    top: 18em;
  }
  @media (min-width: ${breakpoints.desktopMin}) {
    top: 16em;
    left: -2%;
  }
  @media (min-width: ${breakpoints.desktopMax}) {
    top: 22em;
  }
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
    @media (min-width: ${breakpoints.tabletSmall}) {
      font-size: 15px;
    }
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
    @media (max-width: ${breakpoints.mobileSmall}) {
      font-size: 8px;
      top: -2em;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      font-size: 14px;
      top: -1em;
    }
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
    @media (min-width: ${breakpoints.mobileSmall}) {
      font-size: 60px;
      top: -6px;
    }
    @media (min-width: ${breakpoints.mobileModerate}) {
      top: 35px;
    }
    @media (min-width: ${breakpoints.mobileMedium}) {
      top: 25px;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      font-size: 90px;
      top: 26px;
    }
  }
`;

export const Ampersand = styled.img`
    width: 30%;
    position: relative;
    margin: 0 auto;
    display: grid;
    top: 30px;
    @media (min-width: ${breakpoints.mobileSmall}) {
      width: 35%;
      top: -10px;
    }
    @media (min-width: ${breakpoints.mobileModerate}) {
      top: 30px;
    }
    @media (min-width: ${breakpoints.mobileMedium}) {
      top: 20px;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      width: 35%;
      top: 40px;
    }
    @media (min-width: ${breakpoints.tabletMin}) {
      width: 20%;
    }
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
    @media (min-width: ${breakpoints.mobileSmall}) {
      font-size: 60px;
      top: -5px;
    }
    @media (min-width: ${breakpoints.mobileModerate}) {
      top: 35px;
    }
    @media (min-width: ${breakpoints.mobileMedium}) {
      top: 20px;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      font-size: 90px;
      top: 65px;
    }
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
    @media (min-width: ${breakpoints.mobileSmall}) {
      top: -5px;
    }
    @media (min-width: ${breakpoints.mobileModerate}) {
      top: 40px;
    }
    @media (min-width: ${breakpoints.mobileMedium}) {
      top: 25px;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      font-size: 15px;
      top: 93px;
    }
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
  @media (min-width: ${breakpoints.tabletSmall}) {
    width: 60%;
  }
  @media (min-width: ${breakpoints.tabletMin}) {
    width: 40%;
  }
  @media (min-width: ${breakpoints.desktopMin}) {
    width: 30%;
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
    padding: 100px 30px 30px;
    position: relative;
    @media (min-width: ${breakpoints.mobileSmall}) {
      font-size: 12px;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      padding: 100px 60px 30px 60px;
    }
    @media (min-width: ${breakpoints.tabletMin}) {
      font-size: 14px;
      padding: 100px 100px 40px 100px;
    }
    @media (min-width: ${breakpoints.desktopMin}) {
      font-size: 16px;
      padding: 100px 200px 30px;
    }
  }
`;

export const SecondFlowerTop = styled.img`
  position: absolute;
  width: 60%;
  top: 0;
  right: 0;
  @media (min-width: ${breakpoints.tabletMin}) {
    width: 40%;
  }
  @media (min-width: ${breakpoints.desktopMin}) {
    width: 35%;
  }

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
    @media (min-width: ${breakpoints.mobileSmall}) {
      font-size: 40px;
    }
    @media (min-width: ${breakpoints.tabletMin}) {
      font-size: 55px;
    }
    @media (min-width: ${breakpoints.desktopMin}) {
      font-size: 60px;
      line-height: 72px;
    }
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
    @media (min-width: ${breakpoints.mobileSmall}) {
      font-size: 12px;
    }
    @media (min-width: ${breakpoints.tabletMin}) {
      font-size: 14px;
    }
    @media (min-width: ${breakpoints.desktopMin}) {
      font-size: 16px;
      line-height: 18px;
    }
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

export const LineDividers = styled.img`
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
  @media (min-width: ${breakpoints.tabletMin}) {
    width: 50%;
  }
  @media (min-width: ${breakpoints.desktopMin}) {
    width: 30%;
  }
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
  padding: 8px;
  margin: 0 auto;
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
    width: 230px;
    height: 45px;
    z-index: 10;
    text-transform: capitalize;
    @media (min-width: ${breakpoints.mobileSmall}) {
      width: 150px;
    }
    .MuiButton-label {
      font-family: "Overlock";
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #FFFFFF;
      @media (min-width: ${breakpoints.mobileSmall}) {
        font-size: 12px;
      }
    }
  }
`;

export const VerseContainer = styled(Box)`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: white;
`;

export const ThirdFlowerTop = styled.img`
  position: absolute;
  width: 70%;
  top: 0;
  left: 0;
  @media (min-width: ${breakpoints.tabletSmall}) {
    width: 60%;
  }
  @media (min-width: ${breakpoints.tabletMin}) {
    width: 40%;
  }
  @media (min-width: ${breakpoints.desktopMin}) {
    width: 30%;
  }
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
    @media (min-width: ${breakpoints.mobileSmall}) {
      font-size: 10px;
      padding: 100px 40px 0px 40px;
    }
    @media (min-width: ${breakpoints.mobileMedium}) {
      font-size: 12px;
      padding: 55px 45px;
      line-height: 18px;
      top: 17em;
    }
    @media (min-width: ${breakpoints.mobileLarge}) {
      font-size: 14px;
      padding: 85px 65px;
      top: 12em;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      font-size: 16px;
      padding: 9em;
      top: 13em;
      line-height: 2em;
    }
    @media (min-width: ${breakpoints.desktopMin}) {
      padding: 4em 18em;
    }
    @media (min-width: ${breakpoints.desktopMax}) {
      top: 23em;
    }
  }
`;

export const ThirdFlowerBottom = styled.img`
  position: absolute;
  width: 70%;
  bottom: 0;
  right: 0;
  @media (min-width: ${breakpoints.mobileSmall}) {
    width: 55%;
  }
  @media (min-width: ${breakpoints.tabletSmall}) {
    width: 60%;
  }
  @media (min-width: ${breakpoints.tabletMin}) {
    width: 32%;
  }
  @media (min-width: ${breakpoints.desktopMin}) {
    width: 30%;
  }
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
    @media (min-width: ${breakpoints.mobileSmall}) {
      left: 20px;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      font-size: 15px;
      bottom: 30px;
      left: 50px;
    }
    a {
      font-family: "Overlock";
      font-style: normal;
      font-weight: bold;
      font-size: 9px;
      line-height: 11px;
      color: #E2B62E;
      text-decoration: none;
      @media (min-width: ${breakpoints.tabletSmall}) {
        font-size: 15px;
      }
    }
  }
`;

export const AudioButton = styled.button`
  border-radius: 50%;
  padding: 10px 12px;;
  outline: none;
  background: white;
  border: none;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 30px 15px;;
  z-index: 100;
`;

export const AudioIcon = styled.img`
    width: 18px;
    height: 18px;
`;
