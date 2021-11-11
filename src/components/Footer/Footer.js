import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Link,
  // Avatar,
  Container,
  // Typography,
  CssBaseline
}
from '@material-ui/core';
// import Gopay from '@assets/logo/digital-payment/gopay.svg';
import * as Style from '@components/Footer/FooterStyled';

const Copyright = ({ titles }) => {
  return (
    <Style.HeadingCopyright variant="body2" color="textSecondary">
      {'©'}
      <Link color="inherit" href="#">
        {`${titles}.com`}
      </Link>
      {',All Right Reserved'}
    </Style.HeadingCopyright>
  );
}

const Footer = () => {
  return (
    <Style.MainFooter>
      <CssBaseline />
      <Container fixed>
        <Grid container>
          <Grid item lg={3}>

          </Grid>
        </Grid>
      </Container>
    </Style.MainFooter>
  );
}

Footer.propTypes = {
  siteTitle: PropTypes.node.isRequired,
}

Copyright.propTypes = {
  titles: PropTypes.node.isRequired
}

Footer.defaultProps = {
  siteTitle: "Sungnikah",
}

Copyright.defaultProps = {
  titles: ''
}

export default Footer
