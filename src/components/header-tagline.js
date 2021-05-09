import React from "react";
import {
  Grid,
  Box,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import { COLORS } from "../styles/constants";
import CircleLove from "../assets/logo/decoration/circle-love.svg";
import OrnamentOne from "../assets/ornaments/header-tagline/ornament-one.svg";
import OrnamentTwo from "../assets/ornaments/header-tagline/ornament-two.svg";
import OrnamentThree from "../assets/ornaments/header-tagline/ornament-three.svg";
import OrnamentFour from "../assets/ornaments/header-tagline/ornament-four.svg";

const useStyles = makeStyles((theme) => ({
  boxHeader: {
    width: '100%',
    height: '600px',
    backgroundColor: `#F1EDEA`,
    border: '1px solid #f7f7f7',
    borderRadius: '20px',
    padding: theme.spacing(7, 6.3, 0, 6),
    marginTop: theme.spacing(9)
  },
  headingTagline: {
    fontFamily: 'Oxygen',
    fontStyle: 'normal',
    fontHeight: 'bold',
    fontSize: '48px',
    lineHeight: '61px',
  },
  paragraphTagline: {
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '25px',
    color: '#928D97',
    marginTop: '3em'
  },
  orderNow: {
    top: 50,
    width: '155px',
    height: '50px',
    background: '#F2A76D',
    borderRadius: '30px',
    display: 'flex',
    fontFamily: 'Oxygen',
    color: `${COLORS.white}`,
    fontWeight: 'bold',
    fontSize: '15px',
    border: `5px solid ${COLORS.white}`
  },
  boxReactangleSmall: {
    width: '230px',
    height: '57px',
    left: 28,
    top: 256,
    display: 'flex',
    backgroundColor: '#EE6E53',
    borderRadius: '15px',
    color: `${COLORS.white}`,
    padding: '10px',
    position: 'relative',
    zIndex: 10,
  },
  headingLove: {
    fontSize: '12px',
  },
  iconCircleLove: {
    paddingRight: 10
  },
  ornamentsOne: {
    display: 'flex',
    position: 'relative',
    right: '-12em',
    top: '-12em',
    float: 'left'
  },
  ornamentsTwo: {
    display: 'flex',
    position: 'relative',
    top: '0',
    left: '50px',
    float: 'right'
  },
  ornamentsThree: {
    display: 'flex',
    position: 'relative',
    right: '-2em',
    top: '-5em',
    float: 'right'
  },
  ornamentsFour: {
    display: 'flex',
    position: 'relative',
    float: 'left',
    top: '-35em',
    right: '21em'
  }
}));

const HeaderTagline = () => {

  const classes = useStyles();

  return (
    <Box className={classes.boxHeader}>
      <Grid container>
        <Grid item md={6} lg={6}>
          <h2 className={classes.headingTagline}> Buat langsung undangan nikah kamu secara cepat dan murah.</h2>
          <Typography variant="h6" color="inherit" className={classes.paragraphTagline}>
            Dengan banyak pilihan desain yang elegan, minimalis dan
            responsif. Cocok bagi kamu yang ingin tampil beda di undangan
            digital pernikahan kamu.
          </Typography>
          <Button className={classes.orderNow}>Mau Pesan</Button>
        </Grid>
        <Grid item md={6} lg={6}>
          <Box className={classes.boxReactangleSmall}>
            <img src={CircleLove} alt="cirlce-love" className={classes.iconCircleLove}/>
            <Typography className={classes.headingLove}>
              Kamu berhasil mengatur waktu tanggal pernikahan kamu.
            </Typography>
          </Box>
          <Box className={classes.ornamentsOne}>
            <img src={OrnamentOne} alt="ornament-one" />
          </Box>
          <Box className={classes.ornamentsTwo}>
            <img src={OrnamentTwo} alt="ornament-two" />
          </Box>
          <Box className={classes.ornamentsThree}>
            <img src={OrnamentThree} alt="ornament-three" />
          </Box>
          <Box className={classes.ornamentsFour}>
            <img src={OrnamentFour} alt="ornament-four" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeaderTagline
