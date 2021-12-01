import React from "react";
import * as Style from "./quoteAndDatesStyle";
import { Grid } from '@material-ui/core';

const QuotesAndDates = () =>  {

    return(
        <>
            <Style.QuotesText>
            “Bahwasanya Allah menciptakan kalian dari jenis kalian berupa perempuan sebagai istri, yang tinggal dengan kalian karena pernikahan, yang kalian lembut kepada istri-istri kalian dan condong kepadanya. Allah jadikan di antara kalian kecintaan, simpati dan kasih sayang, sungguh itu semua adalah tanda yang jelas akan ke-Maha Esaaan Allah dan kasih sayang-Nya kepada makhluk-Nya bagi kaum yang menjalankan akal mereka dan memikirkannya.”
            <br/><br/>(Q.S. Ar-Rum: 21)
            </Style.QuotesText>
            <Style.WeddingDate>Sabtu, 11 Desember 2021</Style.WeddingDate>
            <Grid container>
                <Grid item xs={6}>
                    <Style.ContainerProgram>
                        <Style.ProgramTitle>Akad Nikah</Style.ProgramTitle>
                        <Style.ProgramTime>Pukul 09:00 - 10:00 WIB</Style.ProgramTime>
                    </Style.ContainerProgram>
                </Grid>
                <Grid item xs={6}>
                    <Style.SecondContainerProgram>
                        <Style.ProgramTitle>Resepsi</Style.ProgramTitle>
                        <Style.ProgramTime>Pukul 10:10 - 13:00 WIB</Style.ProgramTime>
                    </Style.SecondContainerProgram>
                </Grid>
            </Grid>
            <Style.WeddingLocation>
                di POKEL Garden Resto
                <br/><br/>
                Jalan Kelapa Dua no.88, Katulisan, Kecamatan Serang
                Kota Serang
            </Style.WeddingLocation>
            <Style.WrapperMap>
                <Style.GoToMap>Lihat Peta</Style.GoToMap>
            </Style.WrapperMap>
        </>
    )
}

export default QuotesAndDates;