import React, { useState } from "react";
import {
  Box,
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

  const drawerMenu = [
    {
      id: 0,
      label_name: "Cara Pesan",
      url_name: "#itworks"
    },
    {
      id: 1,
      label_name: "Paket Harga",
      url_name: "#pricing"
    },
    {
      id: 2,
      label_name: "Tentang Kami",
      url_name: "#howitworks"
    },
    {
      id: 3,
      label_name: "Demo",
      url_name: "/demo/portofolio"
    },
    {
      id: 4,
      label_name: "Login",
      url_name: "/client/login"
    },
    {
      id: 5,
      label_name: "Daftar",
      url_name: "/client/daftar"
    }
  ];

  return (
    <>
      <Style.MenuDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {drawerMenu.map((value, key) => (
            <Box key={key}>
              <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Style.LinkDrawer
                  onClick={() => scrollTo(value.url_name)}
                >
                  {value.label_name}
                </Style.LinkDrawer>
              </ListItemText>
              </ListItem>
              <Divider/>
            </Box>
          ))}
        </List>
      </Style.MenuDrawer>
      <Style.IconButtons onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </Style.IconButtons>
    </>
  );
}

export default DrawerComponent;
