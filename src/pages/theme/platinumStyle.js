/*
| ===========================================================
|    This file contains all styles for Themes 2.
| ===========================================================
|
| Author  : Sungnikah Corporation's.
| Date    : 31 Oct 2021
| Develop : Arie Aditya Nugraha, Dimas Prasetyo (Frontend Dev).
*/

import styled from 'styled-components';
import { Box, Typography, Button } from '@material-ui/core';
import { breakpoints } from '@components/media';
import AssetHeader from "@assets/photos/asset-3.jpeg";
// Fonts
import "@fontsource/crimson-text";
import "@fontsource/questrial";
import "@fontsource/dancing-script";

export const Invite = styled.p`
    font-family: Crimson Text;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: white;
`;

export const Title = styled.p`
    font-family: Questrial;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.3em;
    color: white;
`;

export const Person = styled.p`
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    color: white;
`;

export const CountDown = styled.p`
    font-family: Crimson Text;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    color: white;
`;

export const Header = styled(Box)`
    width: 100vw;
    height: 100vh;
    background-image: url(${AssetHeader});
    background-size: cover;
    position: relative;
    background-position: 50%;
`;