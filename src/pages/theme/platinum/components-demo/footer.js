import React, { useEffect } from "react";
import { Link } from "gatsby";
import * as Style from "@styles/demo/platinum/footerStyle";
import AOS from 'aos'
import 'aos/dist/aos.css';

const Footer = () =>  {

  useEffect(() => {
    AOS.init({
        duration: 1200, // values from 0 to 3000, with step 50ms
        once: false, // whether animation should happen only once - while scrolling down
      });
  }, []);

  return(
    <>
      <Style.Footer>
        <Style.Hashtag data-aos="fade-up">Thankyou #KarimAlyssa</Style.Hashtag>
      </Style.Footer>
      <Style.WrapperWatermark>
        <span>Built with ❤️ by</span> <Link to="/">sungnikah.com</Link>
      </Style.WrapperWatermark>
    </>
  );
}

export default Footer;
