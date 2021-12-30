import React, { useEffect } from "react";
import * as Style from "@styles/gold/protocolStyled";
import WearMask from "@assets/protocol/wear-mask-vector.jpg";
import HandSanitizer from "@assets/protocol/wash-hand-vector.jpg";
import Distance from "@assets/protocol/distance-vector.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css';

const Protocol = () =>  {

    useEffect(() => {
        AOS.init({
            duration: 1200, // values from 0 to 3000, with step 50ms
            once: false, // whether animation should happen only once - while scrolling down
        });
    }, []);

    return(
        <>
            <Style.ContainerProtocol>
                <Style.InnerContainer>
                    <Style.IntroProtocol data-aos="fade-down">Protokol Kesehatan</Style.IntroProtocol>
                    <Style.SummaryProtocol data-aos="fade-up">
                        Sebagai pencegahan COVID-19 dan untuk menjaga keselamatan semua orang yang akan hadir di acara ini. Kami akan melakukan prosedur kesehatan dan mengikuti protokol pernikahan pada new normal saat ini.
                    </Style.SummaryProtocol>

                    <Style.GridContainer container>
                        <Style.GridItem item xs={12} sm={6}>
                            <Style.ProtocolImage data-aos="fade-in" src={WearMask} alt="wear-mask" width="800" height="450"/>
                        </Style.GridItem>
                        <Style.GridProtocol item xs={12} sm={6} data-aos="fade-up">
                            <Style.WrapperProtocol>
                                <Style.ProtocolTitle>Pakai Masker</Style.ProtocolTitle>
                                    <Style.ProtocolDescription>
                                        Tetap pakai masker ya! Mengenakan masker tidak membuat kamu terlihat buruk, jadi pilihlah masker yang sesuai dengan pakaian kamu.
                                    </Style.ProtocolDescription>
                            </Style.WrapperProtocol>
                        </Style.GridProtocol>
                    </Style.GridContainer>

                    <Style.GridContainer container>
                        <Style.GridOrderMobile item xs={12} sm={6}>
                            <Style.ProtocolImage data-aos="fade-in" src={HandSanitizer} alt="wear-mask" width="800" height="450"/>
                        </Style.GridOrderMobile>
                        <Style.GridProtocol item xs={12} sm={6} data-aos="fade-up">
                            <Style.WrapperProtocol>
                                <Style.ProtocolTitle>Mencuci Tangan</Style.ProtocolTitle>
                                    <Style.ProtocolDescription>
                                        Akan banyak jabat tangan dengan semua orang di sana. Jadi cuci tanganmu setelahnya, atau bawa hand sanitizer untuk menjaga tanganmu tetap bersih.
                                    </Style.ProtocolDescription>
                            </Style.WrapperProtocol>
                        </Style.GridProtocol>
                    </Style.GridContainer>

                    <Style.GridContainer container>
                        <Style.GridItem item xs={12} sm={6}>
                            <Style.ProtocolImage data-aos="fade-in" src={Distance} alt="keep-the-distance" width="800" height="450"/>
                        </Style.GridItem>
                        <Style.GridProtocol item xs={12} sm={6} data-aos="fade-up">
                            <Style.WrapperProtocol>
                                <Style.ProtocolTitle>Menjaga Jarak</Style.ProtocolTitle>
                                    <Style.ProtocolDescription>
                                        Kami mengimbau untuk selalu menjaga jarak dengan orang lain. Dan jika Kamu merasa tidak enak badan, silakan tinggalkan area venue.
                                    </Style.ProtocolDescription>
                            </Style.WrapperProtocol>
                        </Style.GridProtocol>
                    </Style.GridContainer>

                </Style.InnerContainer>
            </Style.ContainerProtocol>
        </>
    )
}

export default Protocol;
