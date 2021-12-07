import React, { Fragment } from "react";
import HeaderPlatinum from "./components/header";
import Intro from "./components/intro";
import OurGallery from "./components/gallery";
import QuotesAndDates from "./components/quoteAndDates";
import Protocol from "./components/protocol";
import AmplopCashless from "./components/amplopCashless";
import Footer from "./components/footer";
import "./base.css";

const PlatinumTheme = () =>  {

  return(
    <Fragment>
      <HeaderPlatinum/>
      <Intro/>
      <OurGallery/>
      <QuotesAndDates/>
      <Protocol/>
      <AmplopCashless/>
      <Footer/>
    </Fragment>
  )
}

export default PlatinumTheme;
