import React, { useEffect, useState, Fragment } from "react";
import { Box, Grid, Typography }from '@material-ui/core';
import * as Style from "./platinumStyle";

const PlatinumTheme = () =>  {

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
        <Fragment>
            <Style.Header id="header">
                <Style.WrapperInvitation>
                    <Style.Invite>Dear you, you’re invited to</Style.Invite>
                    <Style.Title>THE WEDDING OF</Style.Title>
                    <Grid container spacing={2}>
                        <Style.ResponsiveGrid item xs={12} md={6}>
                            <Style.Groom>Prasetyo</Style.Groom>
                        </Style.ResponsiveGrid>
                        <Style.ResponsiveGrid item xs={12} md={1}>
                            <Style.Ampersand>&</Style.Ampersand>
                        </Style.ResponsiveGrid>
                        <Style.ResponsiveGrid item xs={12} md={5}>
                            <Style.Bride>Rere</Style.Bride>
                        </Style.ResponsiveGrid>
                    </Grid>
                    <Style.CountDown>{timerComponents.length ? timerComponents : <span>Happy Wedding!</span>}</Style.CountDown>
                </Style.WrapperInvitation>
            </Style.Header>
        </Fragment>
    )
}

export default PlatinumTheme;