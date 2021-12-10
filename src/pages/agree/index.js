import React, { Fragment } from "react";
import SEO from "@components/seo";
import { CssBaseline } from '@material-ui/core';
import HeaderPlatinum from "@pages/theme/platinum/components/header";
import Intro from "@pages/theme/platinum/components/intro";
import OurGallery from "@pages/theme/platinum/components/gallery";
import QuotesAndDates from "@pages/theme/platinum/components/quoteAndDates";
import AmplopCashless from "@pages/theme/platinum/components/amplopCashless";
import Footer from "@pages/theme/platinum/components/footer";
import "./base.css";

const Agree = () => {

  return(
    <Fragment>
      <CssBaseline/>
      <SEO title="Agung &amp; Rere"/>
      <HeaderPlatinum/>
      <Intro/>
      <OurGallery/>
      <QuotesAndDates/>
      <AmplopCashless/>
      <Footer/>
    </Fragment>
  )
}

export default Agree;
