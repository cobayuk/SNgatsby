import React, { useEffect } from "react";
import * as Style from "@styles/temporary/introStyle";
import AOS from 'aos'
import 'aos/dist/aos.css';

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
                    <Style.IntroText>Dengan mengharap ridho dan rahmat Allah Subhanahu wa Ta’ala untuk melaksanakan syari&#39;at agama-Nya dan mengikuti sunnah Rasul-Nya dalam membentuk rumah tangga yang sakinah, mawaddah, warahmah.</Style.IntroText>
                    <br/>
                    <Style.IntroText>Tanpa mengurangi rasa hormat, kami memohon do&#39;a restu pada pernikahan kami:</Style.IntroText>
                    <br/>
                </Style.ContainerIntro>
                <Style.GroomWrapper data-aos="fade-up">
                    <Style.Person>Yesi Listianingsih, SH</Style.Person>
                    <Style.Parent>Putri ketiga dari Bpk. Muhammad Djumhana Razak, SH dan Ibu Isye Nurmalawati (Almh)</Style.Parent>
                </Style.GroomWrapper>
                <Style.Ampersand data-aos="fade-up">
                    &#38;
                </Style.Ampersand>
                <Style.BrideWrapper data-aos="fade-up">
                    <Style.Person>Robain</Style.Person>
                    <Style.Parent>Putra kesepuluh dari Bpk. Arsad (Alm) dan Ibu Robunah</Style.Parent>
                </Style.BrideWrapper>
            </Style.WrapperIntro>
        </>
    )
}

export default Intro;
