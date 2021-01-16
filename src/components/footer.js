import React from "react";
import { Grid, Avatar, Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { COLORS } from "../styles/constants";
import Link from '@material-ui/core/Link';
import PropTypes from "prop-types";
import * as Style from '../styles/footer/footerStyled';

const Copyright = ({siteTitle}) => {
  return (
    <Style.HeadingCopyright variant="body2" color="textSecondary">
      {'©'}
      <Link color="inherit" href="https://material-ui.com/">
        {`${siteTitle}.com`}
      </Link>
      {',All Right Reserved'}
    </Style.HeadingCopyright>
  );
}

const Footer = ({ siteTitle }) => {
  return (
    <Style.MainFooter>
      <CssBaseline />
      <Container fixed>
        <Grid container>
          <Grid item lg={3}>
            <Style.HeadingWeLoveBuild variant="body1">
              We Love To Build Right
            </Style.HeadingWeLoveBuild>
            <Style.HeadingTaglineBrand variant="p">
              Sungnikah.com cara pandai dan hemat membuat undangan digital.
            </Style.HeadingTaglineBrand>
            <Copyright siteTitle={siteTitle} />
          </Grid>
          <Style.ContainerDigitalPayment item lg={3}>
            <Style.HeadingPaymentDigital variant="body1">
              Pembayaran Digital
            </Style.HeadingPaymentDigital>
            <Grid container>
              <Style.GridCenter item lg={3}>
                <Style.WrapperInline>
                  <Avatar>O</Avatar>
                  <Typography>OVO</Typography>
                </Style.WrapperInline>
              </Style.GridCenter>
              <Style.GridCenter item lg={3}>
                <Style.WrapperInline>
                  <Avatar>D</Avatar>
                  <Typography>DANA</Typography>
                </Style.WrapperInline>
              </Style.GridCenter>
              <Style.GridCenter item lg={3}>
                <Style.WrapperInline>
                  <Avatar>LA</Avatar>
                  <Typography>LINK AJA</Typography>
                </Style.WrapperInline>
              </Style.GridCenter>
              <Style.GridCenter item lg={3}>
                <Style.WrapperInline>
                  <Avatar>G</Avatar>
                  <Typography>GOPAY</Typography>
                </Style.WrapperInline>
              </Style.GridCenter>
            </Grid>
          </Style.ContainerDigitalPayment>
          <Style.ContainerDigitalConventional item lg={3}>
            <Style.HeadingPaymentConvention variant="body1">
              Pembayaran Konvensional
            </Style.HeadingPaymentConvention>
            <Grid container>
              <Grid item lg={4}>
                <Style.WrapperInline>
                  <Avatar>M</Avatar>
                  <Typography>Mandiri</Typography>
                </Style.WrapperInline>
              </Grid>
              <Grid item lg={4}>
                <Style.WrapperInline>
                  <Avatar>B</Avatar>
                  <Typography>BNI</Typography>
                </Style.WrapperInline>
              </Grid>
              <Grid item lg={4}>
                <Style.WrapperInline>
                  <Avatar>BC</Avatar>
                  <Typography>BCA</Typography>
                </Style.WrapperInline>
              </Grid>
            </Grid>
          </Style.ContainerDigitalConventional>
          <Grid item lg={3}>
            <Style.WrapperMediaSocial>
              <Style.BoxMediaSocial>
                <Avatar>M</Avatar>
              </Style.BoxMediaSocial>
              <Style.BoxMediaSocial>
                <Avatar>M</Avatar>
              </Style.BoxMediaSocial>
              <Style.BoxMediaSocial>
                <Avatar>M</Avatar>
              </Style.BoxMediaSocial>
              <Style.BoxMediaSocial>
                <Avatar>M</Avatar>
              </Style.BoxMediaSocial>
            </Style.WrapperMediaSocial>
          </Grid>
        </Grid>
      </Container>
    </Style.MainFooter>
  );
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
