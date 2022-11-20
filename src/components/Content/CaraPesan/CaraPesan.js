import React from "react";
import { Grid } from '@material-ui/core';
import OrnamentFour from "@assets/ornaments/header-tagline/ornament-four.svg";
import ButtonOrderNow from "@components/Buttons/OrderNow";
import * as Style from './CaraPesanStyled';

const CaraPesan = () => {


  return (
    <Style.BoxHowItWorks id="itworks">
      <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <Style.ImageTagOrnaments src={OrnamentFour} alt="ornament-four"/>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Style.HeadingHowToOrder variant="h1" color="inherit">Cara Pesan</Style.HeadingHowToOrder>
          <Style.WrapperHeadings>
            <Style.HeadingItWork variant="h2" color="inherit">
              Pilih desain, tentukan paket, sung order deh.
            </Style.HeadingItWork>
            <Style.TaglineCaption>
              Pilihan desainnya sudah mantap? Nah kalau udah ada pilihannya kamu tinggal pilih deh untuk fitur paket yang telah disediakan, yaitu paket Bronze, Silver, ataupun Gold. Lalu klik order untuk pemesanan lebih lanjut.
            </Style.TaglineCaption>
          </Style.WrapperHeadings>
          <Style.WrapperButtonCaraPesan>
            <ButtonOrderNow> <span>Order Sekarang</span> </ButtonOrderNow>
          </Style.WrapperButtonCaraPesan>
        </Grid>
      </Grid>
    </Style.BoxHowItWorks>
  );
}

export default CaraPesan;
