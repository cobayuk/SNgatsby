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

export const WrapperInvitation = styled(Box)`
    top: 160px;
    position: relative;
`;

export const Invite = styled.p`
    font-family: Crimson Text;
    font-style: italic;
    font-weight: normal;
    font-size: 24px;
    line-height: 45px;
    color: white;
`;

export const Title = styled.p`
    font-family: Questrial;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 37px;
    letter-spacing: 0.3em;
    color: white;
`;

export const Groom = styled.p`
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    line-height: 24px;
    color: white;
    text-align: right;
`;

export const Ampersand = styled.p`
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    line-height: 24px;
    color: white;
`;

export const Bride = styled.p`
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    line-height: 24px;
    color: white;
    text-align: left;
`;

export const CountDown = styled.p`
    font-family: Crimson Text;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    color: white;
`;

export const Header = styled(Box)`
    width: 100vw;
    height: 100vh;
    background-image: url(${AssetHeader});
    background-size: cover;
    position: relative;
    background-position: 50%;
    text-align: center;
`;