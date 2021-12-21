import React, { Fragment } from "react";
import { Link } from "gatsby";
import {
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import PropTypes from "prop-types";
import scrollTo from 'gatsby-plugin-smoothscroll';
import DrawerComponent from "@components/Drawer/Drawer";
import * as Style from '@components/Navbar/NavbarMenuStyled';

const NavbarMenu = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = window.location.pathname;

  const redirection = (url) => {
    return window.location = url;
  }

  return (
    <Fragment>
      {isMobile ? (
        <>
          <DrawerComponent/>
        </>
      ) : (
        <>
          {pathname === '/demo/portofolio/' ? (
            <>
              <Style.Links
                onClick={() => redirection('/#itworks')}
              >
                Cara Pesan
              </Style.Links>
              <Style.Links
                onClick={() => redirection('/#pricing')}
              >
                Paket Harga
              </Style.Links>
              <Style.Links
                onClick={() => redirection('/#howitworks')}
              >
                Tentang Kami
              </Style.Links>
            </>
          ) : (
            <>
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
            </>
          )}
          <Style.Links
            onClick={() => redirection('demo/portofolio')}
          >
            Demo
          </Style.Links>
          {/* <Style.ButtonLogin href="#">
            Login
          </Style.ButtonLogin>
          <Style.ButtonDaftar href="#">
            Daftar
          </Style.ButtonDaftar> */}
        </>
      )}
    </Fragment>
  );
}

NavbarMenu.propTypes = {
  url: PropTypes.any.isRequired,
}

export default NavbarMenu;
