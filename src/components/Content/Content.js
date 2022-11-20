import React from "react";
import HeaderTagline from '@components/Header/HeaderTagline';
import CaraPesan from '@components/Content/CaraPesan/CaraPesan';
import PricingPrice from '@components/Content/Pricing/Pricing';
import CaraKerja from '@components/Content/CaraKerja/CaraKerja';
import Faq from '@components/Content/Faq/Faq';

const Content = () => (
  <>
    <HeaderTagline />
    <CaraPesan />
    <PricingPrice />
    <CaraKerja />
    <Faq/>
  </>
)

export default Content
