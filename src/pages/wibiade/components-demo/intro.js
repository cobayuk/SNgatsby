import React, { useEffect } from "react";
import { Grid } from '@material-ui/core';
import * as Style from "@styles/temporary/wibiade/introStyle";
import AOS from 'aos'
import 'aos/dist/aos.css';

import Bride from "@assets/photos/wibiadelia/bride.jpg";
import Groom from "@assets/photos/wibiadelia/groom.jpg";

const Intro = () =>  {

    useEffect(() => {
        AOS.init({
            duration: 1200, // values from 0 to 3000, with step 50ms
            once: false, // whether animation should happen only once - while scrolling down
        });
    }, []);

    return(
        <>
            <Style.WrapperIntro id="intro-section">
                <Style.ContainerIntro data-aos="fade-up">
                    <Style.IntroText>Bismillaahirrahmaanirrahiim</Style.IntroText>
                    <br/>
                    <Style.IntroText>Assalaamu&#39;alaikum Warahmatullaahi Wabarakaatuh</Style.IntroText>
                    <br/>
                    <Style.IntroText>Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.</Style.IntroText>
                    <br/>
                    <Style.IntroText>Dengan mengharap ridho dan rahmat Allah Subhanahu wa Ta&#39;ala untuk melaksanakan syari&#39;at agama-Nya dan mengikuti sunnah Rasul-Nya dalam membentuk rumah tangga yang sakinah, mawaddah, warahmah.</Style.IntroText>
                    <br/>
                    <Style.IntroText>Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan do&#39;a restu pada pernikahan kami:</Style.IntroText>
                    <br/>
                </Style.ContainerIntro>
                <Style.GridCustom container data-aos="fade-up">
                  <Grid item xs={12} md={5}>
                    <Style.GroomWrapper>
                        <Style.AvatarWrapper>
                            <Style.Poster src={Groom} alt="Wibi" width="150" height="150"/>
                        </Style.AvatarWrapper>
                        <Style.PersonName>Wibi Agung Prasetyo</Style.PersonName>
                        <Style.Parent>Putra dari Bpk. M. Rudiono dan Ibu Yuliarsih</Style.Parent>
                    </Style.GroomWrapper>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Style.Ampersand>
                        &#38;
                    </Style.Ampersand>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Style.BrideWrapper>
                        <Style.AvatarWrapper>
                          <Style.Poster src={Bride} alt="Adelia" width="150" height="150"/>
                        </Style.AvatarWrapper>
                        <Style.PersonName>Adelia Maftuhatul Amamah</Style.PersonName>
                        <Style.Parent>Putri dari Bpk. H. Suhaeli dan Ibu Fatimah</Style.Parent>
                    </Style.BrideWrapper>
                  </Grid>
                </Style.GridCustom>
            </Style.WrapperIntro>
        </>
    )
}

export default Intro;
