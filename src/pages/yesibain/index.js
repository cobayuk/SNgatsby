import React, { Fragment } from "react";
import SEO from "@components/seo";
import { CssBaseline } from '@material-ui/core';
import HeaderPlatinum from "./components/header";
import Intro from "./components/intro";
import OurGallery from "./components/gallery";
import QuotesAndDates from "./components/quoteAndDates";
import Footer from "./components/footer";
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
