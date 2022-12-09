/*
| ===========================================================
|    This file contains Intro styles for Themes Platinum.
| ===========================================================
|
| Author  : Sungnikah Corporation's.
| Date    : 14 Dec 2022
| Develop : Arie Aditya Nugraha, Dimas Prasetyo (Frontend Dev).
*/

import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import AssetHeader from "@assets/photos/akimaul/akim-potrait-2.jpg";
// Fonts
import "@fontsource/crimson-text";
import "@fontsource/dancing-script";

export const ContainerMoment = styled.section`
    background: #FFFFFF;
    padding: 20px 0px 80px 0px;
    width: 100vw;
    background:
        linear-gradient(
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.9)
        ),
        url(${AssetHeader});
    }
    background-size: cover;
    position: relative;
    background-position: 55%;
    @media (min-width: 768px) {
        background-position: 35% 20%;
    }
    text-align: center;
`;

export const InnerContainer = styled.div`
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
`;

export const IntroMoment = styled.h1`
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    color: #ffffff;
    padding-top: 40px;
    text-align: center;
    margin-bottom: 20px;
`;

export const SummaryMoment = styled.p`
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    padding: 0px 40px 20px 40px;
    @media (min-width: 1024px) {
        padding: 0px 100px 20px 100px;
    }
`;

export const WrapperIntro = styled.div`
    background-color: #F1EDE7;
    padding-bottom: 32px;
`;

export const GridContainer = styled(Grid)`
    padding-top: 16px;
    padding-bottom: 16px;
`;

export const GridItem = styled(Grid)`
    @media (min-width: 576px) {
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
    }
`;

export const ExploreContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const ExploreMoment = styled.a`
  text-decoration: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  :hover {
    transform: translateY(-7px);
    box-shadow: 0px 15px 20px rgb(135 138 137 / 40%);
  }
  padding: 8px 36px;
  border-radius: 45px;
  border: none;
  background: white;
  display: flex;
  align-items: center;
  transition: all 0.3s ease 0s;
  span {
    color: #B37C62;
  }
`;

export const InstagramIcon = styled.svg`
    fill: #B37C62;
    margin-right: 8px;
`;
