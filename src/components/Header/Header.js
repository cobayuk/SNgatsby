import React from "react";
import { Link } from "gatsby"
import PropTypes from "prop-types";
import {
  useTheme,
  CssBaseline,
  useMediaQuery,
} from "@material-ui/core";
import BrandLogo from '@assets/logo/brand.svg';
import NavbarMenu from '@components/Navbar/NavbarMenu';
import DrawerComponent from "@components/Drawer/Drawer";
import * as Style from '@components/Header/HeaderStyled';

const Header = () => {

  let url = window.location.pathname;
  let sanitizeUrl = url.substring(1, url.lastIndexOf('/'));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Style.HeaderAppBar position="static" color="default" elevation={0}>
      <CssBaseline />
      <Style.HeaderToolbar>
        <Style.HeaderToolbarTitle variant="h6" color="inherit" noWrap>
          <Link to="/">
            <Style.Logobrand src={BrandLogo} alt="brand-logo"/>
          </Link>
        </Style.HeaderToolbarTitle>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <NavbarMenu url={sanitizeUrl}/>
        )}
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
