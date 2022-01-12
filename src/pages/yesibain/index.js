import React, { Fragment } from "react";
import SEO from "@components/seo";
import { CssBaseline } from '@material-ui/core';
import HeaderPlatinum from "@pages/theme/platinum/temporary/header";
import Intro from "@pages/theme/platinum/temporary/intro";
import OurGallery from "@pages/theme/platinum/temporary/gallery";
import QuotesAndDates from "@pages/theme/platinum/temporary/quoteAndDates";
import Footer from "@pages/theme/platinum/temporary/footer";
import "./base.css";

const YesiBain = () => {

  return(
    <Fragment>
      <CssBaseline/>
      <SEO title="Yesi &amp; Bain"/>
      <HeaderPlatinum/>
      <Intro/>
      <OurGallery/>
      <QuotesAndDates/>
      <Footer/>
    </Fragment>
  )
}

export default YesiBain;
