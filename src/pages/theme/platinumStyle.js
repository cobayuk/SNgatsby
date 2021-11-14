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
import { Box, Grid, Typography, Button } from '@material-ui/core';
import { breakpoints } from '@components/media';
import AssetHeader from "@assets/photos/asset-3.jpeg";
// Fonts
import "@fontsource/crimson-text";
import "@fontsource/questrial";
import "@fontsource/dancing-script";

export const WrapperInvitation = styled(Box)`
    top: 160px;
    position: relative;
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        top: 120px;
    }
`;

export const Invite = styled.p`
    font-family: Crimson Text;
    font-style: italic;
    font-weight: normal;
    font-size: 24px;
    line-height: 45px;
    @media (max-width: 600px) {
        font-size: 14px;
        line-height: 15px;
    }
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
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 15px;
    }
`;

export const Groom = styled.p`
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    line-height: 24px;
    @media (max-width: 600px) {
        font-size: 54px;
        line-height: 12px;
        text-align: center;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 80px;
        line-height: 24px;
        text-align: center;
        margin-top: 50px;
    }
    color: white;
    text-align: right;
`;

export const Ampersand = styled.p`
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    line-height: 24px;
    @media (max-width: 600px) {
        font-size: 36px;
        line-height: 36px;
        text-align: center;
        margin: -20px 0px;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 80px;
        line-height: 24px;
        margin: -20px 0px;
    }
    color: white;
`;

export const Bride = styled.p`
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    line-height: 24px;
    @media (max-width: 600px) {
        font-size: 54px;
        line-height: 12px;
        text-align: center;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 80px;
        line-height: 24px;
        text-align: center;
    }
    color: white;
    text-align: left;
`;

export const CountDown = styled.p`
    font-family: Crimson Text;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    @media (max-width: 600px) {
        font-size: 12px;
        line-height: 17px;
    }
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

export const ResponsiveGrid = styled(Grid)`
    @media (max-width: 600px) {
        padding: 0 !important;
    }
`;