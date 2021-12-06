import React, { useEffect } from "react";
import * as Style from "@styles/platinum/introStyle";
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
            <Style.WrapperIntro>
                <Style.ContainerIntro data-aos="fade-up">
                    <Style.IntroText>Bismillaahirrahmaanirrahiim</Style.IntroText>
                    <br/>
                    <Style.IntroText>Assalaamu'alaikum Warahmatullaahi Wabarakaatuh</Style.IntroText>
                    <br/>
                    <Style.IntroText>Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.</Style.IntroText>
                    <br/>
                    <Style.IntroText>Dengan mengharap ridho dan rahmat Allah Subhanahu wa Ta’ala untuk melaksanakan syari'at agama-Nya dan mengikuti sunnah Rasul-Nya dalam membentuk rumah tangga yang sakinah, mawaddah, warahmah.</Style.IntroText>
                    <br/>
                    <Style.IntroText>Tanpa mengurangi rasa hormat, kami memohon do'a restu pada pernikahan kami:</Style.IntroText>
                    <br/>
                </Style.ContainerIntro>
                <Style.GroomWrapper data-aos="fade-up">
                    <Style.Person>Agung Tri Wibowo</Style.Person>
                    <Style.Parent>Putra ketiga dari Bpk. Jhony Popoy dan Ibu Endang Trisnowati</Style.Parent>
                </Style.GroomWrapper>
                <Style.Ampersand data-aos="fade-up">
                    &
                </Style.Ampersand>
                <Style.BrideWrapper data-aos="fade-up">
                    <Style.Person>Reni Fitria</Style.Person>
                    <Style.Parent>Putri keempat dari (Alm) Bpk. Zaini Tanjung dan Ibu Sofiyarti</Style.Parent>
                </Style.BrideWrapper>
            </Style.WrapperIntro>
        </>
    )
}

export default Intro;