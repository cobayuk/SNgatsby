import React from "react";
import SEO from "../components/seo";
import * as Style from "../../src/styles/maintenanceStyled";
import ConstructionImage from "../images/under-construction.gif";
import Instagram from "../images/instagram.svg";
import Facebook from "../images/facebook.svg";

const Maintenance = () => (
  <Style.GlobalStyle>
    <SEO title="Sungnikah - Jasa Pembuatan Wedding Website" />
    <Style.Container>
      <Style.ImageWrapper src={ConstructionImage} alt="under-construction"/>
      <Style.Title>Website under construction</Style.Title>
      <Style.Description>Welcome to <b>Sungnikah.com</b>, we are currently working on this site. <br/>Meanwhile, you can get updates in our social media below!</Style.Description>
      <Style.Footer>
        <a href="https://www.instagram.com/sungnikah/">
          <Style.InstagramIcon src={Instagram} alt="instagram"/>
        </a>
        <a href="https://www.facebook.com/sungnikah/">
          <Style.FacebookIcon src={Facebook} alt="facebook"/>
        </a>
      </Style.Footer>
    </Style.Container>
  </Style.GlobalStyle>
)

export default Maintenance
