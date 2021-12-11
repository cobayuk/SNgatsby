import React, {useEffect, useState} from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import {
  useTheme,
  CssBaseline,
  useMediaQuery,
  AppBar
} from "@material-ui/core";
import BrandLogo from '@assets/logo/brand.svg';
import NavbarMenu from '@components/Navbar/NavbarMenu';
import DrawerComponent from "@components/Drawer/Drawer";
import * as Style from '@components/Header/HeaderStyled';
import styled from 'styled-components';

const Header = () => {

  // let url = typeof window !== 'undefined' ? window.location.pathname : 'undefined';

  // let sanitizeUrl = url.substring(1, url.lastIndexOf('/'));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [isScroll, setIsScroll] = useState(false);

  const HeaderAppBar = styled(AppBar)`
    position: fixed;
    left: 0;
    top: 0;
    background-color: white;
    box-shadow: ${isScroll ? "0 5px 20px rgb(45 102 229 / 10%);" : "none;"}
  `;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
      setIsScroll(window.pageYOffset > 1)
      );
    }
  }, []);

  return (
    <HeaderAppBar position="static" color="default">
      <CssBaseline />
      <Style.HeaderToolbar>
        {/* <Style.HeaderToolbarTitle variant="h6" color="inherit" noWrap> */}
          <Link to="/">
            <Style.Logobrand src={BrandLogo} alt="brand-logo"/>
          </Link>
        {/* </Style.HeaderToolbarTitle> */}
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <Style.NavbarContainer>
             <NavbarMenu/>
          </Style.NavbarContainer>
        )}
      </Style.HeaderToolbar>
    </HeaderAppBar>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header;
