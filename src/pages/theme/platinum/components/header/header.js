import React, { useEffect, useState } from "react";
import { Grid, Box }from '@material-ui/core';
import * as Style from "./headerStyle";

const HeaderPlatinum = () =>  {

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

    return(
        <>
            <Style.Header id="header">
                <Style.WrapperInvitation>
                    <Box
                        data-sal="slide-up"
                        data-sal-duration="2000"
                        data-sal-delay="1000"
                        data-sal-easing="ease"
                    >
                         <Style.Invite>Dear you, you’re invited to</Style.Invite>
                        <Style.Title>THE WEDDING OF</Style.Title>
                    </Box>
                   
                    <Grid container spacing={2}>
                        <Style.ResponsiveGrid item xs={12} md={6}>
                            <Style.Groom
                                 data-sal="slide-left"
                                 data-sal-duration="2000"
                                 data-sal-delay="1000"
                                 data-sal-easing="ease"
                            >
                                Agung
                            </Style.Groom>
                        </Style.ResponsiveGrid>
                        <Style.ResponsiveGrid item xs={12} md={1}>
                            <Style.Ampersand
                                data-sal="slide-up"
                                data-sal-duration="2000"
                                data-sal-delay="1000"
                                data-sal-easing="ease"
                            >
                                &
                            </Style.Ampersand>
                        </Style.ResponsiveGrid>
                        <Style.ResponsiveGrid item xs={12} md={5}>
                            <Style.Bride
                                data-sal="slide-right"
                                data-sal-duration="2000"
                                data-sal-delay="1000"
                                data-sal-easing="ease"
                                data-sal-repeat
                            >
                                Reni
                            </Style.Bride>
                        </Style.ResponsiveGrid>
                    </Grid>
                    <Style.CountDown
                        data-sal="slide-up"
                        data-sal-duration="2000"
                        data-sal-delay="1000"
                        data-sal-easing="ease"
                    >
                        {timerComponents.length ? timerComponents : <span>Happy Wedding!</span>}
                    </Style.CountDown>
                </Style.WrapperInvitation>
            </Style.Header>
        </>
    )
}

export default HeaderPlatinum;