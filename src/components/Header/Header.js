import React from "react";
import PropTypes from "prop-types";
import scrollTo from 'gatsby-plugin-smoothscroll';
import BrandLogo from '@assets/logo/brand.svg';
import * as Style from '@components/Header/HeaderStyled';

const Header = () => {

  return (
    <Style.HeaderAppBar position="static" color="default" elevation={0}>
      <Style.HeaderToolbar>
        <Style.HeaderToolbarTitle variant="h6" color="inherit" noWrap>
          <Style.Logobrand src={BrandLogo} alt="brand-logo"/>
        </Style.HeaderToolbarTitle>
        <nav>
          <Style.Links
            onClick={() => scrollTo('#itworks')}
          >
            Cara Pesan
          </Style.Links>
          <Style.Links
            onClick={() => scrollTo('#pricing')}
          >
            Paket Harga
          </Style.Links>
          <Style.Links
            onClick={() => scrollTo('#howitworks')}
          >
            Tentang Kami
          </Style.Links>
          <Style.Links
            to="/demo/portofolio"
          >
            Demo
          </Style.Links>
        </nav>
        <Style.ButtonLogin href="/client/login">
          Login
        </Style.ButtonLogin>
        <Style.Links href="/client/daftar">
          Daftar
        </Style.Links>
      </Style.HeaderToolbar>
    </Style.HeaderAppBar>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
