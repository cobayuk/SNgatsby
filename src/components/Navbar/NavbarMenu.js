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
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery('(max-width:425px)')
  const window = global.window;
  let pathname = typeof window !== 'undefined' ? window.location.pathname : 'undefined';

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
              <Style.LinkRedirect to="/">
                Cara Pesan
              </Style.LinkRedirect>
              <Style.LinkRedirect to="/">
                Paket Harga
              </Style.LinkRedirect>
              <Style.LinkRedirect to="/">
                Tentang Kami
              </Style.LinkRedirect>
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
              <Style.LinkRedirect to="/demo/portofolio">
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
