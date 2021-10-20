import React from "react";
import {
  Grid,
  Box,
  Typography
} from '@material-ui/core';
import CircleLove from "@assets/logo/decoration/circle-love.svg";
import OrnamentOne from "@assets/ornaments/header-tagline/ornament-one.svg";
import OrnamentTwo from "@assets/ornaments/header-tagline/ornament-two.svg";
import OrnamentThree from "@assets/ornaments/header-tagline/ornament-three.svg";
import OrnamentFour from "@assets/ornaments/header-tagline/ornament-four.svg";
import ButtonOrderNow from "./buttons/ordernow";
import styled from 'styled-components';

const BoxHeader = styled(Box)`
    width: 100%;
    border: 1px solid #f7f7f7;
    height: 600px;
    padding: 56px 50px 0px 48px;
    margin-top: 72px;
    border-radius: 20px;
    background-color: #F1EDEA;
`;

const HeadingTagline = styled.h1`
    font-size: 48px;
    font-style: normal;
    font-family: Oxygen;
    font-weight: bold;
    line-height: 61px;
`;

const ParagraphTagline = styled(Typography)`
    &.MuiTypography-body1 {
      color: #928D97;
      font-size: 20px;
      margin-top: 3em;
      font-weight: normal;
      font-family: Oxygen;
      line-height: 25px;
      margin-bottom: 15px;
    } 
`;

const BoxReactangleSmall = styled(Box)`
  &.MuiBox-root {
    top: 256px;
    left: 28px;
    color: #FFFF;
    width: 230px;
    height: 57px;
    display: flex;
    padding: 10px;
    z-index: 10;
    position: relative;
    border-radius: 15px;
    background-color: #EE6E53;
  }
`;

const HeadingLove = styled(Typography)`
    &.MuiTypography-body1 {
      font-size: 12px;
    }
`;

const IconCircleLove = styled.img`
    padding-right: 10px;
`;

const OrnamentsOne = styled(Box)`
  &.MuiBox-root {
    top: -12em;
    float: left;
    right: -12em;
    display: flex;
    position: relative;
  }
`;

const OrnamentsTwo = styled(Box)`
  &.MuiBox-root {
    top: 0;
    left: 50px;
    float: right;
    display: flex;
    position: relative;
  }
`;

const OrnamentsThree = styled(Box)`
  &.MuiBox-root {
    top: -5em;
    float: right;
    right: -2em;
    display: flex;
    position: relative;
  }
`;

const OrnamentsFour = styled(Box)`
  &.MuiBox-root {
    top: -35em;
    float: left;
    right: 16em;
    display: flex;
    position: relative;
  }
`;

const HeaderTagline = () => {

  return (
    <BoxHeader>
      <Grid container>
        <Grid item md={6} lg={6}>
          <HeadingTagline> Buat langsung undangan nikah kamu secara cepat dan murah.</HeadingTagline>
          <ParagraphTagline color="inherit">
            Dengan banyak pilihan desain yang elegan, minimalis dan
            responsif. Cocok bagi kamu yang ingin tampil beda di undangan
            digital pernikahan kamu.
          </ParagraphTagline>
          <ButtonOrderNow> Order Sekarang </ButtonOrderNow>
        </Grid>
        <Grid item md={6} lg={6}>
          <BoxReactangleSmall>
            <IconCircleLove src={CircleLove} alt="circle-love"/>
            <HeadingLove>
              Kamu berhasil mengatur waktu tanggal pernikahan kamu.
            </HeadingLove>
          </BoxReactangleSmall>
          <OrnamentsOne>
            <img src={OrnamentOne} alt="ornament-one" />
          </OrnamentsOne>
          <OrnamentsTwo>
            <img src={OrnamentTwo} alt="ornament-two" />
          </OrnamentsTwo>
          <OrnamentsThree>
            <img src={OrnamentThree} alt="ornament-three" />
          </OrnamentsThree>
          <OrnamentsFour>
            <img src={OrnamentFour} alt="ornament-four" />
          </OrnamentsFour>
        </Grid>
      </Grid>
    </BoxHeader>
  );
}

export default HeaderTagline
