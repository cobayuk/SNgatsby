import React, { useEffect, useState, useRef } from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Grid, Box }from '@material-ui/core';
import * as Style from "@styles/temporary/reliabletoakim/headerStyle";
import AOS from 'aos'
import 'aos/dist/aos.css';

import BGMusic from '../../../assets/audio/sleeping-with-sirens.mp3';
import MusicOn from '../../../assets/svg/music-animation.svg';
import MusicOff from '../../../assets/svg/audio-mute.svg';

const HeaderPlatinum = () =>  {

    const [audioStatus, changeAudioStatus] = useState(true);
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
        var countDownDate = new Date("Jan 3, 2023 08:00:00").getTime();
        var now = new Date().getTime();

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

    return(
        <>
            <Style.Header id="header">
                <Style.WrapperInvitation>
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
                    <Box data-aos="fade-up">
                        <Style.Title>THE WEDDING OF</Style.Title>
                    </Box>

                    <Grid container spacing={2}>
                        <Style.ResponsiveGrid item xs={12} md={5}>
                            <Style.Groom data-aos="fade-up">
                                Akim
                            </Style.Groom>
                        </Style.ResponsiveGrid>
                        <Style.ResponsiveGrid item xs={12} md={2}>
                            <Style.Ampersand data-aos="fade-up">
                                &#38;
                            </Style.Ampersand>
                        </Style.ResponsiveGrid>
                        <Style.ResponsiveGrid item xs={12} md={5}>
                            <Style.Bride data-aos="fade-up">
                                Aulia
                            </Style.Bride>
                        </Style.ResponsiveGrid>
                    </Grid>
                    <Style.CountDown data-aos="fade-up" data-aos-once="true">
                        {timerComponents.length ? timerComponents : <span>3 January 2023</span>}
                    </Style.CountDown>
                    <Style.Arrow onClick={() => scrollTo('#video-section')}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Style.Arrow>
                </Style.WrapperInvitation>
            </Style.Header>
        </>
    )
}

export default HeaderPlatinum;
