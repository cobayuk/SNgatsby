import styled from 'styled-components';
import { Box, Typography, Button } from '@material-ui/core';
import { Link } from 'gatsby';
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
  @media(min-width: 320px) {
    padding-top: 6em;
  }
  @media(min-width: 360px) {
    padding-top: 7em;
  }
  @media(min-width: 375px) {
    padding-top: 8em;
  }
  @media(min-width: 414px) {
    padding-top: 10em;
  }
  @media(min-width: 768px) {
    padding-top: 14em;
  }
  @media(min-width: 1024px) {
    padding-top: 9em;
  }
  @media(min-width: 1280px) {
    padding-top: 7em;
  }
  @media(min-width: 1920px) {
    padding-top: 11em;
  }
  @media (min-width: 2560px) {
    padding-top: 18em;
  }
`;

export const Introduction = styled(Box)`
  text-align: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #FCFAF7;
`;

export const Invite = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Overclock";
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #C2A38E;
    margin-bottom: 14px;
    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 25px;
    }
    @media (min-width: 1024px) {
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 25px;
    }
    @media (min-width: 1920px) {
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 40px;
    }
    @media (min-width: 2560px) {
      font-size: 40px;
      line-height: 45px;
    }
  }
`;

export const Title = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.43em;
    color: #C2A38E;
    text-transform: uppercase;
    margin-bottom: 16px;
    @media (min-width: 768px) {
      font-size: 25px;
      line-height: 30px;
      margin-bottom: 20px;
    }
    @media (min-width: 1024px) {
      font-size: 25px;
      line-height: 30px;
      margin-bottom: 20px;
    }
    @media (min-width: 1920px) {
      font-size: 35px;
      line-height: 50px;
      margin-bottom: 30px;
    }
    @media (min-width: 2560px) {
      font-size: 45px;
      line-height: 55px;
      margin-bottom: 35px;
    }
  }
`;

export const PersonName = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Satisfy";
    font-style: normal;
    font-weight: normal;
    font-size: 100px;
    line-height: 130px;
    color: #C2A38E;
    @media (max-width: 767px) {
      font-size: 75px;
      line-height: 100px;
    }
    @media (min-width: 768px) {
      font-size: 135px;
      line-height: 150px;
    }
    @media (min-width: 1024px) {
      font-size: 100px;
      line-height: 120px;
    }
    @media (min-width: 1920px) {
      font-size: 200px;
      line-height: 250px;
    }
    @media (min-width: 2560px) {
      font-size: 300px;
      line-height: 350px;
    }
  }
`;

export const Ampersand = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Satisfy";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 0;
    color: #C2A38E;
    margin: 5px 0px;
    @media (min-width: 768px) {
      font-size: 30px;
      margin: 20px 0px;
    }
    @media (min-width: 1024px) {
      font-size: 30px;
      margin: 20px 0px;
    }
    @media (min-width: 1920px) {
      font-size: 50px;
    }
  }
`;

export const CountdownContainer = styled(Box)`
  position: relative;
  padding-top: 30px;
  @media (min-width: 2560px) {
    padding-top: 70px;
    }
`;

export const WeddingCountdown = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Overlock";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #C2A38E;
    margin: 8px 0px;
    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 25px;
      margin: 30px 0px;
    }
    @media (min-width: 1024px) {
      font-size: 20px;
      line-height: 25px;
      margin: 30px 0px;
    }
    @media (min-width: 1920px) {
      font-size: 30px;
    }
    @media (min-width: 2560px) {
      font-size: 45px;
    }
  }
`;

export const InvitationContainer = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #F0F0EF;
`;

export const InvitationWrapper = styled(Box)`
  @media (min-width: 1920px) {
    padding-bottom: 4em;
  }
`;

export const FlowerContainer = styled(Box)`
  display: inline-flex;
  position: relative;
  overflow: hidden;
  @media(min-width: 320px) {
    width: 100%;
  }
  @media(min-width: 1920px) {
    width: 100%;
  }
`;

export const FlowerLeft = styled.img`
  /* width: 100%; */
  position: absolute;
  left: -1em;
  max-height: 85px;
  overflow: hidden;
  object-fit: cover;
  object-position: 0 100%;
  @media (min-width: 320px) {
    width: 60%;
    left: 9em;
    max-height: 70px;
  }
  @media (min-width: 360px) {
    left: 10em;
  }
  @media (min-width: 375px) {
    left: 10.5em;
  }
  @media (min-width: 414px) {
    left: 12em;
  }
  @media(min-width: 768px) {
    left: 23em;
    max-height: 106px;
  }
  @media(min-width: 1920px) {
    left: 0;
    max-height: 17em;
  }
  @media (min-width: 2560px) {
    left: -7em;
    max-height: 17em;
  }
`;

export const FlowerMiddleOne = styled.img`
  transform: rotateY(180deg);
  /* width: 100%; */
  position: relative;
  right: 6em;
  max-height: 85px;
  overflow: hidden;
  object-fit: cover;
  object-position: 0 100%;
  @media (min-width: 320px) {
    width: 60%;
    right: 1em;
    max-height: 70px;
  }
  @media(min-width: 768px) {
    width: 60%;
    right: 2em;
    max-height: 105px;
  }
  @media(min-width: 1920px) {
    right: 0;
    max-height: 17em;
  }
  @media (min-width: 2560px) {
    right: -7em;
    max-height: 17em;
  }
`;

export const Greeting = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Overlock";
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #58595B;
    padding: 20px 40px;
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 25px;
      padding: 20px 70px;
    }
    @media (min-width: 1024px) {
      font-size: 16px;
      line-height: 25px;
      padding: 20px 80px;
    }
    @media (min-width: 1920px) {
      font-size: 25px;
      line-height: 35px;
      padding: 20px 200px;
    }
  }
`;

export const Groom = styled(Typography)`
  &.MuiTypography-root {
    font-family: Satisfy;
    font-size: 36px;
    line-height: 52px;
    text-align: center;
    color: #C2A38E;
    @media(min-width: 768px) {
      font-size: 45px;
      line-height: 60px;
      margin-bottom: 10px;
    }
    @media(min-width: 1920px) {
      font-size: 80px;
      line-height: 95px;
      margin-bottom: 10px;
    }
  }
`;

export const Parents = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Overlock";
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #58595B;
    padding: 0px 40px;
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 25px;
    }
    @media (min-width: 1920px) {
      font-size: 25px;
      line-height: 35px;
    }
  }
`;

export const AmpersandGroom = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Qwigley";
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 80px;
    text-align: center;
    color: #C2A38E;
  }
`;

export const WeddingDate = styled(Typography)`
  &.MuiTypography-root {
    font-family: "DM Serif Display";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #C2A38E;
    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 40px;
    }
    @media (min-width: 1920px) {
      font-size: 50px;
      line-height: 65px;
    }
  }
`;

export const WeedingTime = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Overlock";
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #58595B;
    margin-top: -30px;
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 25px;
    }
    @media (min-width: 1920px) {
      font-size: 25px;
      line-height: 35px;
    }
  }
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
  @media (min-width: 320px) {
    margin-bottom: -6em;
  }
`;

export const OrnamentCurved = styled.img`
  position: absolute;
  right: 0;
  @media (min-width: 1920px) {
    width: 30%;
    top: -33em;
  }
`;

export const OrnamentAbstract = styled.img`
  position: relative;
  left: 0;
  top: -2em;
  @media (min-width: 1920px) {
    position: absolute;
    top: -33em;
    width: 6%;
  }
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
  width: 100vw;
  height: 100vh;
  background: #FCFAF7;
  display: grid;
`;

export const QuranVerseText = styled(Typography)`
  &.MuiTypography-root {
    font-family: Overlock;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.15em;
    color: #58595B;
    padding: 10px 65px;
    position: relative;
    top: 6em;
    @media (min-width: 320px) {
      font-size: 12px;
      line-height: 17px;
    }
    @media(min-width: 375px) {
      top: 10em;
    }
    @media(min-width: 414px) {
      top: 16em;
    }
    @media(min-width: 425px) {
      top: 11em;
    }
    @media(min-width: 768px) {
      font-size: 16px;
      line-height: 24px;
      padding: 10px 120px;
    }
    @media(min-width: 1024px) {
      top: 15em;
      font-size: 16px;
      line-height: 24px;
    }
    @media (min-width: 1920px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const OrnamentFlowerBottom = styled.img`
  position: absolute;
  right: 0px;
  display: block;
  margin-top: 50px;
  z-index: 1;
  // @media(min-width: 320px) {
  //   bottom: -13em;
  // }
  // @media(min-width: 360px) {
  //   bottom: -21.7em;
  // }
  // @media(min-width: 375px) {
  //    top: 119px;
  // }
  // @media(min-width: 425px) {
  //   width: 30%;
  //   bottom: -26em;
  // }
  // @media(min-width: 768px) {
  //   width: 20%;
  //   bottom: -33.5em;
  // }
  // @media (min-width: 414px) {
  //   bottom: -30em;
  //   width: 26%;
  // }
  // @media (min-width: 768px) {
  //   bottom: -44em;
  // }
  // @media (min-width: 1024px) {
  //   bottom: -30em;
  // }
  // @media (min-width: 1280px) {
  //   bottom: -30.5em;
  //   width: 15%;
  // }
  // @media (min-width: 1366px) {
  //   bottom: -33.5em;
  //   width: 15%;
  // }
  // @media (min-width: 1920px) {
  //   bottom: -43.5em;
  // }
`;

export const OrnamentAbstractBottom = styled.img`
  position: absolute;
  width: 27%;
  left: 0;
  margin-top: 48px;
  // @media(min-width: 320px) {
  //   bottom: -13em;
  // }
  // @media(min-width: 360px) {
  //   bottom: -21.7em;
  // }
  // @media(min-width: 375px) {
  //   top: 92px;
  // }
  // @media(min-width: 414px) {
  //   width: 35%;
  //   bottom: -30em;
  // }
  // @media(min-width: 425px) {
  //   width: 40%;
  //   bottom: -26em;
  // }
  // @media (min-width: 768px) {
  //   width: 35%;
  //   bottom: -44em;
  // }
  // @media (min-width: 1024px) {
  //   bottom: -30em;
  // }
  // @media (min-width: 1280px) {
  //   bottom: -30.5em
  // }
  // @media (min-width: 1366px) {
  //   bottom: -33.5em;
  //   width: 20%;
  // }
  // @media (min-width: 1920px) {
  //   bottom: -43.5em;
  // }
`;

export const OrnamentBottomContainer = styled(Box)`
  position: relative;
  bottom: 0;
  width: 100%;
`;

export const WatermarkContainer = styled.div`
  z-index: 10;
  background-color: light-gray;
`;

export const WatermarkSungnikah = styled(Link)`
    font-family: "Overlock";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    display: block;
    text-align: center;
    text-decoration: none;
    color: black;
    &span {
      color: red;
    }
    @media (min-width: 320px) {
      font-size: 12px;
      margin-top: 11em;
    }
    @media (min-width: 360px) {
      margin-top: 20em;
    }
    @media (min-width: 414px) {

    }
    position: relative;
    margin-top: 16em;
`;
