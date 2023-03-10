import React, {useEffect} from "react";
import * as Style from "@styles/temporary/wibiade/quoteAndDatesStyle";
import { Grid } from '@material-ui/core';
import AOS from 'aos'
import 'aos/dist/aos.css';

const QuotesAndDates = () =>  {

    useEffect(() => {
        AOS.init({
            duration: 1200, // values from 0 to 3000, with step 50ms
            once: false, // whether animation should happen only once - while scrolling down
          });
    }, []);

    return(
        <>
            <Style.QuotesContainer>
                <Style.QuotesText data-aos="fade-up">
                “Bahwasanya Allah menciptakan kalian dari jenis kalian berupa perempuan sebagai istri, yang tinggal dengan kalian karena pernikahan, yang kalian lembut kepada istri-istri kalian dan condong kepadanya. Allah jadikan di antara kalian kecintaan, simpati dan kasih sayang, sungguh itu semua adalah tanda yang jelas akan ke-Maha Esaaan Allah dan kasih sayang-Nya kepada makhluk-Nya bagi kaum yang menjalankan akal mereka dan memikirkannya.”
                <br/><br/>(Q.S. Ar-Rum: 21)
                </Style.QuotesText>
                <Style.WeddingDate>Selasa, 3 Januari 2023</Style.WeddingDate>
                <Grid container>
                    <Grid item xs={6}>
                        <Style.ContainerProgram>
                            <Style.ProgramTitle>Akad Nikah</Style.ProgramTitle>
                            <Style.ProgramTime>Pukul 08:00 s/d 10.00 WIB</Style.ProgramTime>
                        </Style.ContainerProgram>
                    </Grid>
                    <Grid item xs={6}>
                        <Style.SecondContainerProgram>
                            <Style.ProgramTitle>Resepsi</Style.ProgramTitle>
                            <Style.ProgramTime>Pukul 11:00 s/d 16:00 WIB</Style.ProgramTime>
                        </Style.SecondContainerProgram>
                    </Grid>
                </Grid>
                <Style.WeddingLocation>
                    di Kediaman Mempelai Wanita
                    <br/><br/>
                    Jl. Wr. Supratman RT.06/010 No.16 Rengas - Ciputat Timur. Tangerang Selatan - Banten. Sebrang Masjid Jami Ar-Rahmah
                </Style.WeddingLocation>
                <Style.WrapperMap>
                    <Style.GoToMap href="https://goo.gl/maps/dro2ySv2d9UdgPgx6" target="_blank">View Map</Style.GoToMap>
                </Style.WrapperMap>
            </Style.QuotesContainer>
        </>
    )
}

export default QuotesAndDates;
