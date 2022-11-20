import React from "react";
import {
  Grid,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import CircleLove from "@assets/logo/decoration/circle-love.svg";
import OrnamentOne from "@assets/ornaments/header-tagline/ornament-one.svg";
import OrnamentTwo from "@assets/ornaments/header-tagline/ornament-two.svg";
import OrnamentThree from "@assets/ornaments/header-tagline/ornament-three.svg";
import OrnamentFour from "@assets/ornaments/header-tagline/ornament-four.svg";
import ButtonSeeDemo from "@components/Buttons/SeeDemo";

import * as Style from '@components/Header/HeaderTaglineStyled';
import './HeaderTagline.css';

const HeaderTagline = () => {

  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery('(max-width:1023px)')

  return (
    <Style.BoxHeader>
      <Grid container>
        {isMobile ? (
          <>
            <Grid item xs={6} md={6}>
              <Style.HeadingTagline> Buat langsung undangan nikah kamu secara cepat dan murah.</Style.HeadingTagline>
              <Style.ParagraphTagline color="inherit">
                Dengan banyak pilihan desain yang elegan, minimalis dan
                responsif. Cocok bagi kamu yang ingin tampil beda di undangan
                digital pernikahan kamu.
              </Style.ParagraphTagline>
              <ButtonSeeDemo>
                <span>
                  Lihat Demo
                  <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icon-arrow svg-inline--fa fa-arrow-up fa-w-14 fa-7x"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
                  </svg>
                </span>
              </ButtonSeeDemo>
            </Grid>
            <Grid item xs={6} md={6}>
              <Style.BoxOrnamentsOne>
                <img src={OrnamentOne} alt="ornament-one"/>
              </Style.BoxOrnamentsOne>
            </Grid>
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
              <ButtonSeeDemo>
                <span>
                  Lihat Demo
                  <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icon-arrow svg-inline--fa fa-arrow-up fa-w-14 fa-7x"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
                  </svg>
                </span>
              </ButtonSeeDemo>
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
      </Grid>
    </Style.BoxHeader>
  );
}

export default HeaderTagline
