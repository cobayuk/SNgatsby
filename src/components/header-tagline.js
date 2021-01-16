import React from "react";
import { Grid, Box, Typography, makeStyles, Button } from '@material-ui/core';
import { COLORS } from "../styles/constants";

const useStyles = makeStyles((theme) => ({
  boxHeader: {
    width: '100%',
    height: '600px',
    backgroundColor: `#F1EDEA`,
    border: '1px solid #f7f7f7',
    borderRadius: '20px',
    padding: '60px 50px 0 72px',
    marginTop: '50px'
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
  }
}));

const HeaderTagline = () => {

  const classes = useStyles();

  return (
    <Box className={classes.boxHeader}>
      <Grid container>
        <Grid item md={6} lg={6}>
          <h2 className={classes.headingTagline}> Buat langsung undangan nikah kamu secara cepat dan murah.</h2>
          <Typography className={classes.paragraphTagline}>
            Sungnikah merupakan penyedia jasa tetek bengek pernikahan seperti desain jada pembuatan wedding website, jada desain seserahan, dan desain undangan.
          </Typography>
          <Button className={classes.orderNow}>Mau Pesan</Button>
        </Grid>
        <Grid item md={6} lg={6}>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeaderTagline
