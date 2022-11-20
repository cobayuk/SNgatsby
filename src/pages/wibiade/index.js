import React, { Fragment, useState } from "react";
import Cover from "./components-demo/cover";
import HeaderPlatinum from "./components-demo/header";
import Intro from "./components-demo/intro";
import OurGallery from "./components-demo/gallery";
import QuotesAndDates from "./components-demo/quoteAndDates";
import Protocol from "./components-demo/protocol";
import AmplopCashless from "./components-demo/amplopCashless";
import SEO from "./components-demo/seo";

import Footer from "./components-demo/footer";
import "./base.css";

const Index = () =>  {

  const [open, setOpen] = useState(false)

  const openInvitation = () => {
    setOpen(true)
  }

  return(
    <Fragment>
      <SEO/>
      {open ? (
        <Fragment>
          <HeaderPlatinum/>
          <Intro/>
          <OurGallery/>
          <QuotesAndDates/>
          <Protocol/>
          <AmplopCashless/>
          <Footer/>
        </Fragment>
      ) : (
        <Cover
          onClick={openInvitation}
          action="Open Invitation"
        />
      )}
    </Fragment>
  )
}

export default Index;
