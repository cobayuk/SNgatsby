import React, { useEffect, useState } from "react";

import { Box, Link }from '@material-ui/core';
import * as Style from "./secondStyle";
import OrnamentFlowerTop from "../../assets/ornaments/themes/secondTheme/first-flower-top-left.svg";
import OrnamentFlowerBottom from "../../assets/ornaments/themes/secondTheme/first-flower-bottom-right.svg";
import MiddleFrame from "../../assets/ornaments/themes/secondTheme/first-middle-frame.svg";
import OrnamentSecondFlower from "../../assets/ornaments/themes/secondTheme/second-flower-top-right.svg";
import OrnamentSecondFlowerBottom from "../../assets/ornaments/themes/secondTheme/second-flower-bottom-left.svg";
import OrnamentThirdFlowerTop from "../../assets/ornaments/themes/secondTheme/third-flower-top.svg";
import OrnamentThirdFlowerBottom from "../../assets/ornaments/themes/secondTheme/third-flower-bottom.svg";
import AmpersandDivider from "../../assets/ornaments/themes/secondTheme/ampersand.svg";
import LineDivider from "../../assets/ornaments/themes/secondTheme/line.svg";
import Map from "../../components/map";
import { configThemesSecond } from "../../mocking/template";

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
      <span>
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
          <Style.InvitedPerson>YOU’RE INVITED TO</Style.InvitedPerson>
          <Style.WeddingTitle>THE WEDDING OF</Style.WeddingTitle>
          <Style.Grooms>{configThemesSecond.groom.nickName}</Style.Grooms>
          <Style.Ampersand src={AmpersandDivider} alt="ampersand"/>
          <Style.Bride>{configThemesSecond.bride.nickName}</Style.Bride>
          <Style.WeddingDate>{configThemesSecond.placeHolderTag.timeStarted}</Style.WeddingDate>
        </Style.WrapperInvite>
        <Style.FlowerMiddle src={MiddleFrame} alt="frame-middle"/>
        <Style.FlowerBottomRight src={OrnamentFlowerBottom} alt="ornament-2"/>
      </Style.Header>

      <Style.WeddingInfoContainer>
        <Style.SecondFlowerTop src={OrnamentSecondFlower} alt="ornament-3"/>
        <Style.Greetings>
          Bismillaahirrahmaanirrahiim <br/><br/>
          Assalaamu'alaikum Warahmatullaahi Wabarakaatuh <br/><br/>
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. <br/><br/>
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan do'a restu pada pernikahan kami:
        </Style.Greetings>
        <Style.GroomFull>{configThemesSecond.groom.fullName}</Style.GroomFull>
        <Style.Parents>{configThemesSecond.groom.parents.tagline}</Style.Parents>
        <Style.AmpersandBride>&</Style.AmpersandBride>
        <Style.GroomFull>{configThemesSecond.bride.fullName}</Style.GroomFull>
        <Style.Parents>{configThemesSecond.bride.parents.tagline}</Style.Parents>
        <Style.WeddingDateSecond>{configThemesSecond.contractMarriage.dateTime}</Style.WeddingDateSecond>
        <Style.CountDown> {timerComponents.length ? timerComponents : <span>Happy Wedding!</span>}</Style.CountDown>
        <Style.WeddingCeremony>Akad</Style.WeddingCeremony>
        <Style.WeddingTime>Pukul 09:00 - 10:00 WIB</Style.WeddingTime>
        <Style.LineDivider src={LineDivider} alt="divider"/>
        <Style.WeddingCeremony>Resepsi</Style.WeddingCeremony>
        <Style.WeddingTime>Pukul 10:10 - 13:00 WIB</Style.WeddingTime>
        <Style.WeddingLocation>
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
        <Style.SeeMap onClick={showMap}>Lihat di Google Maps</Style.SeeMap>
      </Style.WeddingLocationContainer>

      <Style.VerseContainer>
        <Style.ThirdFlowerTop src={OrnamentThirdFlowerTop} alt="ornament-4"/>
        <Style.VerseText>“Bahwasanya Allah menciptakan kalian dari jenis kalian berupa perempuan sebagai istri, yang tinggal dengan kalian karena pernikahan, yang kalian lembut kepada istri-istri kalian dan condong kepadanya. Allah jadikan di antara kalian kecintaan, simpati dan kasih sayang, sungguh itu semua adalah tanda yang jelas akan ke-Maha Esaaan Allah dan kasih sayang-Nya kepada makhluk-Nya bagi kaum yang menjalankan akal mereka dan memikirkannya.” <br/><br/>(Q.S. Ar-Rum: 21)</Style.VerseText>
        <Style.ThirdFlowerBottom src={OrnamentThirdFlowerBottom} alt="ornament-5"/>
        <Link href="#">
          <Style.Watermark>Built with <span style={{color:'red'}}>❤</span> by sungnikah.com</Style.Watermark>
        </Link>
      </Style.VerseContainer>

    </Box>
  );
}

export default SecondTheme;
