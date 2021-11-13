import React from "react";
import {
  Grid,
  Container,
  CssBaseline
}
from '@material-ui/core';
import * as Style from '@components/Footer/FooterStyled';

const FaqContent = () => {
  return (
    <Style.MainFooter>
      <CssBaseline />
      <Container fixed>
        <Grid container>
          <Grid item lg={12}>

          </Grid>
        </Grid>
      </Container>
    </Style.MainFooter>
  );
}

export default FaqContent
