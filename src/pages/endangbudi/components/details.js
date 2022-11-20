import React, {useEffect, useState} from 'react'
import * as Style from "@styles/gold/goldStyled";

import OrnamentSecondFlower from "@assets/ornaments/themes/secondTheme/second-flower-top-right.svg";
import OrnamentSecondFlowerBottom from "@assets/ornaments/themes/secondTheme/second-flower-bottom-left.svg";
import LineDivider from "@assets/ornaments/themes/secondTheme/line.svg";

const details = () => {

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

  return (
    <>
       <Style.WeddingInfoContainer>
        <Style.SecondFlowerTop src={OrnamentSecondFlower} alt="ornament-3"/>
        <Style.Greetings data-aos="fade-up">
          Bismillaahirrahmaanirrahiim <br/><br/>
          Assalaamu&apos;alaikum Warahmatullaahi Wabarakaatuh <br/><br/>
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. <br/><br/>
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan do&apos;a restu pada pernikahan kami:
        </Style.Greetings>
        <Style.GroomFull data-aos="fade-down">Endang Riawati (Cirebon)</Style.GroomFull>
        <Style.Parents data-aos="fade-down">Putri dari Bpk. Kosasih dan Ibu Suneti</Style.Parents>
        <Style.AmpersandBride data-aos="fade-up">&#38;</Style.AmpersandBride>
        <Style.GroomFull data-aos="fade-up">Budi Sucipto (Kudus)</Style.GroomFull>
        <Style.Parents data-aos="fade-up">Putra dari Bpk. Edy Suryono (Alm) dan Ibu Sukarnah (Almh)</Style.Parents>
        <Style.WeddingDateSecond data-aos="fade-up">Rabu, 6 Juli 2022</Style.WeddingDateSecond>
        {/* <Style.CountDown data-aos="fade-up"> {timerComponents.length ? timerComponents : <span></span>}</Style.CountDown> */}
        <Style.CountDown data-aos="fade-up"><span></span></Style.CountDown>
        <Style.WeddingCeremony data-aos="fade-up">Akad</Style.WeddingCeremony>
        <Style.WeddingTime data-aos="fade-up">Pukul 08:00 WIB s/d Selesai</Style.WeddingTime>
        <Style.LineDividers src={LineDivider} alt="divider" data-aos="fade-up"/>
        <Style.WeddingCeremony data-aos="fade-up">Resepsi</Style.WeddingCeremony>
        <Style.WeddingTime data-aos="fade-up">Pukul 11:00 - 17:00 WIB</Style.WeddingTime>
        <Style.WeddingLocation data-aos="fade-up">
          di Kediaman Mempelai Wanita<br/><br/>
          Jln. Buyut No 50 Kp. Kutasirap RT 001/014 Kel. Pegambiran Kota Cirebon
        </Style.WeddingLocation>
        <Style.SecondFlowerBottom src={OrnamentSecondFlowerBottom} alt="ornament-3"/>
      </Style.WeddingInfoContainer>
    </>
  )
}

export default details
