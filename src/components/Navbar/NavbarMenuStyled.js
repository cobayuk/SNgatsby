/*
| ===========================================================
|    This file contains all styles Navbar.
| ===========================================================
|
| Table Of Contents
| - Navbar
|
| Author  : Sungnikah Corporation's.
| Date    : 2 Februari 2020
| Develop : Dimas Prasetyo, Arie Aditya Nugraha (Frontend Dev).
*/

import styled from 'styled-components';
import {
  Link,
  Button,
  Typography,
} from "@material-ui/core";
import { COLORS } from "@styles/constants";

export const LogoNavbar = styled(Typography)`
  flex-grow: 1;
  cursor: pointer;
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


export const NavLinksNavbar = styled.div`
  margin-left: 10px;
  display: flex;
`;

export const LinkNavbar = styled(Link)`
  text-decoration: none;
  color: ${COLORS.white};
  font-size: 20px;
  margin-left: 10px;
  &:hover {
    color: yellow;
    border-bottom: 1px solid white;
  }
`;

export const ButtonLogin = styled(Button)`
  border-radius: 6px;
  border: 1px solid #E2B013;
  color: #E2B013;
  width: 77px;
  height: 30px;
  text-transform: capitalize;
  font-family: Oxygen;
  font-size: 15px;
  font-weight: bold;
  margin-right: 10px;
  &:hover {
    text-decoration: none;
    background-color: linear-gradient(180deg, #F1D88A 0%, rgba(244, 225, 165, 0.770833) 0.01%, rgba(246, 231, 182, 0.62235) 0.02%, rgba(255, 255, 255, 0) 100%), #E2B013;
    color: #E2B013;
  }
`;

export const ButtonDaftar = styled(Button)`
  background-color: #E2B013;
  color: ${COLORS.white};
  &:hover {
    background: linear-gradient(180deg, #F1D88A 0%, rgba(244, 225, 165, 0.770833) 0.01%, rgba(246, 231, 182, 0.62235) 0.02%, rgba(255, 255, 255, 0) 100%), #E2B013;
    color: ${COLORS.white};
    border: 1px solid #E2B013;
  }
  border-radius: 6px;
  width: 77px;
  height: 30px;
  border: none;
  text-transform: capitalize;
  font-family: Oxygen;
  font-size: 15px;
  font-weight: bold;
`;
