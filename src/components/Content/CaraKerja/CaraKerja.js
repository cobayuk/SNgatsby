import React from "react";
import {
  Box,
  Grid,
  Container
}
from '@material-ui/core';
import IlustrationsOne from "@assets/ornaments/cara-kerja/ilustration-one.svg";
import IlustrationsTwo from "@assets/ornaments/cara-kerja/ilustration-two.svg";
import IlustrationsThree from "@assets/ornaments/cara-kerja/ilustration-three.svg";
import * as Style from '@components/Content/CaraKerja/CaraKerjaStyled';

const CaraKerja = () => {
  return (
    <Style.BoxHowItWorks id="howitworks">
      <Container
        maxWidth="md"
        component="main"
      >
        <Grid container>
          <Grid item md={12} lg={12}>
            <Style.HeadingItWork
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
            >
              Tentang Kami
            </Style.HeadingItWork>
            <Style.TaglineCaption
              component="h2"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Bagaimana kami bekerja <br/> untuk kamu.
            </Style.TaglineCaption>
            <Style.TaglineDescription
              variant="h3"
              align="center"
              color="textSecondary"
              component="p"
            >
              Dengan Fitur ini sekarang kamu mudah memilih desain sesuai keiginan kamu dan engga perlu ribet lagi.
            </Style.TaglineDescription>
          </Grid>
        </Grid>
      </Container>
      {/* <Box mt={10} mb={5}>
        <Grid container>
          <Grid item md={6} lg={6}>
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Style.ImageIlustration src={IlustrationsOne} alt="ilustration-one" width="540" height="457"/>
            </Box>
          </Grid>
          <Grid item md={6} lg={6}>
            <Box mt={20}>
              <Style.HeadingIlustration
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
              >
                Pilih Tema Kece Kamu Sendiri
              </Style.HeadingIlustration>
              <Style.DescriptionChooseThemeKece
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
              >
                Sesuaikan tema dan mood kamu sendiri dengan cara klik order sekarang atau langsung aja ke menu demo ya kak, disana banyak varian desain yang mungkin cocok untuk kamu. Selamat mencoba
              </Style.DescriptionChooseThemeKece>
            </Box>
          </Grid>
          <Grid item md={6} lg={6}>
            <Box mt={20}>
              <Style.HeadingIlustration
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
              >
                Isi Data Diri Kamu dan Calon Mempelai
              </Style.HeadingIlustration>
              <Style.DescriptionChooseThemeKece
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
              >
                Silahkan isi lengkap data diri kamu beserta data calon mempelai untuk kebutuhan undangan digital yang kamu inginkan dan langsung submit.
              </Style.DescriptionChooseThemeKece>
            </Box>
          </Grid>
          <Grid item md={6} lg={6}>
            <Box
              display="flex"
              alignItems="flex-end"
              justifyContent="flex-end"
            >
              <Style.ImageIlustration src={IlustrationsTwo} alt="ilustration-one" width="540" height="457"/>
            </Box>
          </Grid>
          <Grid item md={6} lg={6}>
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Style.ImageIlustration src={IlustrationsThree} alt="ilustration-one" width="540" height="457"/>
            </Box>
          </Grid>
          <Grid item md={6} lg={6}>
            <Box mt={20}>
              <Style.HeadingIlustration
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
              >
                Tunggu Proses Verifikasi Data
              </Style.HeadingIlustration>
              <Style.DescriptionChooseThemeKece
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
              >
                Setelah mengisi formulir dan data diri selanjutnya kamu akan diberikan invoice terkait informasi paket dipilih serta total tagihan yang harus dibayar. Setelah melakukan pembayaran jangan lupa kirim bukti pemesanannya ya.
              </Style.DescriptionChooseThemeKece>
            </Box>
          </Grid>
        </Grid>
      </Box> */}
    </Style.BoxHowItWorks>
  );
}

export default CaraKerja
