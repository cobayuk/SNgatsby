/*
| ===========================================================
|    This file contains Intro styles for Themes Platinum.
| ===========================================================
|
| Author  : Sungnikah Corporation's.
| Date    : 14 Nov 2021
| Develop : Arie Aditya Nugraha, Dimas Prasetyo (Frontend Dev).
*/

import styled from 'styled-components';
import { Grid } from '@material-ui/core';
// Fonts
import "@fontsource/crimson-text";
import "@fontsource/dancing-script";

export const WrapperIntro = styled.div`
    background-color: #F1EDE7;
    padding-bottom: 32px;
`;

export const ContainerIntro = styled.div`
    padding: 30px 100px 0px 100px;
    @media (max-width: 600px) {
        padding: 30px 50px 0px 50px;
    }
`;

export const IntroText = styled.p`
    font-family: Crimson Text;
    font-weight: normal;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    color: #58595B;
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

export const Ampersand = styled.p`
    font-family: Dancing Script;
    font-weight: normal;
    font-size: 9em;
    line-height: 24px;
    text-align: center;
    color: #B37C62;
    display: block;
    margin-top: 50px;
    @media (max-width: 600px) {
        font-size: 5em;
        line-height: 24px;
    }
`;

export const Parent = styled.p`
    font-family: Crimson Text;
    font-weight: normal;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    color: #58595B;
    margin-top : -30px;
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

export const GridCustom = styled(Grid)`
    align-items: baseline;
    margin-bottom: 40px;
`;

export const Poster = styled.img`
    border-radius: 50%;
    max-width: 100%;
`;

export const GroomWrapper = styled.div`
    margin-top: -24px;
    @media (max-width: 600px) {
        padding: 0px 25px;
    }
`;

export const BrideWrapper = styled.div`
    @media (max-width: 600px) {
        padding: 0px 25px;
    }
`;

export const AvatarWrapper = styled.div`
    text-align: center;
    margin-top: 40px;
    margin-bottom: -20px;
`;

export const PersonName = styled.p`
    font-family: Crimson Text;
    font-weight: 400;
    text-align: center;
    color: #B37C62;
    margin: 40px 0px;
    @media (min-width: 320px) {
      font-size: 24px;
      line-height: 16px;
    }
    @media (min-width: 600px) {
        font-size: 24px;
        line-height: 16px;
    }
`;

export const InstagramWrapper = styled.div`
    text-align: center;
    display: block;
    margin-top: 10px;
`;

export const InstagramContainer = styled.a`
    background: #B37C62;
    border-radius: 50%;
    padding: 4px;
    display: inline-flex;
    :hover {
      background: #e98a5e;
    }
`;

export const InstagramIcon = styled.svg`
    fill: #FFFFFF;
`;
