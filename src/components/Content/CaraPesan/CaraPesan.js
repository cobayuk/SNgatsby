import React from "react";
import {
  Grid,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import OrnamentFour from "@assets/ornaments/header-tagline/ornament-four.svg";
import ButtonOrderNow from "@components/Buttons/OrderNow";
import * as Style from '@components/Content/CaraPesan/CaraPesanStyled';

const CaraPesan = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Style.BoxHowItWorks id="itworks">
      <Style.ContentGridCaraPesan container>
        <Grid item md={8} lg={8}>
          <Style.WrapperHeadings>
            <Style.HeadingHowToOrder variant="h1" color="inherit">
              Cara Pesan
            </Style.HeadingHowToOrder>
            <Style.HeadingItWork variant="h2" color="inherit">
              Pilih desain, tentukan paket, sung order deh.
            </Style.HeadingItWork>
            <Style.TaglineCaption variant="h6" color="inherit">
              Pilihan desainnya sudah mantap? Nah kalau udah ada pilihannya kamu tinggal pilih deh untuk fitur paket yang telah disediakan, yaitu paket Bronze, Silver, ataupun Gold. Lalu klik order untuk pemesanan lebih lanjut.
            </Style.TaglineCaption>
          </Style.WrapperHeadings>
          <Style.WrapperButtonCaraPesan>
            <ButtonOrderNow> <span>Order Sekarang</span> </ButtonOrderNow>
          </Style.WrapperButtonCaraPesan>
        </Grid>
        {isMobile ? (
          <Style.SpacerOrnamentsMobile mt={5}>
            <Grid>
              <Style.ImageTagOrnaments src={OrnamentFour} alt="ornament-four"/>
            </Grid>
          </Style.SpacerOrnamentsMobile>
        ) : (
          <Grid item md={4} lg={4}>
            <img src={OrnamentFour} alt="ornament-four" />
          </Grid>
        )}
      </Style.ContentGridCaraPesan>
    </Style.BoxHowItWorks>
  );
}

export default CaraPesan;
