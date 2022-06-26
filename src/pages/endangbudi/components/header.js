import React, { useEffect, useState, useRef} from 'react'
import * as Style from "@styles/gold/goldStyled";
import AOS from 'aos'
import 'aos/dist/aos.css';

import OrnamentFlowerTop from "@assets/ornaments/themes/secondTheme/first-flower-top-left.svg";
import OrnamentFlowerBottom from "@assets/ornaments/themes/secondTheme/first-flower-bottom-right.svg";
import AmpersandDivider from "@assets/ornaments/themes/secondTheme/ampersand.svg";
import MiddleFrame from "@assets/ornaments/themes/secondTheme/first-middle-frame.svg";

import BGMusic from '../../../assets/audio/a-thousand-years.mp3';
import MusicOn from '../../../assets/svg/music-animation.svg';
import MusicOff from '../../../assets/svg/audio-mute.svg';

const header = () => {

  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();

  const startAudio = () => {
    myRef.current.play();
    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    myRef.current.pause();
    changeAudioStatus(false);
  };

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

  return (
    <>
       <Style.Header>
          <audio
            ref={myRef}
            src={BGMusic}
            loop
            autoPlay
          />
          {audioStatus ? (
            <Style.AudioButton onClick={pauseAudio}>
              <img src={MusicOn} alt="music-off" width="18" height="18"/>
            </Style.AudioButton>
          ) : (
            <Style.AudioButton onClick={startAudio}>
              <img src={MusicOff} alt="music-on" width="18" height="18"/>
            </Style.AudioButton>
          )}
        <Style.FlowerTopLeft src={OrnamentFlowerTop} alt="ornament-1"/>
        <Style.WrapperInvite>
          <Style.InvitedPerson data-aos="fade-up">YOU’RE INVITED TO</Style.InvitedPerson>
          <Style.WeddingTitle data-aos="fade-up">THE WEDDING OF</Style.WeddingTitle>
          <Style.Grooms data-aos="fade-down">Endang</Style.Grooms>
          <Style.Ampersand src={AmpersandDivider} alt="ampersand" data-aos="fade-up"/>
          <Style.Bride data-aos="fade-up">Budi</Style.Bride>
          {/* <Style.WeddingDate data-aos="fade-up">{timerComponents.length ? timerComponents : <span>6 Juli 2022</span>}</Style.WeddingDate> */}
          <Style.CustomWeddingDate data-aos="fade-up">6 Juli 2022</Style.CustomWeddingDate>
        </Style.WrapperInvite>
        <Style.FlowerMiddle src={MiddleFrame} alt="frame-middle" />
        <Style.FlowerBottomRight src={OrnamentFlowerBottom} alt="ornament-2" />
      </Style.Header>
    </>
  )
}

export default header
