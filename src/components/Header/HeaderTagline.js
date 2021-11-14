import React from "react";
import {
  Box,
  Grid,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import CircleLove from "@assets/logo/decoration/circle-love.svg";
import OrnamentOne from "@assets/ornaments/header-tagline/ornament-one.svg";
import OrnamentTwo from "@assets/ornaments/header-tagline/ornament-two.svg";
import OrnamentThree from "@assets/ornaments/header-tagline/ornament-three.svg";
import OrnamentFour from "@assets/ornaments/header-tagline/ornament-four.svg";
import ButtonOrderNow from "@components/Buttons/OrderNow";
import * as Style from '@components/Header/HeaderTaglineStyled';

const HeaderTagline = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Style.BoxHeader>
      {isMobile ? (
        <>
          <Grid container>
            <Grid item xs={6} md={6}>
              <Style.HeadingTagline> Buat langsung undangan nikah kamu secara cepat dan murah.</Style.HeadingTagline>
              <Style.ParagraphTagline color="inherit">
                Dengan banyak pilihan desain yang elegan, minimalis dan
                responsif. Cocok bagi kamu yang ingin tampil beda di undangan
                digital pernikahan kamu.
              </Style.ParagraphTagline>
              <ButtonOrderNow> Order Sekarang </ButtonOrderNow>
            </Grid>
            <Grid item xs={6} md={6}>
              <Style.BoxOrnamentsOne>
                <img src={OrnamentOne} alt="ornament-one"/>
              </Style.BoxOrnamentsOne>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Grid>
              <Style.BoxOrnamentsFour>
                <Style.ImageTagOrnaments src={OrnamentFour} alt="ornament-four"/>
              </Style.BoxOrnamentsFour>
            </Grid>
          </Box>
        </>
      ) : (
        <>
          <Grid item md={6} lg={6}>
            <Style.HeadingTagline> Buat langsung undangan nikah kamu secara cepat dan murah.</Style.HeadingTagline>
            <Style.ParagraphTagline color="inherit">
              Dengan banyak pilihan desain yang elegan, minimalis dan
              responsif. Cocok bagi kamu yang ingin tampil beda di undangan
              digital pernikahan kamu.
            </Style.ParagraphTagline>
            <ButtonOrderNow> Order Sekarang </ButtonOrderNow>
          </Grid>

          <Grid item md={6} lg={6}>
            <Style.BoxReactangleSmall>
              <Style.IconCircleLove src={CircleLove} alt="circle-love"/>
              <Style.HeadingLove>
                Kamu berhasil mengatur waktu tanggal pernikahan kamu.
              </Style.HeadingLove>
            </Style.BoxReactangleSmall>

            <Style.BoxOrnamentsOne>
              <img src={OrnamentOne} alt="ornament-one"/>
            </Style.BoxOrnamentsOne>
            <Style.BoxOrnamentsTwo>
              <img src={OrnamentTwo} alt="ornament-two"/>
            </Style.BoxOrnamentsTwo>
            <Style.BoxOrnamentsThree>
              <img src={OrnamentThree} alt="ornament-three"/>
            </Style.BoxOrnamentsThree>
            <Style.BoxOrnamentsFour>
              <img src={OrnamentFour} alt="ornament-four"/>
            </Style.BoxOrnamentsFour>
          </Grid>

        </>
      )}
    </Style.BoxHeader>
  );
}

export default HeaderTagline
