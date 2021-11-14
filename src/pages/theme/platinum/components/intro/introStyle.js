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
import { Box, Grid } from '@material-ui/core';
import AssetHeader from "@assets/photos/asset-3.jpeg";
// Fonts
import "@fontsource/crimson-text";
import "@fontsource/dancing-script";

// export const WrapperInvitation = styled(Box)`
//     top: 160px;
//     position: relative;
//     @media only screen and (min-width: 768px) and (max-width: 992px) {
//         top: 120px;
//     }
// `;

export const WrapperIntro = styled.div`
    background-color: #F1EDE7;
    padding-bottom: 32px;
`;

export const ContainerIntro = styled.div`
    padding: 30px 100px 0px 100px;
`;

export const IntroText = styled.p`
    font-family: Crimson Text;
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    color: #58595B;
`;

export const Ampersand = styled.p`
    font-family: Dancing Script;
    font-weight: normal;
    font-size: 96px;
    line-height: 24px;
    text-align: center;
    color: #B37C62;
    display: block;
    padding-bottom: 20px;
`;

export const Person = styled.p`
    font-family: Dancing Script;
    font-weight: normal;
    font-size: 96px;
    line-height: 24px;
    text-align: center;
    color: #B37C62;
`;

export const Parent = styled.p`
    font-family: Crimson Text;
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    color: #58595B;
    margin-top : -30px;
`;

export const GroomWrapper = styled.div`
    margin-top: -24px;
`;
