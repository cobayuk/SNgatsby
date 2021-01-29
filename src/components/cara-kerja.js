import React from "react";
import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import { COLORS } from "../styles/constants";

const useStyles = makeStyles((theme) => ({
  boxHowitWork: {
    marginTop: '24em'
  },
  headingItWork: {
    fontFamily: 'Oxygen',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '30px',
    lineHeight: '61px',
  },
  taglineCaption: {
    fontFamily: 'Oxygen',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '25px',
    color: '#928D97',
    display: 'flex',
    marginBottom: '30px'
  }
}));

const CaraKerja = () => {

  const classes = useStyles();

  return (
    <Box className={classes.boxHowitWork} id="itworks">
      <Grid container>
        <Grid item md={8} lg={8}>
          <h2 className={classes.headingItWork}> Bagaimana cara kerja di Sungnikah?</h2>
          <Typography variant="h6" color="inherit" className={classes.taglineCaption}>
            Sungnikah merupakan penyedia jasa tetek bengek pernikahan seperti desain jada pembuatan wedding website, jada desain seserahan, dan desain undangan.
          </Typography>
        </Grid>
        <Grid item md={4} lg={4}>

        </Grid>
      </Grid>
    </Box>
  );
}

export default CaraKerja
