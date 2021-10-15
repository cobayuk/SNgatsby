import React from "react";
import { COLORS, FONT_FAMILY } from "@styles/constants";
import IlustrationsOne from "@assets/ornaments/cara-kerja/ilustration-one.svg";
import IlustrationsTwo from "@assets/ornaments/cara-kerja/ilustration-two.svg";
import IlustrationsThree from "@assets/ornaments/cara-kerja/ilustration-three.svg";
import {
  Box,
  Grid,
  Container,
  Typography,
  makeStyles
}
from '@material-ui/core';

const useStyles = makeStyles((themes) => ({
  boxHowitWork: {
    paddingTop: '50px'
  },
  headingItWork: {
    fontSize: '20px',
    fontFamily: `${FONT_FAMILY.oxygen}`,
    fontWeight: 'bold',
    color: COLORS.brownSugar,
    textTransform: 'uppercase',
    marginBottom: themes.spacing(2)
  },
  taglineCaption: {
    fontSize: '40px',
    fontFamily: `${FONT_FAMILY.oxygen}`,
    fontWeight: 'bold',
    color: COLORS.black
  },
  taglineDescription: {
    fontSize: '15px'
  },
  headingIlustration: {
    textAlign: 'left',
    color: COLORS.black,
    fontWeight: 'bold',
    fontFamily: `${FONT_FAMILY.oxygen}`,
    marginBottom: themes.spacing(3)
  },
  descriptionChooseThemeKece: {
    fontSize: '15px',
    textAlign: 'left',
    fontFamily: `${FONT_FAMILY.oxygen}`,
  },
  ilustrationSpace: {
    padding: themes.spacing(4)
  }
}));

const CaraKerja = () => {

  const classes = useStyles();

  return (
    <Box className={classes.boxHowitWork} id="howitworks">
      <Container
        maxWidth="md"
        component="main"
        className={classes.heroContent}
      >
        <Grid container>
          <Grid item md={12} lg={12}>
            <Typography
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              className={classes.headingItWork}
            >
              Tentang Kami
            </Typography>
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              className={classes.taglineCaption}
            >
              Bagaimana kami bekerja <br/> untuk kamu.
            </Typography>
            <Typography
              variant="h3"
              align="center"
              color="textSecondary"
              component="p"
              className={classes.taglineDescription}
            >
              Dengan Fitur ini sekarang kamu mudah memilih desain sesuai keiginan kamu dan engga perlu ribet lagi.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box mt={10} mb={5}>
        <Grid container>
          <Grid item md={6} lg={6}>
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <img src={IlustrationsOne} alt="ilustration-one" width="540" height="457" className={classes.ilustrationSpace}/>
            </Box>
          </Grid>
          <Grid item md={6} lg={6}>
            <Box mt={20}>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
                className={classes.headingIlustration}
              >
                Pilih Tema Kece Kamu Sendiri
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
                className={classes.descriptionChooseThemeKece}
              >
                Sesuaikan tema dan mood kamu sendiri dengan cara klik order sekarang atau langsung aja ke menu demo ya kak, disana banyak varian desain yang mungkin cocok untuk kamu. Selamat mencoba
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} lg={6}>
            <Box mt={20}>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
                className={classes.headingIlustration}
              >
                Isi Data Diri Kamu dan Calon Mempelai
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
                className={classes.descriptionChooseThemeKece}
              >
                Silahkan isi lengkap data diri kamu beserta data calon mempelai untuk kebutuhan undangan digital yang kamu inginkan dan langsung submit.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} lg={6}>
            <Box
              display="flex"
              alignItems="flex-end"
              justifyContent="flex-end"
            >
              <img src={IlustrationsTwo} alt="ilustration-one" width="540" height="457" className={classes.ilustrationSpace}/>
            </Box>
          </Grid>
          <Grid item md={6} lg={6}>
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <img src={IlustrationsThree} alt="ilustration-one" width="540" height="457" className={classes.ilustrationSpace}/>
            </Box>
          </Grid>
          <Grid item md={6} lg={6}>
            <Box mt={20}>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
                className={classes.headingIlustration}
              >
                Tunggu Proses Verifikasi Data
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
                className={classes.descriptionChooseThemeKece}
              >
                Setelah mengisi formulir dan data diri selanjutnya kamu akan diberikan invoice terkait informasi paket dipilih serta total tagihan yang harus dibayar. Setelah melakukan pembayaran jangan lupa kirim bukti pemesanannya ya.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default CaraKerja
