import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  Link,
  Container,
  CssBaseline
}
from '@material-ui/core';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import BrandLogo from "@assets/logo/brand.svg";
import PaymentGroup from "@assets/payments/icon-payment.svg";
import * as Style from '@components/Footer/FooterStyled';

const Copyright = ({ titles }) => {

  let year = new Date().getFullYear();

  return (
    <Style.HeadingCopyright variant="body2" color="textSecondary">
      {'©'}
      <Link color="inherit" to="/">
        {`${year} ${titles}.com,`}&nbsp;
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
              <Style.OrderContainer>
                <Style.OuterOrderButton>
                  <Style.OrderNow href="https://wa.me/6287872136170?text=Halo%20Tim Sungnikah%2C%20saya%20ingin%20bertanya" target="_blank">Order Sekarang</Style.OrderNow>
                </Style.OuterOrderButton>
                
              </Style.OrderContainer>  
            </Grid>
          </Grid>
        </Container>
      </Style.MainFooter>
      <Style.InnerFooter>
        <Grid container>
          <Grid item xs={12} md={3} lg={3}>
            <Style.InnerContainer>
              <Style.ImageBrandFooter src={BrandLogo} alt="sungnikah" />
              {/* <Typography>
                Cara pandai membuat undangan  
                masa kini ya sungnikah aja !
              </Typography> */}
            </Style.InnerContainer>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Style.InnerContainer>
              <Style.HeadingInnerFooter>
                Metode Pembayaran
              </Style.HeadingInnerFooter>
              <Style.AccountList src={PaymentGroup} alt="payment-icon" />
            </Style.InnerContainer>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Style.InnerContainer>
              <Style.HeadingInnerFooter>
                Sungnikah
              </Style.HeadingInnerFooter>
              <Grid container>
                <Grid item xs={6} md={6} lg={6}>
                  <ul>
                    <li>
                      <Style.NavList>Cara Pesan</Style.NavList>
                    </li>
                    <li>
                      <Style.NavList>Tentang Kami</Style.NavList>
                    </li>
                    <li>
                      <Style.NavList>FAQ (Tanya Jawab)</Style.NavList>
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <ul>
                    <li>
                      <Style.NavList>Paket Harga</Style.NavList>
                    </li>
                    <li>
                      <Style.NavList>Demo</Style.NavList>
                    </li>
                    <li>
                      <Style.NavList>Syarat dan Ketentuan</Style.NavList>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Style.InnerContainer>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Style.InnerContainer>
              <Style.HeadingInnerFooter>
                Lebih Dekat Dengan Kami
              </Style.HeadingInnerFooter>
              <Box mt={5}>
                <Grid container>
                  <Style.LeftGrid item xs={4} md={4} lg={4}>
                    <SocialMediaIconsReact 
                      borderColor="white" 
                      borderWidth="2" 
                      borderStyle="solid" 
                      icon="facebook" 
                      iconColor="rgba(255,255,255,1)" 
                      backgroundColor="rgba(255,176,44,1)" 
                      iconSize="0" 
                      roundness="50%" 
                      url="https://www.facebook.com/sungnikah/" 
                      size="37" 
                    />
                  </Style.LeftGrid>
                  <Style.LeftGrid item xs={4} md={4} lg={4}>
                    <SocialMediaIconsReact 
                      borderColor="white" 
                      borderWidth="2" 
                      borderStyle="solid" 
                      icon="instagram" 
                      iconColor="rgba(255,255,255,1)" 
                      backgroundColor="rgba(255,176,44,1)" 
                      iconSize="0" 
                      roundness="50%" 
                      url="https://www.instagram.com/sungnikah/" 
                      size="37" 
                    />
                  </Style.LeftGrid>
                  <Style.LeftGrid item xs={4} md={4} lg={4}>
                    <SocialMediaIconsReact 
                      borderColor="white" 
                      borderWidth="2" 
                      borderStyle="solid" 
                      icon="whatsapp" 
                      iconColor="rgba(255,255,255,1)" 
                      backgroundColor="rgba(255,176,44,1)" 
                      iconSize="0" 
                      roundness="50%"
                      url="https://wa.me/6287872136170?text=Halo%20Tim Sungnikah%2C%20saya%20ingin%20bertanya"
                      size="37" 
                    />
                  </Style.LeftGrid>
                </Grid>
              </Box>
            </Style.InnerContainer>
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