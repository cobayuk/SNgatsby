import React, { Fragment, useState } from "react";
import Cover from "./components-demo/cover";
import HeaderPlatinum from "./components-demo/header";
import Intro from "./components-demo/intro";
import OurGallery from "./components-demo/gallery";
import QuotesAndDates from "./components-demo/quoteAndDates";
import LiveMoment from "./components-demo/liveMoment";
import Protocol from "./components-demo/protocol";
import SEO from "./components-demo/seo";

import Footer from "./components-demo/footer";
import "./base.css";
import VideoSection from "./components-demo/video";
import SendGift from "./components-demo/sendGift";
import Comments from "../../components/Comments";

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
          <VideoSection/>
          <Intro/>

          <OurGallery/>
          <QuotesAndDates/>
          <LiveMoment />
          <Protocol/>
          <SendGift/>
          <Comments/>
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
