import React, { useEffect, useState } from "react";
// import { Box, Link }from '@material-ui/core';
import Map from "@components/map";
// import * as Style from "./themeStyled";
import Liquid from "@assets/ornaments/themes/liquid.svg";
import LiquidOutline from "@assets/ornaments/themes/liquid-outline-mobile.svg";
import Flower from "@assets/ornaments/themes/flower.svg";
import Line from "@assets/ornaments/themes/line.svg";
import Curved from "@assets/ornaments/themes/curved.svg";
import Abstract from "@assets/ornaments/themes/abstract.svg";
import AbstractBottom from "@assets/ornaments/themes/abstract-bottom.svg";
import FlowerBottom from "@assets/ornaments/themes/flower-bottom.svg";

import styled from 'styled-components';
import { Box, Typography, Button, Link } from '@material-ui/core';
// Fonts
import "@fontsource/overlock";
import "@fontsource/oxygen";
import "@fontsource/satisfy";
import "@fontsource/qwigley";
import "@fontsource/dm-serif-display";

const OrnamentLiquid = styled.img`
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

const OrnamentLiquidOutline = styled.img`
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

const IntroWrapper = styled(Box)`
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

const Introduction = styled(Box)`
  text-align: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #FCFAF7;
`;

const Invite = styled(Typography)`
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

const Title = styled(Typography)`
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

const PersonName = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Satisfy";
    font-style: normal;
    font-weight: normal;
    font-size: 100px;
    line-height: 130px;
    color: #C2A38E;
    @media (min-width: 768px) {
      font-size: 135px;
      line-height: 150px;
    }
    @media (min-width: 1024px) {
      font-size: 135px;
      line-height: 150px;
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

const Ampersand = styled(Typography)`
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

const CountdownContainer = styled(Box)`
  position: relative;
  padding-top: 30px;
  @media (min-width: 2560px) {
    padding-top: 70px;
    }
`;

const WeddingCountdown = styled(Typography)`
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

const InvitationContainer = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #F0F0EF;
`;

const InvitationWrapper = styled(Box)`
  @media (min-width: 1920px) {
    padding-bottom: 4em;
  }
`;

const FlowerContainer = styled(Box)`
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

const FlowerLeft = styled.img`
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

const FlowerMiddleOne = styled.img`
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

const Greeting = styled(Typography)`
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

const Groom = styled(Typography)`
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

const Parents = styled(Typography)`
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

const AmpersandGroom = styled(Typography)`
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

const WeddingDate = styled(Typography)`
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

const WeedingTime = styled(Typography)`
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

const LineDivider = styled.img`
  margin: 0 auto;
  display: block;
  padding: 10px 0px;
`;

const OrnamentMiddleContainer = styled(Box)`
  position: relative;
  top: -7em;
  z-index: 1;
  @media (min-width: 320px) {
    margin-bottom: -6em;
  }
`;

const OrnamentCurved = styled.img`
  position: absolute;
  right: 0;
  @media (min-width: 1920px) {
    width: 30%;
    top: -33em;
  }
`;

const OrnamentAbstract = styled.img`
  position: relative;
  left: 0;
  top: -2em;
  @media (min-width: 1920px) {
    position: absolute;
    top: -33em;
    width: 6%;
  }
`;

const SeeMap = styled(Button)`
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

const QuranVerseContainer = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #FCFAF7;
`;

const QuranVerseText = styled(Typography)`
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
    @media(min-width: 320px) {
      top: 6em;
      font-size: 12px;
      line-height: 17px;
    }
    @media(min-width: 320px) {
      top: 11em;
    }
    @media(min-width: 375px) {
      top: 13em;
    }
    @media(min-width: 414px) {
      top: 16em;
    }
    @media(min-width: 425px) {
      top: 11em;
    }
    @media(min-width: 768px) {
      top: 15em;
      font-size: 20px;
      line-height: 25px;
      padding: 10px 120px;
    }
    @media(min-width: 1024px) {
      top: 10em;
      font-size: 20px;
      line-height: 30px;
      padding: 10px 120px;
    }
    @media (min-width: 1920px) {
      top: 10em;
      font-size: 30px;
      line-height: 45px;
      padding: 10px 250px;
    }
  }
`;

const OrnamentFlowerBottom = styled.img`
  position: absolute;
  right: 0px;
  @media(min-width: 320px) {
    bottom: -13em;
  }
  @media(min-width: 360px) {
    bottom: -21.7em;
  }
  @media(min-width: 375px) {
    bottom: -23.5em;
  }
  @media(min-width: 425px) {
    width: 30%;
    bottom: -26em;
  }
  @media(min-width: 768px) {
    width: 20%;
    bottom: -33.5em;
  }
  @media (min-width: 414px) {
    bottom: -30em;
    width: 26%;
  }
  @media (min-width: 768px) {
    bottom: -44em;
  }
  @media (min-width: 1024px) {
    bottom: -30em;
  }
  @media (min-width: 1280px) {
    bottom: -30.5em;
    width: 15%;
  }
  @media (min-width: 1366px) {
    bottom: -33.5em;
    width: 15%;
  }
  @media (min-width: 1920px) {
    bottom: -43.5em;
  }
`;

const OrnamentAbstractBottom = styled.img`
  position: absolute;
  width: 27%;
  @media(min-width: 320px) {
    bottom: -13em;
  }
  @media(min-width: 360px) {
    bottom: -21.7em;
  }
  @media(min-width: 375px) {
    bottom: -23.5em;
  }
  @media(min-width: 414px) {
    width: 35%;
    bottom: -30em;
  }
  @media(min-width: 425px) {
    width: 40%;
    bottom: -26em;
  }
  @media (min-width: 768px) {
    width: 35%;
    bottom: -44em;
  }
  @media (min-width: 1024px) {
    bottom: -30em;
  }
  @media (min-width: 1280px) {
    bottom: -30.5em
  }
  @media (min-width: 1366px) {
    bottom: -33.5em;
    width: 20%;
  }
  @media (min-width: 1920px) {
    bottom: -43.5em;
  }
`;

const OrnamentBottomContainer = styled(Box)`
  position: relative;
  bottom: 0;
  width: 100%;
`;

const WatermarkSungnikah = styled(Typography)`
  &.MuiTypography-root {
    font-family: "Overlock";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    position: absolute;
    bottom: -24em;
    left: 40%;
    @media (min-width: 320px) {
      font-size: 10px;
      bottom: -18em;
      left: 34%;
    }
    @media (min-width: 360px) {
      bottom: -34em;
    }
    @media (min-width: 375px) {
      bottom: -36em;
    }
    @media (min-width: 414px) {
      bottom: -47em;
      left: 36%;
    }
    @media (min-width: 768px) {
      bottom: -38em;
      left: 38%;
      font-size: 18px;
    }
    @media (min-width: 1024px) {
      bottom: -24em;
      left: 40%;
      font-size: 18px;
    }
    @media (min-width: 1280px) {
      bottom: -26em;
      left: 45%;
    }
    @media (min-width: 1366px) {
      bottom: -28em;
      left: 45%;
    }
    @media (min-width: 1920px) {
      bottom: -37em;
    }
    color: black;
    &span {
      color: red;
    }
  }

`;


const FirstTheme = () =>  {

  const calculateTimeLeft = () => {
    let countDownDate = new Date("Jan 31, 2022 15:00:00").getTime();
    let now = new Date().getTime();
    
    let difference = countDownDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
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
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <Box>
      <Introduction>
        <OrnamentLiquid
          src={Liquid}
          alt="ornament-1"
          // data-sal="fade"
          // data-sal-duration="2000"
          // data-sal-delay="200"
          // data-sal-easing="ease"
        />
        <OrnamentLiquidOutline
          src={LiquidOutline}
          alt="ornament-2"
          // data-sal="fade"
          // data-sal-duration="2000"
          // data-sal-delay="300"
          // data-sal-easing="ease"
        />
        <IntroWrapper>
          <Invite
            // data-sal="slide-up"
            // data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
            // data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
            // data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
          >
            You&apos;re Invited to
          </Invite>
          <Title
            // data-sal="slide-down"
            // data-sal-duration="2000"
            // data-sal-delay="400"
            // data-sal-easing="ease"
          >
            The Wedding Of
          </Title>
          <Box>
            <PersonName
              // data-sal="slide-left"
              // data-sal-duration="2000"
              // data-sal-delay="500"
              // data-sal-easing="ease"
            >
              Andy
            </PersonName>
            <Ampersand
              // data-sal="slide-down"
              // data-sal-duration="2000"
              // data-sal-delay="600"
              // data-sal-easing="ease"
            >
              and
            </Ampersand>
            <PersonName
              // data-sal="slide-right"
              // data-sal-duration="2000"
              // data-sal-delay="700"
              // data-sal-easing="ease"
            >
              Syifa
            </PersonName>
          </Box>
          <CountdownContainer>
            <WeddingCountdown
              // data-sal="slide-up"
              // data-sal-duration="2000"
              // data-sal-delay="1000"
              // data-sal-easing="ease"
            >
              {timerComponents.length ? timerComponents : <span>Time&apos;s up!</span>}
            </WeddingCountdown>
          </CountdownContainer>
        </IntroWrapper>
      </Introduction>

      <InvitationContainer>
        <FlowerContainer>
          <FlowerLeft src={Flower} alt="flower"/>
          <FlowerMiddleOne src={Flower} alt="flower"/>
        </FlowerContainer>
        <InvitationWrapper>
          <Greeting>
            Bismillaahirrahmaanirrahiim<br/><br/>
            Assalaamu&apos;alaikum Warahmatullaahi Wabarakaatuh
            <br/><br/>
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
            <br/><br/>
            Dengan mengharap ridho dan rahmat Allah Subhanahu wa Ta’ala untuk melaksanakan syari&apos;at agama-Nya dan mengikuti sunnah Rasul-Nya dalam membentuk rumah tangga yang sakinah, mawaddah, warahmah.
            <br/><br/>
            Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan do&apos;a restu pada pernikahan kami:
          </Greeting>
          <Groom>Andy Winarko S.Pd</Groom>
          <Parents>Putra pertama dari Bpk. H. Karim Muhadin dan Ibu Hj. Jey Sabilla</Parents>
          <AmpersandGroom>&</AmpersandGroom>
          <Groom>Syifa Putri Lubis</Groom>
          <Parents>Putri pertama dari Bpk. Jojo Amin dan Ibu Sari Asih</Parents>
          <Greeting>Yang Insya Allah akan dilaksanakan pada:</Greeting>
          <WeddingDate>
            Sabtu, 22 Februari 2021<br/><br/>
            Akad Nikah
          </WeddingDate>
          <Parents>Pukul 09:00 - 10:00 WIB</Parents>
          <LineDivider src={Line} alt="line"/>
          <WeddingDate>Resepsi<br/><br/></WeddingDate>
          <WeedingTime>Pukul 10:10 - 13:00 WIB</WeedingTime>
          <Greeting>di POKEL Garden Resto<br/><br/>Jalan Kelapa Dua no.88, Katulisan, Kecamatan Serang Kota Serang</Greeting>
          <SeeMap>Lihat Peta</SeeMap>
        </InvitationWrapper>
        <OrnamentMiddleContainer>
          <OrnamentAbstract src={Abstract} alt="ornament-1"/>
          <OrnamentCurved src={Curved} alt="ornament-2"/>
        </OrnamentMiddleContainer>

        <Map/>
      </InvitationContainer>

      <QuranVerseContainer>
        <QuranVerseText
          data-sal="slide-up"
          data-sal-duration="2000"
          data-sal-delay="500"
          data-sal-easing="ease"
        >
          “Bahwasanya Allah menciptakan kalian dari jenis kalian berupa perempuan sebagai istri, yang tinggal dengan kalian karena pernikahan, yang kalian lembut kepada istri-istri kalian dan condong kepadanya. Allah jadikan di antara kalian kecintaan, simpati dan kasih sayang, sungguh itu semua adalah tanda yang jelas akan ke-Maha Esaaan Allah dan kasih sayang-Nya kepada makhluk-Nya bagi kaum yang menjalankan akal mereka dan memikirkannya.”<br/><br/>(Q.S. Ar-Rum: 21)
        </QuranVerseText>

        <OrnamentBottomContainer>
          <OrnamentAbstractBottom src={AbstractBottom} alt="ornament-3"/>
          <OrnamentFlowerBottom src={FlowerBottom} alt="ornament-4"/>
          <Link href="#">
            <WatermarkSungnikah> Built with <span style={{color:'red'}}>❤</span> by sungnikah.com</WatermarkSungnikah>
          </Link>
        </OrnamentBottomContainer>

      </QuranVerseContainer>
    </Box>

  );

}

export default FirstTheme
