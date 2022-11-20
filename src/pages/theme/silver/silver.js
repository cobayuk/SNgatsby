import React, { useEffect, useState } from "react";
import { Box }from '@material-ui/core';
import Map from "@components/map";
import AOS from 'aos'
import 'aos/dist/aos.css';

import * as Style from "@styles/silver/silverStyled";

import Liquid from "@assets/ornaments/themes/liquid.svg";
import LiquidOutline from "@assets/ornaments/themes/liquid-outline-mobile.svg";
import Flower from "@assets/ornaments/themes/flower.svg";
import Line from "@assets/ornaments/themes/line.svg";
import Curved from "@assets/ornaments/themes/curved.svg";
import Abstract from "@assets/ornaments/themes/abstract.svg";
// import AbstractBottom from "@assets/ornaments/themes/abstract-bottom.svg";
// import FlowerBottom from "@assets/ornaments/themes/flower-bottom.svg";



const FirstTheme = () =>  {

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
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <Box>
      <Style.Introduction>
        <Style.OrnamentLiquid
          src={Liquid}
          alt="ornament-1"
        />
        <Style.OrnamentLiquidOutline
          src={LiquidOutline}
          alt="ornament-2"
        />
        <Style.IntroWrapper>
          <Style.Invite data-aos="fade-up">
            You&apos;re Invited to
          </Style.Invite>
          <Style.Title data-aos="fade-up">
            The Wedding Of
          </Style.Title>
          <Box>
            <Style.PersonName data-aos="fade-down">
              Andy
            </Style.PersonName>
            <Style.Ampersand data-aos="fade-up">and</Style.Ampersand>
            <Style.PersonName data-aos="fade-up">
              Syifa
            </Style.PersonName>
          </Box>
          <Style.CountdownContainer data-aos="fade-up">
            <Style.WeddingCountdown>
              {timerComponents.length ? timerComponents : <span>31 December 2022</span>}
            </Style.WeddingCountdown>
          </Style.CountdownContainer>
        </Style.IntroWrapper>
      </Style.Introduction>

      <Style.InvitationContainer>
        <Style.FlowerContainer>
          <Style.FlowerLeft src={Flower} alt="flower"/>
          <Style.FlowerMiddleOne src={Flower} alt="flower"/>
        </Style.FlowerContainer>
        <Style.InvitationWrapper>
          <Style.Greeting data-aos="fade-up">
            Bismillaahirrahmaanirrahiim<br/><br/>
            Assalaamu&apos;alaikum Warahmatullaahi Wabarakaatuh
            <br/><br/>
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
            <br/><br/>
            Dengan mengharap ridho dan rahmat Allah Subhanahu wa Ta’ala untuk melaksanakan syari&apos;at agama-Nya dan mengikuti sunnah Rasul-Nya dalam membentuk rumah tangga yang sakinah, mawaddah, warahmah.
            <br/><br/>
            Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan do&apos;a restu pada pernikahan kami:
          </Style.Greeting>
          <Style.Groom data-aos="fade-down">Andy Winarko S.Pd</Style.Groom>
          <Style.Parents data-aos="fade-up">Putra pertama dari Bpk. H. Karim Muhadin dan Ibu Hj. Jey Sabilla</Style.Parents>
          <Style.AmpersandGroom data-aos="fade-up">&#38;</Style.AmpersandGroom>
          <Style.Groom data-aos="fade-up">Syifa Putri Lubis</Style.Groom>
          <Style.Parents data-aos="fade-up">Putri pertama dari Bpk. Jojo Amin dan Ibu Sari Asih</Style.Parents>
          <Style.Greeting data-aos="fade-up">Yang Insya Allah akan dilaksanakan pada:</Style.Greeting>
          <Style.WeddingDate data-aos="fade-up">
            Sabtu, 31 Desember 2022<br/><br/>
            Akad Nikah
          </Style.WeddingDate>
          <Style.Parents data-aos="fade-up">Pukul 09:00 - 10:00 WIB</Style.Parents>
          <Style.LineDivider src={Line} alt="line"/>
          <Style.WeddingDate data-aos="fade-up">Resepsi<br/><br/></Style.WeddingDate>
          <Style.WeedingTime data-aos="fade-up">Pukul 10:10 - 13:00 WIB</Style.WeedingTime>
          <Style.Greeting data-aos="fade-up">di POKEL Garden Resto<br/><br/>Jalan Kelapa Dua no.88, Katulisan, Kecamatan Serang Kota Serang</Style.Greeting>
          <Style.SeeMap>Lihat Peta</Style.SeeMap>
        </Style.InvitationWrapper>
        <Style.OrnamentMiddleContainer>
          <Style.OrnamentAbstract src={Abstract} alt="ornament-1"/>
          <Style.OrnamentCurved src={Curved} alt="ornament-2"/>
        </Style.OrnamentMiddleContainer>

        <Map/>
      </Style.InvitationContainer>

      <Style.QuranVerseContainer>
        <Style.QuranVerseText data-aos="fade-up">
          “Bahwasanya Allah menciptakan kalian dari jenis kalian berupa perempuan sebagai istri, yang tinggal dengan kalian karena pernikahan, yang kalian lembut kepada istri-istri kalian dan condong kepadanya. Allah jadikan di antara kalian kecintaan, simpati dan kasih sayang, sungguh itu semua adalah tanda yang jelas akan ke-Maha Esaaan Allah dan kasih sayang-Nya kepada makhluk-Nya bagi kaum yang menjalankan akal mereka dan memikirkannya.”<br/><br/>(Q.S. Ar-Rum: 21)
        </Style.QuranVerseText>

        {/* <Style.OrnamentBottomContainer> */}
          {/* <Style.OrnamentAbstractBottom src={AbstractBottom} alt="ornament-3"/> */}
          {/* <Style.OrnamentFlowerBottom src={FlowerBottom} alt="ornament-4"/> */}
        {/* </Style.OrnamentBottomContainer> */}
        <Style.WatermarkContainer> <span>Built with ❤️ &nbsp; by</span> <a href="https://sungnikah.com" target="_blank">sungnikah.com</a></Style.WatermarkContainer>

      </Style.QuranVerseContainer>
      {/* <Style.WatermarkContainer>
        <Style.WatermarkSungnikah href="https://sungnikah.com"> Built with <span style={{color:'red'}}>❤</span> by sungnikah.com</Style.WatermarkSungnikah>
      </Style.WatermarkContainer> */}
    </Box>

  );

}

export default FirstTheme
