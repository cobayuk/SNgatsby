import React, { Fragment } from "react";
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
  const window = global.window;
  let pathname = typeof window !== 'undefined' ? window.location.pathname : 'undefined';

  const redirection = (url, ) => {
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
          {pathname.toString() === '/demo/portofolio' ? (
            <>
              <Style.Links
                onClick={() => redirection('/')}
              >
                Cara Pesan
              </Style.Links>
              <Style.Links
                onClick={() => redirection('/')}
              >
                Paket Harga
              </Style.Links>
              <Style.Links
                onClick={() => redirection('/')}
              >
                Tentang Kami
              </Style.Links>
              <Style.LinkRedirect>
                Demo
              </Style.LinkRedirect>
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
              <Style.LinkRedirect
                to="/demo/portofolio"
              >
                Demo
              </Style.LinkRedirect>
            </>
          )}
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
