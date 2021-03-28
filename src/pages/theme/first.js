import React, { useEffect, useState } from "react";
import { Box, Link }from '@material-ui/core';
import Map from "../../components/map";
import * as Style from "./themeStyled";
import Liquid from "../../assets/ornaments/themes/liquid.svg";
import LiquidOutline from "../../assets/ornaments/themes/liquid-outline-mobile.svg";
import Flower from "../../assets/ornaments/themes/flower.svg";
import Line from "../../assets/ornaments/themes/line.svg";
import Curved from "../../assets/ornaments/themes/curved.svg";
import Abstract from "../../assets/ornaments/themes/abstract.svg";
import AbstractBottom from "../../assets/ornaments/themes/abstract-bottom.svg";
import FlowerBottom from "../../assets/ornaments/themes/flower-bottom.svg";

const FirstTheme = () =>  {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    // const difference = +new Date(`${year}-10-1`) - +new Date();
    let difference = +new Date(`04/05/${year}`) - +new Date(); //month - day - current year
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
      <Style.Introduction>
        <Style.OrnamentLiquid
          src={Liquid}
          alt="ornament-1"
          // data-sal="fade"
          // data-sal-duration="2000"
          // data-sal-delay="200"
          // data-sal-easing="ease"
        />
        <Style.OrnamentLiquidOutline
          src={LiquidOutline}
          alt="ornament-2"
          data-sal="fade"
          data-sal-duration="2000"
          data-sal-delay="300"
          data-sal-easing="ease"
        />
        <Style.IntroWrapper>
          <Style.Invite
            data-sal="slide-up"
            data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
          >
            You're Invited to
          </Style.Invite>
          <Style.Title
            data-sal="slide-down"
            data-sal-duration="2000"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            The Wedding Of
          </Style.Title>
          <Box>
            <Style.PersonName
              data-sal="slide-left"
              data-sal-duration="2000"
              data-sal-delay="500"
              data-sal-easing="ease"
            >
              Andy
            </Style.PersonName>
            <Style.Ampersand
              data-sal="slide-down"
              data-sal-duration="2000"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              and
            </Style.Ampersand>
            <Style.PersonName
              data-sal="slide-right"
              data-sal-duration="2000"
              data-sal-delay="700"
              data-sal-easing="ease"
            >
              Syifa
            </Style.PersonName>
          </Box>
          <Style.CountdownContainer>
            <Style.WeddingCountdown
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="1000"
              data-sal-easing="ease"
            >
              {timerComponents.length ? timerComponents : <span>Time's up!</span>}
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
          <Style.Greeting>
            Bismillaahirrahmaanirrahiim<br/><br/>
            Assalaamu'alaikum Warahmatullaahi Wabarakaatuh
            <br/><br/>
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
            <br/><br/>
            Dengan mengharap ridho dan rahmat Allah Subhanahu wa Ta’ala untuk melaksanakan syari'at agama-Nya dan mengikuti sunnah Rasul-Nya dalam membentuk rumah tangga yang sakinah, mawaddah, warahmah.
            <br/><br/>
            Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan do'a restu pada pernikahan kami:
          </Style.Greeting>
          <Style.Groom>Andy Winarko S.Pd</Style.Groom>
          <Style.Parents>Putra pertama dari Bpk. H. Karim Muhadin dan Ibu Hj. Jey Sabilla</Style.Parents>
          <Style.AmpersandGroom>&</Style.AmpersandGroom>
          <Style.Groom>Syifa Putri Lubis</Style.Groom>
          <Style.Parents>Putri pertama dari Bpk. Jojo Amin dan Ibu Sari Asih</Style.Parents>
          <Style.Greeting>Yang Insya Allah akan dilaksanakan pada:</Style.Greeting>
          <Style.WeddingDate>
            Sabtu, 22 Februari 2021<br/><br/>
            Akad Nikah
          </Style.WeddingDate>
          <Style.Parents>Pukul 09:00 - 10:00 WIB</Style.Parents>
          <Style.LineDivider src={Line} alt="line"/>
          <Style.WeddingDate>Resepsi<br/><br/></Style.WeddingDate>
          <Style.WeedingTime>Pukul 10:10 - 13:00 WIB</Style.WeedingTime>
          <Style.Greeting>di POKEL Garden Resto<br/><br/>Jalan Kelapa Dua no.88, Katulisan, Kecamatan Serang Kota Serang</Style.Greeting>
          <Style.SeeMap>Lihat Peta</Style.SeeMap>
        </Style.InvitationWrapper>
        <Style.OrnamentMiddleContainer>
          <Style.OrnamentAbstract src={Abstract} alt="ornament-1"/>
          <Style.OrnamentCurved src={Curved} alt="ornament-2"/>
        </Style.OrnamentMiddleContainer>

        <Map/>
      </Style.InvitationContainer>

      <Style.QuranVerseContainer>
        <Style.QuranVerseText
          data-sal="slide-up"
          data-sal-duration="2000"
          data-sal-delay="500"
          data-sal-easing="ease"
        >
          “Bahwasanya Allah menciptakan kalian dari jenis kalian berupa perempuan sebagai istri, yang tinggal dengan kalian karena pernikahan, yang kalian lembut kepada istri-istri kalian dan condong kepadanya. Allah jadikan di antara kalian kecintaan, simpati dan kasih sayang, sungguh itu semua adalah tanda yang jelas akan ke-Maha Esaaan Allah dan kasih sayang-Nya kepada makhluk-Nya bagi kaum yang menjalankan akal mereka dan memikirkannya.”<br/><br/>(Q.S. Ar-Rum: 21)
        </Style.QuranVerseText>

        <Style.OrnamentBottomContainer>
          <Style.OrnamentAbstractBottom src={AbstractBottom} alt="ornament-3"/>
          <Style.OrnamentFlowerBottom src={FlowerBottom} alt="ornament-4"/>
          <Link href="#">
            <Style.WatermarkSungnikah> Built with <span style={{color:'red'}}>❤</span> by sungnikah.com</Style.WatermarkSungnikah>
          </Link>
        </Style.OrnamentBottomContainer>

      </Style.QuranVerseContainer>
    </Box>

  );

}

export default FirstTheme
