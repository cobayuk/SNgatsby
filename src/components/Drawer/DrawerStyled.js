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
  IconButton,
} from "@material-ui/core";
import { COLORS } from "@styles/constants";

export const LinkDrawer =  styled(Link)`
  text-decoration: none;
  color: blue;
  font-size: 20px;
`;

export const IconButtons =  styled(IconButton)`
  color: ${COLORS.black};
`;

export const Links = styled(Button)`
  margin: 10px;
  font-size: 14px;
  text-decoration: none;
  color: #000;
  font-family: Oxygen, sans-serif;
  font-weight: 600;
  text-transform: capitalize;
`;
