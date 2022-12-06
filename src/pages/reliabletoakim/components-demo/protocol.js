import React, { useEffect } from "react";
import * as Style from "@styles/temporary/reliabletoakim/protocolStyle";
import WearMask from "@assets/protocol/simple-protocol.jpg";
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
                    <Style.IntroProtocol data-aos="fade-down">Attention</Style.IntroProtocol>
                    <Style.SummaryProtocol data-aos="fade-up">
                    Tanpa mengurangi rasa hormat, dikarenakan situasi yang sedang terjadi ditengah pandemi COVID-19 ini kami memohon maaf karena acara akan diselenggarakan sesuai peraturan dan imbauan pemerintah.
                    </Style.SummaryProtocol>

                    <Style.GridContainer container>
                        <Style.GridItem item xs={12} sm={12}>
                            <Style.ProtocolImage data-aos="fade-in" src={WearMask} alt="wear-mask" width="800" height="450"/>
                        </Style.GridItem>
                    </Style.GridContainer>



                </Style.InnerContainer>
            </Style.ContainerProtocol>
        </>
    )
}

export default Protocol;
