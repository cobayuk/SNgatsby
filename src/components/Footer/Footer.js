import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Link,
  Container,
  CssBaseline
}
from '@material-ui/core';
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
          <Grid item xs={12} md={12} lg={12}>
            <Style.HeadingBanner>
              Tunggu apa lagi? Pesan sekarang juga!
            </Style.HeadingBanner>
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
