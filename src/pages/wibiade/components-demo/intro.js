import React, { useEffect } from "react";
import * as Style from "@styles/temporary/wibiade/introStyle";
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
                    <Style.IntroText>Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan do&#39;a restu pada pernikahan kami:</Style.IntroText>
                    <br/>
                </Style.ContainerIntro>
                <Style.GroomWrapper data-aos="fade-up">
                    <Style.Person>Wibi Agung Prasetyo</Style.Person>
                    <Style.Parent>Putra dari Bpk. M. Rudiono dan Ibu Yuliarsih</Style.Parent>
                </Style.GroomWrapper>
                <Style.Ampersand data-aos="fade-up">
                    &#38;
                </Style.Ampersand>
                <Style.BrideWrapper data-aos="fade-up">
                    <Style.Person>Adelia Maftuhatul Amamah</Style.Person>
                    <Style.Parent>Putri dari Bpk. H. Suhaeli dan Ibu Fatimah</Style.Parent>
                </Style.BrideWrapper>
            </Style.WrapperIntro>
        </>
    )
}

export default Intro;
