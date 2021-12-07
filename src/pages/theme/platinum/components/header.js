import React, { useEffect, useState } from "react";
import { Grid, Box }from '@material-ui/core';
import * as Style from "@styles/platinum/headerStyle";
import AOS from 'aos'
import 'aos/dist/aos.css';

const HeaderPlatinum = () =>  {

    useEffect(() => {
        AOS.init({
            duration: 1200, // values from 0 to 3000, with step 50ms
            once: false, // whether animation should happen only once - while scrolling down
        });
    }, []);

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

    return(
        <>
            <Style.Header id="header">
                <Style.WrapperInvitation>
                    <Box data-aos="fade-up">
                         <Style.Invite>Dear you, you’re invited to</Style.Invite>
                        <Style.Title >THE WEDDING OF</Style.Title>
                    </Box>
                   
                    <Grid container spacing={2}>
                        <Style.ResponsiveGrid item xs={12} md={6}>
                            <Style.Groom data-aos="fade-up">
                                Agung
                            </Style.Groom>
                        </Style.ResponsiveGrid>
                        <Style.ResponsiveGrid item xs={12} md={1}>
                            <Style.Ampersand data-aos="fade-up">
                                &#38;
                            </Style.Ampersand>
                        </Style.ResponsiveGrid>
                        <Style.ResponsiveGrid item xs={12} md={5}>
                            <Style.Bride data-aos="fade-up">
                                Reni
                            </Style.Bride>
                        </Style.ResponsiveGrid>
                    </Grid>
                    <Style.CountDown data-aos="fade-up" data-aos-once="true">
                        {timerComponents.length ? timerComponents : <span>11 December 2021</span>}
                    </Style.CountDown>
                    <Style.Arrow data-aos="fade-up" data-aos-once="true">
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