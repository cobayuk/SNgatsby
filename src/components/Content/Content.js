import React, { Fragment } from "react";
import HeaderTagline from '@components/Header/HeaderTagline';
import CaraPesan from '@components/Content/CaraPesan/CaraPesan';
import PricingPrice from '@components/Content/Pricing/Pricing';
import CaraKerja from '@components/Content/CaraKerja/CaraKerja';
import Faq from '@components/Content/Faq/Faq';

const Content = () => (
  <Fragment>
    <HeaderTagline />
    <CaraPesan />
    <PricingPrice />
    <CaraKerja />
    <Faq/>
  </Fragment>
)

export default Content
