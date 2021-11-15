/*
| ===========================================================
|    This file contains all styles Drawer.
| ===========================================================
|
| Table Of Contents
| - Drawer
|
| Author  : Sungnikah Corporation's.
| Date    : 2 Februari 2020
| Develop : Dimas Prasetyo, Arie Aditya Nugraha (Frontend Dev).
*/

import styled from 'styled-components';
import {
  Link,
  Button,
  Drawer,
  IconButton,
} from "@material-ui/core";
import { COLORS, FONT_FAMILY } from "@styles/constants";

export const LinkDrawer = styled(Link)`
  text-decoration: none;
  color: ${COLORS.black};
  font-family: ${FONT_FAMILY.oxygen};
  font-size: 14px;
`;

export const IconButtons = styled(IconButton)`
  color: ${COLORS.black};
  &.MuiSvgIcon-root {
    font-size: 150px;
  }
`;

export const Links = styled(Button)`
  margin: 10px;
  font-size: 14px;
  text-decoration: none;
  color: ${COLORS.black};
  font-family: ${FONT_FAMILY.oxygen};
  font-weight: 600;
  text-transform: capitalize;
`;

export const MenuDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    max-width: 100%;
    width: 70%;
  }
`;
