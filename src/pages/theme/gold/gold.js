import React, { useEffect, useState } from "react";
import { Box }from '@material-ui/core';
import { Link } from "gatsby";
import AOS from 'aos'
import 'aos/dist/aos.css';

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

import Protocol from "./components/Protocol";
import AmplopCashless from "./components/AmplopCashless";

import * as Style from "@styles/gold/goldStyled";

const SecondTheme = () =>  {

  useEffect(() => {
      AOS.init({
          duration: 1200, // values from 0 to 3000, with step 50ms
          once: false, // whether animation should happen only once - while scrolling down
      });
  }, []);

  const calculateTimeLeft = () => {
    let countDownDate = new Date("Dec 31, 2022 09:00:00").getTime();
    let now = new Date().getTime();

    let difference = countDownDate - now;
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
      <Style.Header>
        <Style.FlowerTopLeft src={OrnamentFlowerTop} alt="ornament-1"/>
        <Style.WrapperInvite>
          <Style.InvitedPerson data-aos="fade-up">YOU’RE INVITED TO</Style.InvitedPerson>
          <Style.WeddingTitle data-aos="fade-up">THE WEDDING OF</Style.WeddingTitle>
          <Style.Grooms data-aos="fade-down">{configThemesSecond.groom.nickName}</Style.Grooms>
          <Style.Ampersand src={AmpersandDivider} alt="ampersand" data-aos="fade-up"/>
          <Style.Bride data-aos="fade-up">{configThemesSecond.bride.nickName}</Style.Bride>
          <Style.WeddingDate data-aos="fade-up">{timerComponents.length ? timerComponents : <span>31 December 2022</span>}</Style.WeddingDate>
        </Style.WrapperInvite>
        <Style.FlowerMiddle src={MiddleFrame} alt="frame-middle" />
        <Style.FlowerBottomRight src={OrnamentFlowerBottom} alt="ornament-2" />
      </Style.Header>

      <Style.WeddingInfoContainer>
        <Style.SecondFlowerTop src={OrnamentSecondFlower} alt="ornament-3"/>
        <Style.Greetings data-aos="fade-up">
          Bismillaahirrahmaanirrahiim <br/><br/>
          Assalaamu&apos;alaikum Warahmatullaahi Wabarakaatuh <br/><br/>
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. <br/><br/>
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan do&apos;a restu pada pernikahan kami:
        </Style.Greetings>
        <Style.GroomFull data-aos="fade-down">{configThemesSecond.groom.fullName}</Style.GroomFull>
        <Style.Parents data-aos="fade-down">{configThemesSecond.groom.parents.tagline}</Style.Parents>
        <Style.AmpersandBride data-aos="fade-up">&#38;</Style.AmpersandBride>
        <Style.GroomFull data-aos="fade-up">{configThemesSecond.bride.fullName}</Style.GroomFull>
        <Style.Parents data-aos="fade-up">{configThemesSecond.bride.parents.tagline}</Style.Parents>
        <Style.WeddingDateSecond data-aos="fade-up">Sabtu, 31 Desember 2022</Style.WeddingDateSecond>
        <Style.CountDown data-aos="fade-up"> {timerComponents.length ? timerComponents : <span>31 December 2022</span>}</Style.CountDown>
        <Style.WeddingCeremony data-aos="fade-up">Akad</Style.WeddingCeremony>
        <Style.WeddingTime data-aos="fade-up">Pukul 09:00 - 10:00 WIB</Style.WeddingTime>
        <Style.LineDividers src={LineDivider} alt="divider" data-aos="fade-up"/>
        <Style.WeddingCeremony data-aos="fade-up">Resepsi</Style.WeddingCeremony>
        <Style.WeddingTime data-aos="fade-up">Pukul 10:10 - 13:00 WIB</Style.WeddingTime>
        <Style.WeddingLocation data-aos="fade-up">
          di {configThemesSecond.location.placeName}<br/><br/>
          {configThemesSecond.location.detailName}
        </Style.WeddingLocation>
        <Style.SecondFlowerBottom src={OrnamentSecondFlowerBottom} alt="ornament-3"/>
      </Style.WeddingInfoContainer>

      <Style.WeddingLocationContainer>
        <Style.LocationTitle>Lokasi</Style.LocationTitle>
        <Style.MapContainer>
          <Map/>
        </Style.MapContainer>
        <Style.SeeMap onClick={showMap}>Buka Google Maps</Style.SeeMap>
      </Style.WeddingLocationContainer>

      <Protocol />
      <AmplopCashless />

      <Style.VerseContainer>
        <Style.ThirdFlowerTop src={OrnamentThirdFlowerTop} alt="ornament-4" />
        <Style.VerseText data-aos="fade-up">“Bahwasanya Allah menciptakan kalian dari jenis kalian berupa perempuan sebagai istri, yang tinggal dengan kalian karena pernikahan, yang kalian lembut kepada istri-istri kalian dan condong kepadanya. Allah jadikan di antara kalian kecintaan, simpati dan kasih sayang, sungguh itu semua adalah tanda yang jelas akan ke-Maha Esaaan Allah dan kasih sayang-Nya kepada makhluk-Nya bagi kaum yang menjalankan akal mereka dan memikirkannya.” <br/><br/>(Q.S. Ar-Rum: 21)</Style.VerseText>
        <Style.ThirdFlowerBottom src={OrnamentThirdFlowerBottom} alt="ornament-5" />
          <Style.Watermark><span>Built with ❤️ &nbsp; by</span> <a href="https://sungnikah.com" target="_blank">sungnikah.com</a></Style.Watermark>
      </Style.VerseContainer>
    </Box>
  );
}

export default SecondTheme;
