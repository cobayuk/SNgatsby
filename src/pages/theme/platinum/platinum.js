import React, { Fragment } from "react";
import HeaderPlatinum from "./components-demo/header";
import Intro from "./components-demo/intro";
import OurGallery from "./components-demo/gallery";
import QuotesAndDates from "./components-demo/quoteAndDates";
import Protocol from "./components-demo/protocol";
import AmplopCashless from "./components-demo/amplopCashless";
import Footer from "./components-demo/footer";
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
