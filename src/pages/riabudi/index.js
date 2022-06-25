import React, { useEffect, useState } from "react";
import { Box }from '@material-ui/core';
import AOS from 'aos'
import 'aos/dist/aos.css';

import OrnamentThirdFlowerTop from "@assets/ornaments/themes/secondTheme/third-flower-top.svg";
import OrnamentThirdFlowerBottom from "@assets/ornaments/themes/secondTheme/third-flower-bottom.svg";

import Map from "./components/map.js";

import Details from './components/details'
import SEO from "./components/seo"
import Header from "./components/header";
import Protocol from "./components/protocol";

import * as Style from "@styles/gold/goldStyled";

const SecondTheme = () =>  {

  useEffect(() => {
      AOS.init({
          duration: 1200, // values from 0 to 3000, with step 50ms
          once: false, // whether animation should happen only once - while scrolling down
      });
  }, []);

  const calculateTimeLeft = () => {
    let countDownDate = new Date("Jul 6, 2022 08:00:00").getTime();
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
    window.open("https://maps.google.com?q="+"-6.7401958%2C108.5769753&z=17");
  };

  return (
    <Box>

      <SEO/>
      <Header/>
      <Details/>

      <Style.WeddingLocationContainer>
        <Style.LocationTitle>Lokasi</Style.LocationTitle>
        <Style.MapContainer>
          <Map/>
        </Style.MapContainer>
        <Style.SeeMap onClick={showMap}>Lihat Peta</Style.SeeMap>
      </Style.WeddingLocationContainer>

      <Protocol />

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
