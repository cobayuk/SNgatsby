import React from "react";
import * as Style from "./introStyle";

const Intro = () =>  {

    return(
        <>
            <Style.WrapperIntro>
                <Style.ContainerIntro>
                    <Style.IntroText>Bismillaahirrahmaanirrahiim</Style.IntroText>
                    <br/>
                    <Style.IntroText>Assalaamu'alaikum Warahmatullaahi Wabarakaatuh</Style.IntroText>
                    <br/>
                    <Style.IntroText>Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.</Style.IntroText>
                    <br/>
                    <Style.IntroText>Dengan mengharap ridho dan rahmat Allah Subhanahu wa Ta’ala untuk melaksanakan syari'at agama-Nya dan mengikuti sunnah Rasul-Nya dalam membentuk rumah tangga yang sakinah, mawaddah, warahmah.</Style.IntroText>
                    <br/>
                    <Style.IntroText>Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan do'a restu pada pernikahan kami:</Style.IntroText>
                    <br/>
                </Style.ContainerIntro>
                <Style.GroomWrapper>
                    <Style.Person>Kevin Prasetyo</Style.Person>
                    <Style.Parent>Putra pertama dari Bpk. Karim Muhadin dan Ibu Jey Sabilla</Style.Parent>
                </Style.GroomWrapper>
                <Style.Ampersand>&</Style.Ampersand>
                <div>
                    <Style.Person>Reni Fitria</Style.Person>
                    <Style.Parent>Putri pertama dari Bpk. Jojo Amin dan Ibu Sari Asiha</Style.Parent>
                </div>
            </Style.WrapperIntro>
        </>
    )
}

export default Intro;