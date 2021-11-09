import React, { Fragment } from "react";
import HeaderTagline from '@components/header-tagline';
import CaraPesan from '@components/cara-pesan';
import PricingPrice from '@components/pricing';
import CaraKerja from '@components/CaraKerja/CaraKerja';

const Content = () => (
  <Fragment>
    <HeaderTagline />
    <CaraPesan />
    <PricingPrice />
    <CaraKerja />
  </Fragment>
)

export default Content
