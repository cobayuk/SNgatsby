import React, { useEffect } from "react";
import { Grid } from '@material-ui/core';
import * as Style from "@styles/temporary/reliabletoakim/introStyle";
import AOS from 'aos'
import 'aos/dist/aos.css';

import Bride from "@assets/photos/akimaul/aul-square.jpg";
import Groom from "@assets/photos/akimaul/akim-square.jpg";

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
                            <Style.Poster src={Groom} alt="Akim" width="150" height="150"/>
                        </Style.AvatarWrapper>
                        <Style.PersonName>Mustakim Maulana</Style.PersonName>
                        <Style.Parent>Putra ke-4 dari Bpk. Mustari dan Ibu Muranah</Style.Parent>
                        <Style.InstagramWrapper>
                          <Style.InstagramContainer href="https://www.instagram.com/mufizpurfiz/" target="_blank" rel="noopener noreferrer">
                            <Style.InstagramIcon fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M16,3H8C5.243,3,3,5.243,3,8v8c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V8C21,5.243,18.757,3,16,3z M19,16c0,1.654-1.346,3-3,3H8c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3V16z"/><path d="M12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5S14.757 7 12 7zM12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 15 12 15zM17 6A1 1 0 1 0 17 8 1 1 0 1 0 17 6z"/></Style.InstagramIcon>
                          </Style.InstagramContainer>
                          </Style.InstagramWrapper>
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
                          <Style.Poster src={Bride} alt="Aul" width="150" height="150"/>
                        </Style.AvatarWrapper>
                        <Style.PersonName>Nasrifatul Aulia</Style.PersonName>
                        <Style.Parent>Putri pertama dari Bpk. Nahwan dan Ibu Rumsiah</Style.Parent>
                        <Style.InstagramWrapper>
                          <Style.InstagramContainer href="https://www.instagram.com/nsrftlaulia/" target="_blank" rel="noopener noreferrer">
                            <Style.InstagramIcon fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M16,3H8C5.243,3,3,5.243,3,8v8c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V8C21,5.243,18.757,3,16,3z M19,16c0,1.654-1.346,3-3,3H8c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3V16z"/><path d="M12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5S14.757 7 12 7zM12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 15 12 15zM17 6A1 1 0 1 0 17 8 1 1 0 1 0 17 6z"/></Style.InstagramIcon>
                          </Style.InstagramContainer>
                        </Style.InstagramWrapper>

                    </Style.BrideWrapper>
                  </Grid>
                </Style.GridCustom>
            </Style.WrapperIntro>
        </>
    )
}

export default Intro;
