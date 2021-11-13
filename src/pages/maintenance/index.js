import React from "react";
import { Link } from "@material-ui/core";
import SEO from "@components/seo";
import * as Style from "@styles/maintenance/maintenanceStyled";
import ConstructionImage from "@images/under-construction.gif";
import Instagram from "@images/instagram.svg";
import Facebook from "@images/facebook.svg";
import "../maintenance/maintenance.css";

const Maintenance = () => (
  <>
    <SEO title="Sungnikah - Jasa Pembuatan Wedding Website" />
    <Style.Container>
      <Style.ImageWrapper src={ConstructionImage} alt="under-construction"/>
      <Style.Title>Website under construction</Style.Title>
      <Style.Description>Welcome to <b>Sungnikah.com</b>, we are currently working on this site. <br/>Meanwhile, you can get updates in our social media below!</Style.Description>
      <Style.Footer>
        <Link href="https://www.instagram.com/sungnikah/">
          <Style.InstagramIcon src={Instagram} alt="instagram"/>
        </Link>
        <Link href="https://www.facebook.com/sungnikah/">
          <Style.FacebookIcon src={Facebook} alt="facebook"/>
        </Link>
      </Style.Footer>
    </Style.Container>
  </>
)

export default Maintenance
