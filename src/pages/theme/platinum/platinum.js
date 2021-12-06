import React, { Fragment } from "react";
import HeaderPlatinum from "./components/header/header";
import Intro from "./components/intro/intro";
import OurGallery from "./components/gallery/gallery";
import QuotesAndDates from "./components/quoteAndDates/quoteAndDates";
import Protocol from "./components/protocol/protocol";
import AmplopCashless from "./components/amplopCashless/amplopCashless";
import Footer from "./components/footer/footer";
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
