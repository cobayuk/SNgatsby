import React from "react";
import * as Style from "./introStyle";

const Intro = () =>  {

    return(
        <>
            <Style.WrapperIntro>
                <Style.ContainerIntro
                    data-sal="slide-up"
                    data-sal-duration="2000"
                    data-sal-delay="10"
                    data-sal-easing="ease in"
                    data-sal-once="true"
                >
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
                <Style.GroomWrapper
                    data-sal="slide-left"
                    data-sal-duration="2000"
                    data-sal-delay="10"
                    data-sal-easing="ease"
                >
                    <Style.Person>Agung Tri Wibowo</Style.Person>
                    <Style.Parent>Putra ketiga dari Bpk. Jhony Popoy dan Ibu Endang Trisnowati</Style.Parent>
                </Style.GroomWrapper>
                <Style.Ampersand
                    data-sal="slide-up"
                    data-sal-duration="2000"
                    data-sal-delay="10"
                    data-sal-easing="ease in"
                >
                    &
                </Style.Ampersand>
                <Style.BrideWrapper
                    data-sal="slide-right"
                    data-sal-duration="2000"
                    data-sal-delay="10"
                    data-sal-easing="ease"
                >
                    <Style.Person>Reni Fitria</Style.Person>
                    <Style.Parent>Putri keempat dari (Alm) Bpk. Zaini Tanjung dan Ibu Sofiyarti</Style.Parent>
                </Style.BrideWrapper>
            </Style.WrapperIntro>
        </>
    )
}

export default Intro;