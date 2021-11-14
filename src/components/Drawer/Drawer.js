import React, { useState } from "react";
import {
  List,
  Divider,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import scrollTo from 'gatsby-plugin-smoothscroll';
import * as Style from '@components/Drawer/DrawerStyled';

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Style.MenuDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Style.LinkDrawer
              onClick={() => scrollTo('#itworks')}
            >
              Cara Pesan
            </Style.LinkDrawer>
          </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Style.LinkDrawer
                onClick={() => scrollTo('#pricing')}
              >
                Paket Harga
              </Style.LinkDrawer>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Style.LinkDrawer
                onClick={() => scrollTo('#howitworks')}
              >
                Tentang Kami
              </Style.LinkDrawer>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Style.LinkDrawer
                onClick={() => scrollTo('#pricing')}
              >
                Paket Harga
              </Style.LinkDrawer>
            </ListItemText>
          </ListItem>
          <Divider/>
        </List>
      </Style.MenuDrawer>
      <Style.IconButtons onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </Style.IconButtons>
    </>
  );
}

export default DrawerComponent;
