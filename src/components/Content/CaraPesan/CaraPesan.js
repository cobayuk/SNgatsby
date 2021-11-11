import React from "react";
import {
  Box,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import OrnamentFour from "@assets/ornaments/header-tagline/ornament-four.svg";
import ButtonOrderNow from "../../buttons/ordernow";
import { COLORS } from "../../../styles/constants";

const useStyles = makeStyles((theme) => ({
  boxHowitWork: {
    display: 'flex',
    marginTop: theme.spacing(50),
    padding: theme.spacing(0, 10, 0, 10),
    paddingTop: '50px'
  },
  headingItWork: {
    fontFamily: 'Oxygen',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '30px',
    lineHeight: 1.4,
    margin: theme.spacing(2, 0, 3, 0)
  },
  headingHowToOrder: {
    fontFamily: 'Oxygen',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    color: COLORS.brownSugar,
    textTransform: 'uppercase'
  },
  taglineCaption: {
    fontFamily: 'Oxygen',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '25px',
    color: COLORS.graySoftly,
    display: 'flex',
    marginBottom: theme.spacing(2)
  }
}));

const CaraPesan = () => {
  const classes = useStyles();

  return (
    <Box className={classes.boxHowitWork} id="itworks">
      <Grid container>
        <Grid item md={8} lg={8}>
          <Box pr={16}>
            <Typography variant="h1" color="inherit" className={classes.headingHowToOrder}>
              Cara Pesan
            </Typography>
            <Typography variant="h2" color="inherit" className={classes.headingItWork}>
              Pilih desain, tentukan paket, sung order deh.
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.taglineCaption}>
              Pilihan desainnya sudah mantap? Nah kalau udah ada pilihannya kamu tinggal pilih deh untuk fitur paket yang telah disediakan, yaitu paket Bronze, Silver, ataupun Gold. Lalu klik order untuk pemesanan lebih lanjut.
            </Typography>
          </Box>
          <ButtonOrderNow> Order Sekarang </ButtonOrderNow>
        </Grid>
        <Grid item md={4} lg={4}>
          <img src={OrnamentFour} alt="ornament-four" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CaraPesan;
