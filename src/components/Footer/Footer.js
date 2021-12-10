import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  Link,
  Container,
  CssBaseline,
  Typography
}
from '@material-ui/core';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import BrandLogo from "@assets/logo/brand.svg";
import PaymentGroup from "@assets/payments/icon-payment.svg";
import * as Style from '@components/Footer/FooterStyled';

const Copyright = ({ titles }) => {
  return (
    <Style.HeadingCopyright variant="body2" color="textSecondary">
      {'©'}
      <Link color="inherit" href="#">
        {`2021 ${titles}.com,`}&nbsp;
      </Link>
      {'All Right Reserved'}
    </Style.HeadingCopyright>
  );
}

const Footer = () => {
  return (
    <>
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
      <Style.InnerFooter>
        <Grid container>
          <Grid item xs={12} md={3} lg={3}>
            <Box pl={4} pt={4}>
              <Style.ImageBrandFooter src={BrandLogo} alt="sungnikah" />
              <Typography>
                Cara pandai membuat undangan  
                masa kini ya sungnikah aja !
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Box pl={4} pt={4}>
              <Style.HeadingInnerFooter>
                Metode Pembayaran
              </Style.HeadingInnerFooter>
              <img src={PaymentGroup} alt="payment-icon" />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Box pl={4} pt={4}>
              <Style.HeadingInnerFooter>
                Sungnikah
              </Style.HeadingInnerFooter>
              <Grid container>
                <Grid item xs={6} md={6} lg={6}>
                  <ul>
                    <Style.NavList>Cara Pesan</Style.NavList>
                    <Style.NavList>Tentang Kami</Style.NavList>
                    <Style.NavList>FAQ (Tanya Jawab)</Style.NavList>
                  </ul>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <ul>
                    <Style.NavList>Paket Harga</Style.NavList>
                    <Style.NavList>Demo</Style.NavList>
                    <Style.NavList>Syarat dan Ketentuan</Style.NavList>
                  </ul>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Box pl={4} pt={4}>
              <Style.HeadingInnerFooter>
                Lebih Dekat Dengan Kami
              </Style.HeadingInnerFooter>
              <Box mt={5}>
                <Grid container>
                  <Grid item xs={4} md={4} lg={4}>
                    <SocialMediaIconsReact 
                      borderColor="rgba(0,0,0,0.25)" 
                      borderWidth="4" 
                      borderStyle="solid" 
                      icon="twitter" 
                      iconColor="rgba(255,255,255,1)" 
                      backgroundColor="rgba(255,176,44,1)" 
                      iconSize="0" 
                      roundness="50%" 
                      url="https://www.facebook.com/sungnikah/" 
                      size="48" 
                    />
                  </Grid>
                  <Grid item xs={4} md={4} lg={4}>
                    <SocialMediaIconsReact 
                      borderColor="rgba(0,0,0,0.25)" 
                      borderWidth="4" 
                      borderStyle="solid" 
                      icon="instagram" 
                      iconColor="rgba(255,255,255,1)" 
                      backgroundColor="rgba(255,176,44,1)" 
                      iconSize="0" 
                      roundness="50%" 
                      url="https://www.instagram.com/sungnikah/" 
                      size="48" 
                    />
                  </Grid>
                  <Grid item xs={4} md={4} lg={4}>
                    <SocialMediaIconsReact 
                      borderColor="rgba(0,0,0,0.25)" 
                      borderWidth="4" 
                      borderStyle="solid" 
                      icon="whatsapp" 
                      iconColor="rgba(255,255,255,1)" 
                      backgroundColor="rgba(255,176,44,1)" 
                      iconSize="0" 
                      roundness="50%"
                      url="#" 
                      size="48" 
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Style.InnerFooter>
      <Style.SubFooter>
        <Copyright titles="Sungnikah"/>
      </Style.SubFooter>
    </>
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