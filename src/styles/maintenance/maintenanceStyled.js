/*
| ===========================================================
|    This file contains all styles Maintenance.
| ===========================================================
|
| Table Of Contents
| - Maintenance
|
| Author  : Sungnikah Corporation's.
| Date    : 2 Februari 2020
| Develop : Dimas Prasetyo, Arie Aditya Nugraha (Frontend Dev).
*/

import styled from 'styled-components';
import { COLORS } from "../../styles/constants";

export const Container = styled.div`
  text-align: center;
  background-color: ${COLORS.blueMaintance};
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const ImageWrapper = styled.img`
  text-align: center;
  object-fit: cover;
  width: 440px;
  height: 440px;
  margin-top: 20px;
`;

export const Title = styled.h1`
  color: ${COLORS.white};
`;

export const Description = styled.p`
  color: ${COLORS.white};
  font-size: 12px;
  line-height: 18px;
  padding: 0px 30px;
`;

export const Footer = styled.div`
  margin-top: 50px;
`;

export const InstagramIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 30px;
`;

export const FacebookIcon = styled.img`
  width: 30px;
  height: 30px;
`;
