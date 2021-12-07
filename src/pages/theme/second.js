import React, { useEffect, useState } from "react";

// import { Box, Link }from '@material-ui/core';
// import * as Style from "./secondStyle";
import OrnamentFlowerTop from "@assets/ornaments/themes/secondTheme/first-flower-top-left.svg";
import OrnamentFlowerBottom from "@assets/ornaments/themes/secondTheme/first-flower-bottom-right.svg";
import MiddleFrame from "@assets/ornaments/themes/secondTheme/first-middle-frame.svg";
import OrnamentSecondFlower from "@assets/ornaments/themes/secondTheme/second-flower-top-right.svg";
import OrnamentSecondFlowerBottom from "@assets/ornaments/themes/secondTheme/second-flower-bottom-left.svg";
import OrnamentThirdFlowerTop from "@assets/ornaments/themes/secondTheme/third-flower-top.svg";
import OrnamentThirdFlowerBottom from "@assets/ornaments/themes/secondTheme/third-flower-bottom.svg";
import AmpersandDivider from "@assets/ornaments/themes/secondTheme/ampersand.svg";
import LineDivider from "@assets/ornaments/themes/secondTheme/line.svg";
import Map from "@components/map";
import { configThemesSecond } from "@mocking/template";

import styled from 'styled-components';
import { Box, Typography, Button,Link } from '@material-ui/core';
import { breakpoints } from '@components/media';
// Fonts
import "@fontsource/oxygen";
import "@fontsource/great-vibes";
import "@fontsource/open-sans";
import "@fontsource/dm-serif-display";
import "@fontsource/overlock";


const CountDown = styled(Typography)`
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

const Header = styled(Box)`
  min-height: 100vh;
`;

const FlowerTopLeft = styled.img`
  @media (min-width: ${breakpoints.mobileMin}) {
    width: 70%;
    position: absolute;
  }
  @media (min-width: ${breakpoints.tabletSmall}) {
    width: 50%;
  }
`;

const FlowerMiddle = styled.img`
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
      position: absolute;
      top: 11em;
      left: 13%;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      width: 60%;
      position: absolute;
      top: 14em;
      left: 21%;
    }
`;

const WrapperInvite = styled.div`
  @media (min-width: 768px) {
    top: 21em;
    position: relative;
  }

`;

const InvitedPerson = styled(Typography)`
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

const WeddingTitle = styled(Typography)`
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

const Grooms = styled(Typography)`
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
    @media (min-width: ${breakpoints.mobileMedium}) {
      top: 25px;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      font-size: 90px;
      top: 26px;
    }
  }
`;

const Ampersand = styled.img`
    width: 30%;
    position: relative;
    margin: 0 auto;
    display: grid;
    top: 30px;
    @media (min-width: ${breakpoints.mobileSmall}) {
      width: 35%;
      top: -10px;
    }
    @media (min-width: ${breakpoints.mobileMedium}) {
      top: 20px;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      width: 35%;
      top: 40px;
    }
`;

const Bride = styled(Typography)`
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
    @media (min-width: ${breakpoints.mobileMedium}) {
      top: 20px;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      font-size: 90px;
      top: 65px;
    }
  }
`;

const WeddingDate = styled(Typography)`
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
    @media (min-width: ${breakpoints.mobileMedium}) {
      top: 25px;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      font-size: 15px;
      top: 93px;
    }
  }
`;

const FlowerBottomRight = styled.img`
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
`;

const WeddingInfoContainer = styled(Box)`
  min-height: 100vh;
  position: relative;
`;

const Greetings = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #58595B;
    padding: 100px 30px 30px 30px;
    @media (min-width: ${breakpoints.mobileSmall}) {
      font-size: 12px;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      padding: 100px 60px 30px 60px;
    }
  }
`;

const SecondFlowerTop = styled.img`
  position: absolute;
  width: 60%;
  top: 0;
  right: 0;
`;

const GroomFull = styled(Typography)`
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
  }
`;

const Parents = styled(Typography)`
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
  }
`
const AmpersandBride = styled(Typography)`
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

const WeddingDateSecond = styled(Typography)`
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

const WeddingCeremony = styled(Typography)`
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

const WeddingTime = styled(Typography)`
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

const LineDividers = styled.img`
  height: 100%;
  margin: 0 auto;
  display: block;
  padding: 15px;
`;

const WeddingLocation = styled(Typography)`
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

const SecondFlowerBottom = styled.img`
  position: absolute;
  width: 70%;
  bottom: 0;
  left: 0;
`;

const LocationTitle = styled(Typography)`
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

const WeddingLocationContainer = styled(Box)`
  min-height: 50vh;
  position: relative;
`;

const MapContainer = styled(Box)`
  width: 95%;
  padding: 8px;
  margin: 0 auto;
`;

const SeeMap = styled(Button)`
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

const VerseContainer = styled(Box)`
  min-height: 100vh;
  position: relative;
`;

const ThirdFlowerTop = styled.img`
  position: absolute;
  width: 70%;
  top: 0;
  left: 0;
  @media (min-width: ${breakpoints.tabletSmall}) {
    width: 60%;
  }
`;

const VerseText = styled(Typography)`
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
      padding: 70px 40px 0px 40px;
    }
    @media (min-width: ${breakpoints.mobileMedium}) {
      font-size: 14px;
      padding: 55px 45px;
      line-height: 20px;
    }
    @media (min-width: ${breakpoints.mobileLarge}) {
      font-size: 14px;
      padding: 85px 65px;
    }
    @media (min-width: ${breakpoints.tabletSmall}) {
      font-size: 16px;
      padding: 9em;
      top: 13em;
      line-height: 2em;
    }
  }
`;

const ThirdFlowerBottom = styled.img`
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
`;

const Watermark = styled(Typography)`
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
  }
`;

const SecondTheme = () =>  {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    // const difference = +new Date(`${year}-10-1`) - +new Date();

    let difference = +new Date(`12/11/${year}`) - +new Date(); //month - day - current year
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval.toString()}>
        {timeLeft[interval]} {interval}{"  "}
      </span>
    );
  });

  const showMap = () => {
    window.open("https://maps.google.com?q="+configThemesSecond.location.latitude+","+configThemesSecond.location.longitude);
  };

  return (
    <Box>
      <Header>
        <FlowerTopLeft src={OrnamentFlowerTop} alt="ornament-1"/>
        <WrapperInvite>
          <InvitedPerson>YOU’RE INVITED TO</InvitedPerson>
          <WeddingTitle>THE WEDDING OF</WeddingTitle>
          <Grooms>{configThemesSecond.groom.nickName}</Grooms>
          <Ampersand src={AmpersandDivider} alt="ampersand"/>
          <Bride>{configThemesSecond.bride.nickName}</Bride>
          <WeddingDate>{configThemesSecond.placeHolderTag.timeStarted}</WeddingDate>
        </WrapperInvite>
        <FlowerMiddle src={MiddleFrame} alt="frame-middle"/>
        <FlowerBottomRight src={OrnamentFlowerBottom} alt="ornament-2"/>
      </Header>

      <WeddingInfoContainer>
        <SecondFlowerTop src={OrnamentSecondFlower} alt="ornament-3"/>
        <Greetings>
          Bismillaahirrahmaanirrahiim <br/><br/>
          Assalaamu&apos;alaikum Warahmatullaahi Wabarakaatuh <br/><br/>
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. <br/><br/>
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan do&apos;a restu pada pernikahan kami:
        </Greetings>
        <GroomFull>{configThemesSecond.groom.fullName}</GroomFull>
        <Parents>{configThemesSecond.groom.parents.tagline}</Parents>
        <AmpersandBride>&</AmpersandBride>
        <GroomFull>{configThemesSecond.bride.fullName}</GroomFull>
        <Parents>{configThemesSecond.bride.parents.tagline}</Parents>
        <WeddingDateSecond>{configThemesSecond.contractMarriage.dateTime}</WeddingDateSecond>
        <CountDown> {timerComponents.length ? timerComponents : <span>Happy Wedding!</span>}</CountDown>
        <WeddingCeremony>Akad</WeddingCeremony>
        <WeddingTime>Pukul 09:00 - 10:00 WIB</WeddingTime>
        <LineDividers src={LineDivider} alt="divider"/>
        <WeddingCeremony>Resepsi</WeddingCeremony>
        <WeddingTime>Pukul 10:10 - 13:00 WIB</WeddingTime>
        <WeddingLocation>
          di {configThemesSecond.location.placeName}<br/><br/>
          {configThemesSecond.location.detailName}
        </WeddingLocation>
        <SecondFlowerBottom src={OrnamentSecondFlowerBottom} alt="ornament-3"/>
      </WeddingInfoContainer>

      <WeddingLocationContainer>
        <LocationTitle>Lokasi</LocationTitle>
        <MapContainer>
          <Map/>
        </MapContainer>
        <SeeMap onClick={showMap}>Lihat di Google Maps</SeeMap>
      </WeddingLocationContainer>

      <VerseContainer>
        <ThirdFlowerTop src={OrnamentThirdFlowerTop} alt="ornament-4"/>
        <VerseText>“Bahwasanya Allah menciptakan kalian dari jenis kalian berupa perempuan sebagai istri, yang tinggal dengan kalian karena pernikahan, yang kalian lembut kepada istri-istri kalian dan condong kepadanya. Allah jadikan di antara kalian kecintaan, simpati dan kasih sayang, sungguh itu semua adalah tanda yang jelas akan ke-Maha Esaaan Allah dan kasih sayang-Nya kepada makhluk-Nya bagi kaum yang menjalankan akal mereka dan memikirkannya.” <br/><br/>(Q.S. Ar-Rum: 21)</VerseText>
        <ThirdFlowerBottom src={OrnamentThirdFlowerBottom} alt="ornament-5"/>
        <Link href="#">
          <Watermark>Built with <span style={{color:'red'}}>❤</span> by sungnikah.com</Watermark>
        </Link>
      </VerseContainer>
    </Box>
  );
}

export default SecondTheme;
