import React from "react";
import SEO from "@components/seo";
import AssetJPG from "@assets/404/404.jpg";
import * as Style from "../styles/404-Styled";

const NotFoundPage = () => (
  <>
    <SEO title="404" />
    <Style.DescriptionContainer>
      <Style.ImageNotFound src={AssetJPG} alt="404-not-found" width="500" height="375"/>
      <h1>Page not Found </h1>
      <p>We couldn&apos;t find <br/> the page you&apos;re looking for</p>
      <Style.LinkCustom to="/">
        <span>Back to homepage</span>
      </Style.LinkCustom>
    </Style.DescriptionContainer>
  </>
)

export default NotFoundPage
